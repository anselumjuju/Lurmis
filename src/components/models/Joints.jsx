import useStore from '@/store/store';
import { useGLTF } from '@react-three/drei';

const Joints = props => {
  const { nodes, materials } = useGLTF('/models/joints.glb');

  const { material: selectedMaterial } = useStore();
  const material =
    selectedMaterial == 'beech'
      ? materials.bleach
      : selectedMaterial == 'oak'
        ? materials.oak
        : materials.walnut;

  return (
    <group {...props} dispose={null}>
      <mesh
        name="Cube010"
        geometry={nodes.Cube010.geometry}
        material={materials.BlackMetal}
        castShadow
      />
      <mesh
        name="Cube010_1"
        geometry={nodes.Cube010_1.geometry}
        material={materials.SilverMetal}
        castShadow
      />
      <mesh
        name="Cube010_2"
        geometry={nodes.Cube010_2.geometry}
        material={material}
        castShadow
      />
      <mesh
        name="Cube010_3"
        geometry={nodes.Cube010_3.geometry}
        material={material}
        castShadow
      />
      <mesh
        name="Cube010_4"
        geometry={nodes.Cube010_4.geometry}
        material={material}
        castShadow
      />
    </group>
  );
};

useGLTF.preload('/models/joints.glb');

export default Joints;
