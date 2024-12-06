import { TorusKnot } from "@react-three/drei"

const Experience = () => {
	return (
		<TorusKnot args={[0.6, 0.25, 102, 32]}>
			<meshNormalMaterial color="red" />
		</TorusKnot>
	)
}

export default Experience