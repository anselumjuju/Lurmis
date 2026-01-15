import {clsx} from 'clsx';
import {twMerge} from 'tailwind-merge';
import translations from '../lib/translations.json';
import useStore from '@/store/store';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function sliderValueToRGB(value) {
  let kelvin = value <= 50 ? 2000 + (value / 50) * (4500 - 2000) : 4500 + ((value - 50) / 50) * (10000 - 4500);

  let temp = kelvin / 100;
  let r, g, b;

  // Red calculation
  if (temp <= 66) {
    r = 255;
  } else {
    r = temp - 60;
    r = 329.698727446 * Math.pow(r, -0.1332047592);
    r = Math.min(Math.max(r, 0), 255);
  }

  // Green calculation
  if (temp <= 66) {
    g = temp;
    g = 99.4708025861 * Math.log(g) - 161.1195681661;
    g = Math.min(Math.max(g, 0), 255);
  } else {
    g = temp - 60;
    g = 288.1221695283 * Math.pow(g, -0.0755148492);
    g = Math.min(Math.max(g, 0), 255);
  }

  // Blue calculation
  if (temp >= 66) {
    b = 255;
  } else if (temp <= 19) {
    b = 0;
  } else {
    b = temp - 10;
    b = 138.5177312231 * Math.log(b) - 305.0447927307;
    b = Math.min(Math.max(b, 0), 255);
  }

  return `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
}

export function degreesToRadians(degrees) {
  return degrees * (Math.PI / 180);
}

export const takeScreenshot = () => {
  const link = document.createElement('a');
  link.setAttribute('download', 'lurmis.png');
  link.setAttribute('href', document.querySelector('canvas').toDataURL('image/png').replace('image/png', 'image/octet-stream'));
  link.click();
};

export const openShare = async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: 'Lurmis - Lamp Configurator',
        url: 'https://lurmis.vercel.app/',
      });
    } catch (err) {
      console.log(err);
    }
  }
};

export const openEmail = () => {
  const email = 'tactizity@gmail.com';
  const subject = 'Lurmis - Lamp Configurator';
  const body = 'Hello, I would like to know more about Lurmis.';
  window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

export const getTranslation = (keyPath) => {
  const {language} = useStore();
  if (language !== 'eu' && language !== 'en' && language !== 'es') return '';
  return keyPath.split('.').reduce((obj, key) => obj[key], translations[language]);
};
