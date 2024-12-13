import { create } from "zustand";

const useStore = create(set => ({
	page: 'home',
	setPage: (page) => set(() => ({ page })),
	isFullScreen: false,
	setIsFullScreen: (isFullScreen) => set(() => ({ isFullScreen })),
	material: 'bleach',
	setMaterial: (material) => set(() => ({ material })),
	color: 'white',
	setColor: (color) => set(() => ({ color })),
	colorTemp: 50,
	setColorTemp: (colorTemp) => set(() => ({ colorTemp })),
	lampColor: 'white',
	setLampColor: (lampColor) => set(() => ({ lampColor })),
	lampIntensity: 500,
	setLampIntensity: (lampIntensity) => set(() => ({ lampIntensity })),
	isLightOn: true,
	setIsLightOn: (isLightOn) => set(() => ({ isLightOn })),
	stand: 'stand1',
	setStand: (stand) => set(() => ({ stand })),
	isEnglish: true,
	setIsEnglish: (isEnglish) => set(() => ({ isEnglish }))
}))

export default useStore