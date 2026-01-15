// -----------------------------
// Helpers
// -----------------------------
function normalize(text) {
  return text.toLowerCase().replace(/[^\w]/g, '');
}

function similarity(a, b) {
  const longer = a.length > b.length ? a : b;
  const shorter = a.length > b.length ? b : a;

  if (longer.length === 0) return 1.0;

  const costs = new Array(shorter.length + 1);
  for (let i = 0; i <= shorter.length; i++) {
    costs[i] = i;
  }

  for (let i = 1; i <= longer.length; i++) {
    let prevCost = i;
    for (let j = 1; j <= shorter.length; j++) {
      let currentCost = costs[j - 1];
      if (longer[i - 1] !== shorter[j - 1]) {
        currentCost = Math.min(Math.min(currentCost, prevCost), costs[j]) + 1;
      }
      costs[j - 1] = prevCost;
      prevCost = currentCost;
    }
    costs[shorter.length] = prevCost;
  }

  const distance = costs[shorter.length];
  return 1 - distance / longer.length;
}

// -----------------------------
// Command definitions
// -----------------------------
const COMMANDS = [
  {
    command: 'POWER_ON',
    phrases: {
      en: ['turn on the light', 'switch on the light', 'turn the light on', 'light on'],
      es: ['encender la luz', 'prender la luz', 'enciende la luz'],
      eu: ['eusebio piztu argia', 'eusebio pistoardia', 'piztu argia', 'argia piztu'],
    },
  },
  {
    command: 'POWER_OFF',
    phrases: {
      en: ['turn off the light', 'switch off the light', 'turn the light off', 'light off'],
      es: ['apagar la luz', 'apaga la luz'],
      eu: ['eusebio itzali argia', 'eusebio italii arvija', 'itzali argia', 'argia itzali'],
    },
  },
  {
    command: 'BRIGHTNESS_UP',
    phrases: {
      en: ['make the light brighter', 'increase brightness', 'more light'],
      es: ['más brillo', 'aumentar brillo', 'más luz'],
      eu: ['eusebio argi gehiago', 'eusebio ardile yago', 'argi gehiago'],
    },
  },
  {
    command: 'BRIGHTNESS_DOWN',
    phrases: {
      en: ['make the light darker', 'decrease brightness', 'less light'],
      es: ['menos brillo', 'reducir brillo', 'menos luz'],
      eu: ['eusebio argi gutxiago', 'argi gutxiago', 'eusebio arribuciavo'],
    },
  },
  {
    command: 'MODEL_CHANGE',
    phrases: {
      en: ['change the lamp model', 'switch the lamp model', 'change model'],
      es: ['cambiar el modelo de la lámpara', 'cambiar modelo'],
      eu: ['eusebio aldatu lanpara', 'eusebio aldatulam paramota', 'lanpara aldatu'],
    },
  },
  {
    command: 'COLOR_BLUE',
    phrases: {
      en: ['switch on blue light', 'blue light', 'turn on blue light'],
      es: ['luz azul', 'enciende la luz azul'],
      eu: ['eusebio piztu argi urdina', 'argi urdina piztu'],
    },
  },
  {
    command: 'COLOR_GREEN',
    phrases: {
      en: ['switch on green light', 'green light', 'turn on green light'],
      es: ['luz verde', 'enciende la luz verde'],
      eu: ['eusebio piztu argi berdea', 'argi berdea piztu'],
    },
  },
  {
    command: 'COLOR_RED',
    phrases: {
      en: ['switch on red light', 'red light', 'turn on red light'],
      es: ['luz roja', 'enciende la luz roja'],
      eu: ['eusebio piztu argi gorria', 'argi gorria piztu'],
    },
  },
  {
    command: 'CHANGE_MATERIAL_TO_BEECH',
    phrases: {
      en: ['change the material to beech', 'switch the material to beech', 'change material to beech'],
      es: ['cambiar el material a beech', 'cambiar material a beech'],
      eu: ['eusebio erakutsi aritzez eginiko oinarria'],
    },
  },
  {
    command: 'CHANGE_MATERIAL_TO_OAK',
    phrases: {
      en: ['change the material to oak', 'switch the material to oak', 'change material to oak'],
      es: ['cambiar el material a oak', 'cambiar material a oak'],
      eu: ['Eusebio erakutsi pagoz eginiko oinarrria'],
    },
  },
  {
    command: 'CHANGE_MATERIAL_TO_WALNUT',
    phrases: {
      en: ['change the material to walnut', 'switch the material to walnut', 'change material to walnut'],
      es: ['cambiar el material a walnut', 'cambiar material a walnut'],
      eu: ['Eusebio erakutsi intxaurrondoz eginiko oinarria'],
    },
  },
];

// -----------------------------
// Main matcher
// -----------------------------
export function detectCommand(transcript, lang = 'eu', threshold = 0.8) {
  const input = normalize(transcript);

  let bestCommand = null;
  let bestScore = 0;

  for (const cmd of COMMANDS) {
    const phrases = cmd.phrases[lang];
    if (!phrases) continue;

    for (const phrase of phrases) {
      const score = similarity(input, normalize(phrase));

      if (score > bestScore) {
        bestScore = score;
        bestCommand = cmd.command;
      }
    }
  }

  return bestScore >= threshold ? bestCommand : 'UNKNOWN';
}
