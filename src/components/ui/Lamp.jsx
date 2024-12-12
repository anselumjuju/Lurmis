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
			{isLightOn && <RectLight position={[1.9, 0.88, -0.95]} color={"#0f0"} width={0.055} height={2} />}
		</group>
	)
}

export default Lamp