import { AccumulativeShadows, Environment, Helper, Html, OrbitControls, Plane, PresentationControls, RandomizedLight } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import Lamp from "./ui/Lamp"
import { Suspense, useMemo, useRef } from "react"
import { Bloom, EffectComposer } from "@react-three/postprocessing"
import { BlendFunction } from "postprocessing"
import * as THREE from "three"
import { degreesToRadians } from "@/lib/utils"

const Experience = () => {
	const ambientLight = useRef();
	const isMobile = useMemo(() => /Mobi|Android/i.test(navigator.userAgent), []);
	return (
		<Canvas gl={{ antialias: false, preserveDrawingBuffer: true }} shadows={!isMobile} dpr={[1, 1.5]} camera={{ position: [9, 1, 8], fov: 35 }}>
			<Suspense fallback={<Html><div className="w-full h-full flex justify-center items-center">Loading...</div></Html>}>
				<ambientLight intensity={isMobile ? 2 : 1} ref={ambientLight} color={'white'} />
				<Helper position={[0, 0, 0]} args={[ambientLight.current, 2]} />
				<Plane args={[2000, 2000]} position={[0, -1.74, 0]} receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
					<meshStandardMaterial color="#A8A8A8" side={THREE.DoubleSide} />
				</Plane>
				<group position={[0, -1, 0]} scale={0.7}>
					<Lamp />
					<AccumulativeShadows position={[0, -1.043, 0]} temporal frames={100} alphaTest={0.2} scale={7} color="#000">
						<RandomizedLight position={[2, 5, 5]} intensity={1} amount={5} radius={4} bias={0.001} />
					</AccumulativeShadows>
				</group>
				<OrbitControls
					makeDefault
					autoRotate
					autoRotateSpeed={- 0.2}
					minPolarAngle={degreesToRadians(10)}
					maxPolarAngle={degreesToRadians(71)}
					dampingFactor={0.05}
					enableZoom={false}
					enablePan={false}
				/>
				<color attach="background" args={['#a8a8a8']} />
				{!isMobile && <Environment preset="city" background={false} resolution={512} environmentIntensity={0.7} />}
				{!isMobile &&
					<EffectComposer>
						<Bloom intensity={0.05} luminanceThreshold={0.2} luminanceSmoothing={0.9} blendFunction={BlendFunction.ADD} />
					</EffectComposer>}
			</Suspense >
		</Canvas>
	)
}

export default Experience
