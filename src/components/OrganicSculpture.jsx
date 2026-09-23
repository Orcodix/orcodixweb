import * as THREE from 'three';

/* ============================================================
   SHARED GLSL DEFORMATION CODE
   Guarantees 100% synchronized movement between 3D solid surface
   and contour line geometries with subtle, refined wave displacement.
============================================================ */
export const DEFORM_GLSL = /* glsl */`
// Multi-octave 3D simplex-like noise helper
vec3 hash3(vec3 p) {
  p = vec3(dot(p, vec3(127.1, 311.7, 74.7)),
           dot(p, vec3(269.5, 183.3, 246.1)),
           dot(p, vec3(113.5, 271.9, 124.6)));
  return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
}

float snoise(vec3 p) {
  vec3 i = floor(p);
  vec3 f = fract(p);
  vec3 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(dot(hash3(i + vec3(0,0,0)), f - vec3(0,0,0)),
                     dot(hash3(i + vec3(1,0,0)), f - vec3(1,0,0)), u.x),
                 mix(dot(hash3(i + vec3(0,1,0)), f - vec3(0,1,0)),
                     dot(hash3(i + vec3(1,1,0)), f - vec3(1,1,0)), u.x), u.y),
             mix(mix(dot(hash3(i + vec3(0,0,1)), f - vec3(0,0,1)),
                     dot(hash3(i + vec3(1,0,1)), f - vec3(1,0,1)), u.x),
                 mix(dot(hash3(i + vec3(0,1,1)), f - vec3(0,1,1)),
                     dot(hash3(i + vec3(1,1,1)), f - vec3(1,1,1)), u.x), u.y), u.z);
}

// Localized mouse deformation function (Refined, Subtle Wave)
vec3 deformPosition(vec3 pos, vec2 uMouse, float uInteractionStrength, float uMouseVel, float uTime) {
  vec2 uv = pos.xy;
  float distToMouse = length(uv - uMouse);

  // Tighter interaction radius (~0.65 units)
  float interactionRadius = 0.65;

  // Soft smoothstep falloff: 1 at center, 0 at edge
  float mouseMask = 1.0 - smoothstep(interactionRadius * 0.2, interactionRadius, distToMouse);
  mouseMask = mouseMask * uInteractionStrength;

  // Subtle wave ripple
  float wave = sin(distToMouse * 12.0 - uTime * 3.5) * exp(-distToMouse * 3.0);

  // Small velocity boost multiplier
  float velBoost = 1.0 + uMouseVel * 1.5;

  // Direction away from mouse in XY plane
  vec2 dir = distToMouse > 0.001 ? (uv - uMouse) / distToMouse : vec2(0.0, 1.0);

  // Controlled, subtle displacement (max ~0.08 units push)
  vec3 push = vec3(dir * wave * 0.08 * mouseMask * velBoost, wave * 0.06 * mouseMask * velBoost);

  return pos + push;
}
`;

export const SURFACE_VERT = /* glsl */`
${DEFORM_GLSL}

uniform vec2  uMouse;
uniform float uInteractionStrength;
uniform float uMouseVel;
uniform float uTime;

varying vec3  vWorldPos;
varying vec3  vNormal;
varying float vDeform;

void main() {
  vec3 deformed = deformPosition(position, uMouse, uInteractionStrength, uMouseVel, uTime);

  // Transform normal cleanly to view space for specular & rim lighting
  vNormal   = normalize(normalMatrix * normal);
  vWorldPos = deformed;
  vDeform   = length(deformed - position);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(deformed, 1.0);
}
`;

export const SURFACE_FRAG = /* glsl */`
precision highp float;

uniform vec2  uMouse;
uniform float uInteractionStrength;
uniform float uTime;

varying vec3  vWorldPos;
varying vec3  vNormal;
varying float vDeform;

const vec3 ORANGE    = vec3(0.996, 0.412, 0.012); // #FE6903
const vec3 DARK_BASE = vec3(0.05, 0.05, 0.06);   // #0D0D0D dark graphite
const vec3 RIM_COL   = vec3(1.0, 0.48, 0.02);

void main() {
  vec3 N = normalize(vNormal);
  vec3 V = normalize(vec3(0.0, 0.0, 1.0)); // View direction

  // Studio lighting setup
  // Key Light (Orange rim light from top right)
  vec3 L1 = normalize(vec3(1.4, 1.6, 1.2));
  float diff1 = max(dot(N, L1), 0.0);

  // Fill Light (Dark cool fill)
  vec3 L2 = normalize(vec3(-1.2, -0.6, 0.6));
  float diff2 = max(dot(N, L2), 0.0) * 0.1;

  // Specular Highlight
  vec3 R1 = reflect(-L1, N);
  float spec1 = pow(max(dot(R1, V), 0.0), 28.0);

  // Edge Rim Lighting
  float rim = 1.0 - abs(dot(N, V));
  rim = pow(rim, 1.8);

  // Base dark charcoal color
  vec3 color = DARK_BASE;
  color += DARK_BASE * diff2;
  color += ORANGE * diff1 * 0.22;  // Soft orange light side
  color += ORANGE * spec1 * 0.55;  // Orange specular highlight
  color += RIM_COL * rim * 0.70;   // Orange rim light on edges

  // Tighter, subtle Mouse Proximity Glow
  vec2 uv = vWorldPos.xy;
  float dMouse = length(uv - uMouse);
  float glowMask = (1.0 - smoothstep(0.0, 0.75, dMouse)) * uInteractionStrength;
  color += ORANGE * glowMask * 0.22;

  // Local deformation glow boost
  color += ORANGE * vDeform * 0.65;

  gl_FragColor = vec4(color, 0.95);
}
`;

/* ============================================================
   PROCEDURAL SCULPTURE GEOMETRY BUILDER
   Creates a tall twisted digital sculpture from multiple
   interlocking parametric tube geometries.
============================================================ */

export function createSculptureGeometries(isMobile = false) {
  const tubularSegs = isMobile ? 90 : 160;
  const radialSegs  = isMobile ? 20 : 32;

  // --- 1. MAIN FORM CURVE (Tall twisted central trunk) ---
  const mainPoints = [];
  const numPts = 120;
  for (let i = 0; i <= numPts; i++) {
    const t = i / numPts;
    const y = (t - 0.5) * 4.6; // Vertical span
    const angle = t * Math.PI * 2.8; // 504 degree twist
    const r = (Math.sin(t * Math.PI) * 0.72 + 0.28) * 0.85; // Organic waist curve
    const x = Math.cos(angle) * r + Math.sin(t * Math.PI * 2.0) * 0.18;
    const z = Math.sin(angle) * r * 0.95;
    mainPoints.push(new THREE.Vector3(x, y, z));
  }
  const mainCurve = new THREE.CatmullRomCurve3(mainPoints);
  const mainGeo   = new THREE.TubeGeometry(mainCurve, tubularSegs, 0.33, radialSegs, false);

  // --- 2. SECONDARY FORM 1 (Outer sweeping arch wrapping front-to-back) ---
  const sec1Points = [];
  for (let i = 0; i <= numPts; i++) {
    const t = i / numPts;
    const y = (t - 0.5) * 4.9;
    const angle = -t * Math.PI * 3.2 + 1.2; // Counter twist
    const r = (Math.sin(t * Math.PI) * 0.82 + 0.32) * 1.02;
    const x = Math.cos(angle) * r * 1.1 + 0.12;
    const z = Math.sin(angle) * r * 0.88;
    sec1Points.push(new THREE.Vector3(x, y, z));
  }
  const sec1Curve = new THREE.CatmullRomCurve3(sec1Points);
  const sec1Geo   = new THREE.TubeGeometry(sec1Curve, Math.floor(tubularSegs * 0.85), 0.21, radialSegs, false);

  // --- 3. SECONDARY FORM 2 (Inner weaving ribbon) ---
  const sec2Points = [];
  for (let i = 0; i <= numPts; i++) {
    const t = i / numPts;
    const y = (t - 0.5) * 4.0;
    const angle = t * Math.PI * 3.6 - 0.9;
    const r = (Math.sin(t * Math.PI) * 0.65 + 0.22) * 0.78;
    const x = Math.sin(angle) * r - 0.15;
    const z = Math.cos(angle) * r * 1.15;
    sec2Points.push(new THREE.Vector3(x, y, z));
  }
  const sec2Curve = new THREE.CatmullRomCurve3(sec2Points);
  const sec2Geo   = new THREE.TubeGeometry(sec2Curve, Math.floor(tubularSegs * 0.75), 0.15, Math.floor(radialSegs * 0.8), false);

  // --- 4. SECONDARY FORM 3 (Tight accent ribbon) ---
  const sec3Points = [];
  for (let i = 0; i <= numPts; i++) {
    const t = i / numPts;
    const y = (t - 0.5) * 4.4;
    const angle = -t * Math.PI * 2.4 + 2.4;
    const r = (Math.sin(t * Math.PI) * 0.75 + 0.25) * 0.92;
    const x = Math.cos(angle) * r * 0.85;
    const z = Math.sin(angle) * r * 1.05 + 0.18;
    sec3Points.push(new THREE.Vector3(x, y, z));
  }
  const sec3Curve = new THREE.CatmullRomCurve3(sec3Points);
  const sec3Geo   = new THREE.TubeGeometry(sec3Curve, Math.floor(tubularSegs * 0.75), 0.12, Math.floor(radialSegs * 0.75), false);

  return [
    { geometry: mainGeo, scale: 1.0 },
    { geometry: sec1Geo, scale: 1.0 },
    { geometry: sec2Geo, scale: 1.0 },
    { geometry: sec3Geo, scale: 1.0 },
  ];
}
