import { Environment, Html, OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import Lamp from "./ui/Lamp"
import { Suspense } from "react"

const Experience = () => {
	return (
		<Canvas
			gl={{ antialias: false, preserveDrawingBuffer: true, alpha: true }}
			dpr={[1, 1.5]}
		>
			<Suspense fallback={<Html><div>Loading...</div></Html>}>
				<Lamp />
				<Environment preset="sunset" />
				<OrbitControls
					autoRotate
					autoRotateSpeed={-0.5}
				/>
			</Suspense >
		</Canvas>
	)
}

export default Experience


// enableZoom={false}
// enablePan={false}
// enableRotate={false}