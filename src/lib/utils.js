import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

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
