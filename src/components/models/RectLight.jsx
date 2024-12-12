import { RectAreaLightUniformsLib } from "three/examples/jsm/lights/RectAreaLightUniformsLib.js";
import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper.js";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import useStore from "@/store/store";

const RectLight = ({ position, color, width, height, showHelper = true }) => {
	const { scene } = useThree();

	const { lampColor, lampIntensity } = useStore();

	useEffect(() => {
		RectAreaLightUniformsLib.init();
		const rectLight = new THREE.RectAreaLight(lampColor, lampIntensity, width, height);
		rectLight.position.set(position[0], position[1], position[2]);
		rectLight.rotation.x = -Math.PI / 2;
		rectLight.rotation.z = 0.17;
		scene.add(rectLight);

		let helper;
		if (showHelper) {
			helper = new RectAreaLightHelper(rectLight);
			scene.add(helper);
		}

		return () => {
			scene.remove(rectLight);
			if (helper) scene.remove(helper);
		};
	}, [scene, position, color, width, height, showHelper]);

	return null;
};

export default RectLight;
