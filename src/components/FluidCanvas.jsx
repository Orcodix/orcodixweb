import React, { useEffect, useRef } from 'react';

export default function FluidCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl', { alpha: true, antialias: true }) || canvas.getContext('experimental-webgl');
    if (!gl) return;

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Vertex Shader
    const vsSource = `
      attribute vec2 a_position;
      void main() {
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    // Fragment Shader
    const fsSource = `
      precision highp float;

      uniform vec2 u_resolution;
      uniform vec2 u_mouse;
      uniform float u_mouse_active;
      uniform float u_time;

      // Color Palette
      const vec3 c_deep_blue  = vec3(0.027, 0.105, 0.568);  // #071B91
      const vec3 c_royal_blue = vec3(0.078, 0.356, 0.909);  // #145BE8
      const vec3 c_purple     = vec3(0.392, 0.152, 0.850);  // #6427D9
      const vec3 c_violet     = vec3(0.552, 0.290, 0.909);  // #8D4AE8
      const vec3 c_pink       = vec3(0.850, 0.545, 0.847);  // #D98BD8
      const vec3 c_light_pink = vec3(0.941, 0.768, 0.929);  // #F0C4ED

      // Organic Fluid Ribbon Signed Distance Field
      float organicShape(vec2 p) {
        float y = p.y;
        
        // Flowing smooth liquid silhouette
        float curve1 = sin(y * 2.1 + 0.6) * 0.18;
        float curve2 = cos(y * 4.2 - 0.7) * 0.08;
        float curve3 = sin(y * 7.0 + 1.1) * 0.04;
        
        float centerX = 0.26 + curve1 + curve2 + curve3;
        float width = 0.26 + sin(y * 1.9 + 0.3) * 0.07 + cos(y * 3.8) * 0.035;
        
        return abs(p.x - centerX) - width;
      }

      void main() {
        vec2 st = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / u_resolution.y;
        vec2 mouseSt = (u_mouse - 0.5 * u_resolution.xy) / u_resolution.y;
        
        // Localized Mouse Radial Distortion
        float distToMouse = length(st - mouseSt);
        float mouseRadius = 0.22; // ~160px interaction radius
        
        float mouseFalloff = smoothstep(mouseRadius, 0.0, distToMouse) * u_mouse_active;
        
        vec2 displacedSt = st;
        if (mouseFalloff > 0.001) {
          float wave = sin(distToMouse * 38.0 - u_time * 5.0) * 0.024 * mouseFalloff;
          vec2 dir = normalize(st - mouseSt + vec2(0.0001));
          displacedSt += dir * wave;
        }
        
        float sdf = organicShape(displacedSt);
        float edgeBlur = 0.07;
        float alpha = smoothstep(0.04, -edgeBlur, sdf);
        
        if (alpha <= 0.001) {
          discard;
        }
        
        // Calculate 3D Depth & Lighting Normal
        vec2 eps = vec2(0.003, 0.0);
        float nX = organicShape(displacedSt + eps.xy) - organicShape(displacedSt - eps.xy);
        float nY = organicShape(displacedSt + eps.yx) - organicShape(displacedSt - eps.yx);
        vec3 normal = normalize(vec3(nX, nY, 0.07));
        
        vec3 lightDir = normalize(vec3(-0.4, 0.7, 0.7));
        float diffuse = max(dot(normal, lightDir), 0.0);
        float specular = pow(max(dot(reflect(-lightDir, normal), vec3(0.0, 0.0, 1.0)), 0.0), 18.0);
        
        // Color Blend: Dominant Blue Core with Purple & Soft Pink Edges
        float tY = clamp((displacedSt.y + 0.8) / 1.6, 0.0, 1.0);
        vec3 coreColor = mix(c_deep_blue, c_royal_blue, tY);
        
        float edgeFactor = smoothstep(-0.22, 0.0, sdf);
        vec3 edgeColor = mix(c_purple, c_pink, sin(tY * 3.1415 + 0.5) * 0.5 + 0.5);
        
        float rim = pow(1.0 - max(dot(normal, vec3(0.0, 0.0, 1.0)), 0.0), 2.2);
        vec3 rimColor = mix(c_violet, c_light_pink, rim);
        
        vec3 finalColor = mix(coreColor, edgeColor, edgeFactor * 0.65);
        finalColor = mix(finalColor, rimColor, rim * 0.4);
        finalColor += vec3(diffuse * 0.14) + vec3(specular * 0.35 * c_light_pink);
        
        // Soft outer ambient glow
        float glow = smoothstep(0.12, 0.0, sdf) * 0.25;
        finalColor += c_violet * glow;
        
        gl_FragColor = vec4(finalColor, alpha * 0.95);
      }
    `;

    // Compile Shader Helper
    const createShader = (gl, type, source) => {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertShader = createShader(gl, gl.VERTEX_SHADER, vsSource);
    const fragShader = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
    if (!vertShader || !fragShader) return;

    const program = gl.createProgram();
    gl.attachShader(program, vertShader);
    gl.attachShader(program, fragShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    // Quad geometry covering canvas
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
      -1, -1,
       1, -1,
      -1,  1,
      -1,  1,
       1, -1,
       1,  1,
    ]), gl.STATIC_DRAW);

    const aPositionLoc = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(aPositionLoc);
    gl.vertexAttribPointer(aPositionLoc, 2, gl.FLOAT, false, 0, 0);

    // Uniform Locations
    const uResLoc = gl.getUniformLocation(program, 'u_resolution');
    const uMouseLoc = gl.getUniformLocation(program, 'u_mouse');
    const uMouseActiveLoc = gl.getUniformLocation(program, 'u_mouse_active');
    const uTimeLoc = gl.getUniformLocation(program, 'u_time');

    // Interaction State Variables
    let animationFrameId;
    let width = 0;
    let height = 0;

    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      active: 0,
      targetActive: 0
    };

    const handleResize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Mouse & Touch Listeners
    const handlePointerMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      mouse.targetX = (clientX - rect.left) * dpr;
      // WebGL Y origin is bottom
      mouse.targetY = (rect.height - (clientY - rect.top)) * dpr;
      mouse.targetActive = 1.0;
    };

    const handlePointerLeave = () => {
      mouse.targetActive = 0.0;
    };

    const parent = canvas.parentElement || window;
    parent.addEventListener('mousemove', handlePointerMove);
    parent.addEventListener('mouseleave', handlePointerLeave);
    parent.addEventListener('touchmove', handlePointerMove, { passive: true });
    parent.addEventListener('touchend', handlePointerLeave);

    const startTime = performance.now();

    const render = (now) => {
      const elapsedTime = (now - startTime) * 0.001;

      // Smooth lerp for mouse movement
      mouse.x += (mouse.targetX - mouse.x) * 0.12;
      mouse.y += (mouse.targetY - mouse.y) * 0.12;
      mouse.active += (mouse.targetActive - mouse.active) * 0.08;

      gl.useProgram(program);
      gl.uniform2f(uResLoc, canvas.width, canvas.height);
      gl.uniform2f(uMouseLoc, mouse.x, mouse.y);
      gl.uniform1f(uMouseActiveLoc, prefersReducedMotion ? 0 : mouse.active);
      gl.uniform1f(uTimeLoc, elapsedTime);

      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLES, 0, 6);

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      parent.removeEventListener('mousemove', handlePointerMove);
      parent.removeEventListener('mouseleave', handlePointerLeave);
      parent.removeEventListener('touchmove', handlePointerMove);
      parent.removeEventListener('touchend', handlePointerLeave);
    };
  }, []);

  return (
    <div className="fluid-canvas-container">
      <canvas ref={canvasRef} className="fluid-canvas" />
    </div>
  );
}
