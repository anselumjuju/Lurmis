import { create } from 'zustand';

const useStore = create(set => ({
  isFullScreen: false,
  setIsFullScreen: isFullScreen => set(() => ({ isFullScreen })),
  material: 'beech',
  setMaterial: material => set(() => ({ material })),
  color: 'white',
  setColor: color => set(() => ({ color })),
  colorTemp: 50,
  setColorTemp: colorTemp => set(() => ({ colorTemp })),
  lampColor: 'white',
  setLampColor: lampColor => set(() => ({ lampColor })),
  lampIntensity: 500,
  setLampIntensity: lampIntensity => set(() => ({ lampIntensity })),
  isLightOn: true,
  setIsLightOn: isLightOn => set(() => ({ isLightOn })),
  stand: 'stand1',
  setStand: stand => set(() => ({ stand })),
  language: 'eu',
  setLanguage: language => set(() => ({ language })),
}));

export default useStore;
