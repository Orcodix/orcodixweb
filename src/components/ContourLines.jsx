import * as THREE from 'three';
import { DEFORM_GLSL } from './OrganicSculpture';

/* ============================================================
   CONTOUR LINE SHADERS
   Uses identical GLSL vertex deformation as the surface mesh.
============================================================ */
export const LINE_VERT = /* glsl */`
${DEFORM_GLSL}

uniform vec2  uMouse;
uniform float uInteractionStrength;
uniform float uMouseVel;
uniform float uTime;

varying float vDeform;
varying float vMouseDist;

void main() {
  vec3 deformed = deformPosition(position, uMouse, uInteractionStrength, uMouseVel, uTime);

  vMouseDist = length(deformed.xy - uMouse);
  vDeform    = length(deformed - position);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(deformed, 1.0);
}
`;

export const LINE_FRAG = /* glsl */`
precision highp float;

uniform float uLineOpacity;
uniform float uInteractionStrength;
uniform vec3  uLineColor;

varying float vDeform;
varying float vMouseDist;

void main() {
  float alpha = uLineOpacity;

  // Localized mouse proximity brightness boost
  float mouseBoost = (1.0 - smoothstep(0.0, 1.5, vMouseDist)) * uInteractionStrength * 0.60;

  // Local deformation boost
  float deformBoost = vDeform * 1.5;

  float finalAlpha = clamp(alpha + mouseBoost + deformBoost, 0.0, 1.0);
  vec3 finalColor = uLineColor + vec3(mouseBoost * 0.8, mouseBoost * 0.3, 0.0);

  gl_FragColor = vec4(finalColor, finalAlpha);
}
`;

/* ============================================================
   EXTRACT CONTOUR LINES FROM TUBE GEOMETRY
   Generates cross-section latitude rings and longitudinal ribs
   from actual 3D tube vertex grids.
============================================================ */
export function extractContourLineGeometries(tubeGeo, ringDensity = 24, ribCount = 8) {
  const posAttr = tubeGeo.attributes.position;
  const count   = posAttr.count;

  // TubeGeometry layout: (tubularSegments + 1) * (radialSegments + 1)
  const radialSegs  = tubeGeo.parameters.radialSegments;
  const vertsPerRing = radialSegs + 1;
  const totalRings   = Math.floor(count / vertsPerRing);

  const ringGeos = [];
  const ribGeos  = [];

  // --- 1. LATITUDE CONTOUR RINGS (Cross-section loops around tube) ---
  const ringStep = Math.max(1, Math.floor(totalRings / ringDensity));
  for (let r = 0; r < totalRings; r += ringStep) {
    const ringPositions = [];

    for (let c = 0; c < vertsPerRing; c++) {
      const idx = r * vertsPerRing + c;
      if (idx < count) {
        ringPositions.push(posAttr.getX(idx), posAttr.getY(idx), posAttr.getZ(idx));
      }
    }

    if (ringPositions.length >= 6) {
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.Float32BufferAttribute(ringPositions, 3));
      ringGeos.push(geo);
    }
  }

  // --- 2. LONGITUDINAL CONTOUR RIBS (Flowing lines down tube length) ---
  const ribStep = Math.max(1, Math.floor(radialSegs / ribCount));
  for (let c = 0; c < radialSegs; c += ribStep) {
    const ribPositions = [];

    for (let r = 0; r < totalRings; r++) {
      const idx = r * vertsPerRing + c;
      if (idx < count) {
        ribPositions.push(posAttr.getX(idx), posAttr.getY(idx), posAttr.getZ(idx));
      }
    }

    if (ribPositions.length >= 6) {
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.Float32BufferAttribute(ribPositions, 3));
      ribGeos.push(geo);
    }
  }

  return { ringGeos, ribGeos };
}

/* ============================================================
   MULTI-LAYER CONTOUR SYSTEM GENERATOR
============================================================ */
const ORANGE_COLOR = new THREE.Color(0xFE6903);

export function buildContourGroup(sculptureObjects, sharedUniforms, isMobile = false) {
  const group = new THREE.Group();

  sculptureObjects.forEach(({ geometry }, index) => {
    // Adjust density per tube mesh
    const ringDensity = isMobile ? (index === 0 ? 18 : 12) : (index === 0 ? 32 : 20);
    const ribCount    = isMobile ? (index === 0 ? 6 : 4)   : (index === 0 ? 10 : 6);

    const { ringGeos, ribGeos } = extractContourLineGeometries(geometry, ringDensity, ribCount);

    // --- LAYER 1: Subtle Dark Orange Background Lines (opacity 0.22) ---
    const matLayer1 = new THREE.ShaderMaterial({
      vertexShader:   LINE_VERT,
      fragmentShader: LINE_FRAG,
      uniforms: {
        ...sharedUniforms,
        uLineOpacity: { value: 0.22 },
        uLineColor:   { value: new THREE.Color(ORANGE_COLOR).multiplyScalar(0.7) },
      },
      transparent: true,
      depthTest: true,
      depthWrite: false,
      blending: THREE.NormalBlending,
    });

    // --- LAYER 2: Main Orange Contour Lines (opacity 0.55) ---
    const matLayer2 = new THREE.ShaderMaterial({
      vertexShader:   LINE_VERT,
      fragmentShader: LINE_FRAG,
      uniforms: {
        ...sharedUniforms,
        uLineOpacity: { value: 0.55 },
        uLineColor:   { value: ORANGE_COLOR },
      },
      transparent: true,
      depthTest: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    // --- LAYER 3: Bright Accent Highlight Lines (opacity 0.85) ---
    const matLayer3 = new THREE.ShaderMaterial({
      vertexShader:   LINE_VERT,
      fragmentShader: LINE_FRAG,
      uniforms: {
        ...sharedUniforms,
        uLineOpacity: { value: 0.85 },
        uLineColor:   { value: new THREE.Color(0xFF8822) },
      },
      transparent: true,
      depthTest: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    // Add rings to group with layer distribution
    ringGeos.forEach((ringGeo, ri) => {
      let mat = matLayer1;
      if (ri % 3 === 0) mat = matLayer2;
      if (ri % 7 === 0) mat = matLayer3;

      const lineLoop = new THREE.LineLoop(ringGeo, mat);
      lineLoop.scale.setScalar(1.003); // Slightly larger to prevent Z-fighting with surface
      group.add(lineLoop);
    });

    // Add ribs to group
    ribGeos.forEach((ribGeo, bi) => {
      const mat = bi % 2 === 0 ? matLayer2 : matLayer1;
      const line = new THREE.Line(ribGeo, mat);
      line.scale.setScalar(1.003);
      group.add(line);
    });
  });

  return group;
}
