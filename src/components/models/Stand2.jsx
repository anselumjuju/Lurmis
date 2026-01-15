import useStore from '@/store/store';
import {useGLTF} from '@react-three/drei';

const Stand2 = (props) => {
  const {nodes, materials} = useGLTF('/models/stand2.glb');

  const {material: selectedMaterial} = useStore();
  const material = selectedMaterial == 'beech' ? materials.bleach : selectedMaterial == 'oak' ? materials.oak : materials.walnut;

  return (
    <group {...props} dispose={null}>
      <mesh name='Cube014' geometry={nodes.Cube014.geometry} material={material} castShadow />
      <mesh name='Cube014_1' geometry={nodes.Cube014_1.geometry} material={material} castShadow />
      <mesh name='Cube014_2' geometry={nodes.Cube014_2.geometry} material={material} castShadow />
    </group>
  );
};

useGLTF.preload('/models/stand2.glb');

export default Stand2;
