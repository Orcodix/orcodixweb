import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import {
  SURFACE_VERT,
  SURFACE_FRAG,
  createSculptureGeometries
} from './OrganicSculpture';
import { buildContourGroup } from './ContourLines';

export default function Hero3D() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = container.clientWidth < 768;

    /* ============================================================
       1. RENDERER SETUP
    ============================================================ */
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });

    const dpr = Math.min(window.devicePixelRatio, 2);
    renderer.setPixelRatio(dpr);
    renderer.setClearColor(0x000000, 0); // Transparent background
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    /* ============================================================
       2. SCENE & CAMERA SETUP
    ============================================================ */
    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      40,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );

    // Position camera to view tall sculpture from right center
    camera.position.set(0.6, 0.1, 5.4);
    camera.lookAt(0.3, 0.0, 0.0);

    /* ============================================================
       3. MOUSE TRACKING & INTERACTION STATE
    ============================================================ */
    const mouse = {
      ndc:        new THREE.Vector2(-9999, -9999),
      rawObject:  new THREE.Vector2(-9999, -9999),
      smoothObj:  new THREE.Vector2(-9999, -9999),
      prevObj:    new THREE.Vector2(-9999, -9999),
      velocity: 0,
      strength: 0,
      targetStrength: 0,
    };

    /* Shared uniforms for surface + contour lines (Object Space) */
    const sharedUniforms = {
      uMouse:               { value: new THREE.Vector2(0, 0) },
      uInteractionStrength: { value: 0 },
      uMouseVel:            { value: 0 },
      uTime:                { value: 0 },
    };

    /* ============================================================
       4. SCULPTURE & CONTOUR LINES CREATION
    ============================================================ */
    const sculptureObjects = createSculptureGeometries(isMobile);
    const sculptureGroup   = new THREE.Group();

    // Create surface meshes
    const surfaceMeshes = [];
    sculptureObjects.forEach(({ geometry }) => {
      const mat = new THREE.ShaderMaterial({
        vertexShader:   SURFACE_VERT,
        fragmentShader: SURFACE_FRAG,
        uniforms: {
          ...sharedUniforms,
        },
        transparent: true,
        side: THREE.FrontSide,
        depthTest: true,
        depthWrite: true,
      });

      const mesh = new THREE.Mesh(geometry, mat);
      surfaceMeshes.push(mesh);
      sculptureGroup.add(mesh);
    });

    // Create multi-layer contour lines
    const contourGroup = buildContourGroup(sculptureObjects, sharedUniforms, isMobile);
    sculptureGroup.add(contourGroup);

    // Position & scale setup
    if (isMobile) {
      sculptureGroup.position.set(0.2, 0.0, 0.0);
      sculptureGroup.scale.set(0.60, 0.60, 0.60);
    } else {
      sculptureGroup.position.set(0.5, 0.0, 0.0);
      sculptureGroup.scale.set(0.80, 0.80, 0.80);
    }

    scene.add(sculptureGroup);

    /* ============================================================
       5. GLOBAL RAYCASTER & LOCAL OBJECT-SPACE PROJECTION
    ============================================================ */
    const raycaster = new THREE.Raycaster();
    const planeZ0   = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
    const hitWorld  = new THREE.Vector3();
    const hitLocal  = new THREE.Vector3();

    const onMouseMove = (e) => {
      if (prefersReducedMotion) return;

      // Use viewport coordinates relative to container
      const rect = container.getBoundingClientRect();
      mouse.ndc.x =  ((e.clientX - rect.left) / rect.width)  * 2 - 1;
      mouse.ndc.y = -((e.clientY - rect.top)  / rect.height) * 2 + 1;

      // Project onto Z=0 plane in World Space
      raycaster.setFromCamera(mouse.ndc, camera);
      if (raycaster.ray.intersectPlane(planeZ0, hitWorld)) {
        // Convert to LOCAL OBJECT SPACE of sculptureGroup!
        hitLocal.copy(hitWorld);
        sculptureGroup.worldToLocal(hitLocal);
        mouse.rawObject.set(hitLocal.x, hitLocal.y);
      }
    };

    const onMouseLeave = () => {
      mouse.targetStrength = 0;
    };

    // Attach to window so grid overlays don't block mouse tracking
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseleave', onMouseLeave);

    /* ============================================================
       6. RESIZE OBSERVER
    ============================================================ */
    const onResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);

      const mobileCheck = w < 768;
      if (mobileCheck) {
        sculptureGroup.position.set(0.2, 0.0, 0.0);
        sculptureGroup.scale.set(0.60, 0.60, 0.60);
      } else {
        sculptureGroup.position.set(0.5, 0.0, 0.0);
        sculptureGroup.scale.set(0.80, 0.80, 0.80);
      }
    };

    const resizeObserver = new ResizeObserver(onResize);
    resizeObserver.observe(container);

    /* ============================================================
       7. ANIMATION LOOP (CALM BASELINE + LOCALIZED MOUSE RESPONSE)
    ============================================================ */
    let rafId;
    const clock = new THREE.Clock();

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      const delta   = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // 1. Mouse Lerp Smoothing in Object Space
      const lerpFactor = Math.min(1.0, delta * 10.0);
      mouse.smoothObj.lerp(mouse.rawObject, lerpFactor);

      // 2. Velocity Calculation
      const distMoved = mouse.smoothObj.distanceTo(mouse.prevObj);
      const currentVel = Math.min(distMoved * 16.0, 1.0);
      mouse.velocity += (currentVel - mouse.velocity) * Math.min(1.0, delta * 8.0);
      mouse.prevObj.copy(mouse.smoothObj);

      // 3. Hover Hit Test — Check cursor proximity in local object space
      if (!prefersReducedMotion && mouse.ndc.x > -2.0) {
        raycaster.setFromCamera(mouse.ndc, camera);
        const hits = raycaster.intersectObjects(surfaceMeshes);
        if (hits.length > 0) {
          mouse.targetStrength = 1.0;
        } else {
          // Smooth falloff if cursor is near object boundary in Object Space
          const distFromCenter = mouse.smoothObj.length();
          if (distFromCenter < 2.4) {
            mouse.targetStrength = Math.max(0, 1.0 - (distFromCenter - 1.0) / 1.4);
          } else {
            mouse.targetStrength = 0;
          }
        }
      }

      mouse.strength += (mouse.targetStrength - mouse.strength) * Math.min(1.0, delta * 6.0);

      // 4. Update GLSL uniforms (Object Space)
      sharedUniforms.uMouse.value.copy(mouse.smoothObj);
      sharedUniforms.uInteractionStrength.value = mouse.strength;
      sharedUniforms.uMouseVel.value = mouse.velocity;
      sharedUniforms.uTime.value = elapsed;

      // 5. Subtle camera parallax (max 1.5 degrees)
      if (!prefersReducedMotion) {
        const targetCamX = 0.6 + (mouse.ndc.x * 0.06);
        const targetCamY = 0.1 + (mouse.ndc.y * 0.04);
        camera.position.x += (targetCamX - camera.position.x) * 0.04;
        camera.position.y += (targetCamY - camera.position.y) * 0.04;
        camera.lookAt(0.3, 0.0, 0.0);
      }

      // Render
      renderer.render(scene, camera);
    };

    animate();

    /* ============================================================
       8. CLEANUP
    ============================================================ */
    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);

      // Dispose geometries & materials
      sculptureObjects.forEach(({ geometry }) => geometry.dispose());
      surfaceMeshes.forEach(mesh => mesh.material.dispose());

      contourGroup.children.forEach(line => {
        if (line.geometry) line.geometry.dispose();
        if (line.material) line.material.dispose();
      });

      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="hero3d-container"
      aria-hidden="true"
    />
  );
}
