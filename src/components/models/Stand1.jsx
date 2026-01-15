import useStore from '@/store/store';
import {useGLTF} from '@react-three/drei';

const Stand1 = (props) => {
  const {nodes, materials} = useGLTF('/models/stand1.glb');

  const {material: selectedMaterial} = useStore();
  const material = selectedMaterial == 'beech' ? materials.bleach : selectedMaterial == 'oak' ? materials.oak : materials.walnut;

  return (
    <group {...props} dispose={null}>
      <mesh name='Cube013' geometry={nodes.Cube013.geometry} material={material} castShadow />
      <mesh name='Cube013_1' geometry={nodes.Cube013_1.geometry} material={material} castShadow />
      <mesh name='Cube013_2' geometry={nodes.Cube013_2.geometry} material={material} castShadow />
    </group>
  );
};

useGLTF.preload('/models/stand1.glb');

export default Stand1;
