import useStore from '@/store/store';
import {useGLTF} from '@react-three/drei';

const Frame = (props) => {
  const {nodes, materials} = useGLTF('/models/frame.glb');

  const {material: selectedMaterial} = useStore();
  const material = selectedMaterial === 'beech' ? materials.bleach : selectedMaterial === 'oak' ? materials.oak : materials.walnut;

  return (
    <group {...props} dispose={null}>
      <mesh name='Cube' geometry={nodes.Cube.geometry} material={material} castShadow />
      <mesh name='Cube_1' geometry={nodes.Cube_1.geometry} material={material} castShadow />
      <mesh name='Cube_2' geometry={nodes.Cube_2.geometry} material={material} castShadow />
    </group>
  );
};

useGLTF.preload('/models/frame.glb');

export default Frame;
