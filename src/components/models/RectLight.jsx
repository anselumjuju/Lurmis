import * as THREE from 'three';
import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';
import useStore from '@/store/store';

const RectLight = ({ position, color, width, height }) => {
  const { scene } = useThree();

  const { lampColor, lampIntensity } = useStore();

  useEffect(() => {
    const rectLight = new THREE.RectAreaLight(
      lampColor,
      lampIntensity,
      width,
      height
    );
    rectLight.position.set(position[0], position[1], position[2]);
    rectLight.rotation.x = -Math.PI / 2;
    rectLight.rotation.z = 0.17;
    scene.add(rectLight);
    return () => scene.remove(rectLight);
  }, [scene, position, color, width, height, lampColor, lampIntensity]);

  return null;
};

export default RectLight;
