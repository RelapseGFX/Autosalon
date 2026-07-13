import { useMemo, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { Box3, Vector3 } from 'three'

useGLTF.setDecoderPath('/draco/')

// Leave a sliver of breathing room around the model's computed worst-case
// footprint rather than filling the frustum edge-to-edge.
const FIT_MARGIN = 0.92

// Constant turntable speed, in radians/second. ~0.15 rad/s is a full
// rotation every ~42s — slow enough to read as ambient, not attention-
// grabbing, closer to a showroom turntable than a spinning product shot.
const ROTATION_SPEED = 0.15

// Starting angle — a pleasant three-quarter view rather than dead-on.
const START_ROTATION_Y = Math.PI * 0.12

// Per-model correction for GLBs authored with a different "forward" axis
// than the rest (e.g. exported facing +Z instead of -Z) — without it that
// one model opens facing backwards relative to the others. Set in
// heroModels (Home.jsx) per vehicle; 0 for anything already correct.
export default function VehicleModel({ modelPath, position, yawOffset = 0 }) {
  const group = useRef(null)
  const { scene } = useGLTF(modelPath)
  const { camera, viewport } = useThree()
  const viewW = viewport.width
  const viewH = viewport.height

  const { scale, offset } = useMemo(() => {
    const box = new Box3().setFromObject(scene)
    const center = box.getCenter(new Vector3())
    const size = box.getSize(new Vector3())

    // The model only spins around its vertical axis, so the one dimension
    // that changes as it rotates is the horizontal footprint. Its worst case
    // is the distance from the axis to the farthest corner (half the
    // diagonal of length x width) — not the full 3D bounding sphere, which
    // over-penalizes low, wide vehicles by folding height into the same
    // budget as the rotating footprint.
    const horizontalRadius = Math.hypot(size.x / 2, size.z / 2)

    // Visible frustum size at the model's depth, recomputed per canvas size
    // so each model — and each breakpoint — claims all the room the current
    // layout actually offers instead of a fixed, hand-picked constant.
    const { width: frustumW, height: frustumH } = viewport.getCurrentViewport(
      camera,
      [0, 0, 0],
    )

    // Horizontally the model is re-centered on its own axis (below), so its
    // footprint straddles the frustum's center line symmetrically — the
    // full half-width is available. Vertically it sits on the ground with
    // its base pinned at the camera's target (not centered on it), so it
    // only ever occupies the frustum's *upper* half — halve that budget, or
    // the model renders roughly 2x too large and the top gets clipped.
    const scaleForWidth = ((frustumW / 2) * FIT_MARGIN) / horizontalRadius
    const scaleForHeight = ((frustumH / 2) * FIT_MARGIN) / size.y
    const s = Math.min(scaleForWidth, scaleForHeight)

    return {
      scale: s,
      offset: [-center.x * s, -box.min.y * s, -center.z * s],
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scene, camera, viewW, viewH])

  // Constant slow turntable rotation — replaces the old scroll-tied sweep.
  // Drag-to-orbit is handled separately by OrbitControls on the camera in
  // HeroScene.
  useFrame((_, delta) => {
    if (!group.current) return
    group.current.rotation.y += delta * ROTATION_SPEED
  })

  return (
    <group ref={group} position={position} rotation={[0, START_ROTATION_Y + yawOffset, 0]}>
      <primitive object={scene} scale={scale} position={offset} />
    </group>
  )
}
