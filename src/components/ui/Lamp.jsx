import useStore from '@/store/store'
import { Frame, Joints, Light, RectLight, Stand1, Stand2 } from '../models'

const Lamp = () => {
	const { stand, isLightOn } = useStore()
	return (
		<group position={[0, -1, 0]} castShadow>
			<Frame />
			<Light />
			<Joints />
			{stand === 'stand1' ? <Stand1 /> : <Stand2 />}
			{isLightOn && <RectLight position={[2.17, 1.149, -1.1]} color={"#0f0"} width={0.06} height={2.2} />}
		</group>
	)
}

export default Lamp