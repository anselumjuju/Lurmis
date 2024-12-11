import useStore from '@/store/store';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const Frame = (props) => {
  const { nodes, materials } = useGLTF('/models/frame.glb');

  const { material: selectedMaterial } = useStore();
  const material = selectedMaterial === 'bleach' ? materials.bleach : selectedMaterial === 'oak' ? materials.oak : materials.walnut;

  return (
    <group {...props} dispose={null}>
      <mesh name="Cube" geometry={nodes.Cube.geometry} material={material} />
      <mesh name="Cube_1" geometry={nodes.Cube_1.geometry} material={material} />
      <mesh name="Cube_2" geometry={nodes.Cube_2.geometry} material={material} />
    </group>
  );
};

useGLTF.preload('/models/frame.glb');

export default Frame;
