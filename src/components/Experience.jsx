import { AccumulativeShadows, Environment, Html, OrbitControls, RandomizedLight } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import Lamp from "./ui/Lamp"
import { Suspense } from "react"
import { Bloom, EffectComposer } from "@react-three/postprocessing"
import { BlendFunction } from "postprocessing"

const Experience = () => {
	return (
		<Canvas
			gl={{ antialias: false, preserveDrawingBuffer: true, alpha: true }}
			dpr={[1, 1.5]}
			shadows
		>
			<Suspense fallback={<Html><div>Loading...</div></Html>}>
				<Lamp />
				<AccumulativeShadows
					position={[0, -1.043, 0]}
					temporal
					frames={100}
					alphaTest={0.9}
					scale={7}
					color="#000"
				>
					<RandomizedLight
						position={[2, 5, 5]}
						intensity={1}
						amount={5}
						radius={4}
						bias={0.001}
					/>
				</AccumulativeShadows>
				<OrbitControls />
				<Environment
					preset="dawn"
					background
					backgroundBlurriness={0.9}
					resolution={512}
				/>
				<EffectComposer>
					<Bloom
						intensity={0.05}
						luminanceThreshold={0.2}
						luminanceSmoothing={0.9}
						blendFunction={BlendFunction.ADD}
					/>
				</EffectComposer>
			</Suspense >
		</Canvas>
	)
}

export default Experience


// autoRotate
// autoRotateSpeed={-0.5}
// enableZoom={false}
// enablePan={false}
// enableRotate={false}