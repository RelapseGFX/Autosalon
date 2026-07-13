import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, ContactShadows } from '@react-three/drei'
import VehicleModel from './VehicleModel.jsx'

export default function HeroScene({ modelPath, yawOffset }) {
  return (
    <Canvas
      camera={{ position: [3.6, 1.3, 4.4], fov: 32 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 8, 5]} intensity={1.2} />
      <Suspense fallback={null}>
        <VehicleModel modelPath={modelPath} yawOffset={yawOffset} position={[0, -0.05, 0]} />
        <ContactShadows position={[0, -0.05, 0]} opacity={0.38} scale={7} blur={2.2} far={2} />
        <Environment preset="studio" />
      </Suspense>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 2.6}
        maxPolarAngle={Math.PI / 2.05}
      />
    </Canvas>
  )
}
