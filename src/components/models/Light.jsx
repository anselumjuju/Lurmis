import { useGLTF } from '@react-three/drei';

const Lights = props => {
  const { nodes } = useGLTF('/models/light.glb');
  return (
    <group {...props} dispose={null}>
      <mesh
        name="light"
        geometry={nodes.light.geometry}
        material={nodes.light.material}
      />
    </group>
  );
};

useGLTF.preload('/models/light.glb');

export default Lights;
