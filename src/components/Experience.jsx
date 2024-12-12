import { AccumulativeShadows, Environment, Html, OrbitControls, Plane, PresentationControls, RandomizedLight } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import Lamp from "./ui/Lamp"
import { Suspense, useMemo } from "react"
import { Bloom, EffectComposer } from "@react-three/postprocessing"
import { BlendFunction } from "postprocessing"
import * as THREE from "three"

const Experience = () => {
	const isMobile = useMemo(() => /Mobi|Android/i.test(navigator.userAgent), []);
	return (
		<Canvas gl={{ antialias: false, preserveDrawingBuffer: true }} shadows={!isMobile} dpr={[1, 1.5]} camera={{ position: [4, 8, 6], fov: 35 }}>
			<Suspense fallback={<Html><div className="w-full h-full flex justify-center items-center">Loading...</div></Html>}>
				<group position={[0, -1, 0]} scale={0.8}>
					<Lamp />
					<Plane args={[20, 20]} position={[0, -1, 0]} receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
						<meshStandardMaterial color="#a8a8a8" side={THREE.DoubleSide} />
					</Plane>
					<AccumulativeShadows position={[0, -1.043, 0]} temporal frames={100} alphaTest={0.2} scale={7} color="#000">
						<RandomizedLight position={[2, 5, 5]} intensity={1} amount={5} radius={4} bias={0.001} />
					</AccumulativeShadows>
				</group>
				<OrbitControls
					makeDefault
					minPolarAngle={Math.PI / 2.5}
					maxPolarAngle={Math.PI / 2}
					autoRotate={!isMobile}
					autoRotateSpeed={isMobile ? -0.1 : -0.2}
					dampingFactor={0.05}
					enableZoom={false}
					enablePan={false}
				/>
				<color attach="background" args={['#a8a8a8']} />
				{/* <Environment preset="studio" background={false} backgroundBlurriness={isMobile ? 0.6 : 0.9} resolution={isMobile ? 64 : 512} lowQuality={isMobile} environmentIntensity={0.7} /> */}
				{!isMobile &&
					<EffectComposer>
						<Bloom intensity={0.05} luminanceThreshold={0.2} luminanceSmoothing={0.9} blendFunction={BlendFunction.ADD} />
					</EffectComposer>}
			</Suspense >
		</Canvas>
	)
}

export default Experience
