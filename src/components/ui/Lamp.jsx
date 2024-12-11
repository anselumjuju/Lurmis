import useStore from '@/store/store'
import { Frame, Joints, Light, Stand1, Stand2 } from '../models'

const Lamp = () => {
	const { stand } = useStore()
	return (
		<group position={[0, -1, 0]}>
			<Frame />
			<Light />
			<Joints />
			{stand === 'stand1' ? <Stand1 /> : <Stand2 />}
		</group>
	)
}

export default Lamp