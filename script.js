const video = document.getElementById("video");
const player = document.getElementById("player");
const subtitle = document.getElementById("subtitle");

const decreaseFontBtn = document.getElementById("decreaseFont");
const increaseFontBtn = document.getElementById("increaseFont");
const fullscreenBtn = document.getElementById("fullscreenBtn");

const experienceRange = document.getElementById("experienceRange");
const experienceLabel = document.getElementById("experienceLabel");
const modeStatus = document.getElementById("modeStatus");
const fontSizeStatus = document.getElementById("fontSizeStatus");

const modeLabels = ["Standaard", "Subtiel", "Verrijkt", "Volledig"];
let experienceLevel = 0;
let fontSize = 24;

const subtitles = [
  {
    start: 0,
    end: 2.5,
    textStandard: "[Intro music plays]",
    textExperience: "[Intro music plays softly in the background]",
    type: "music pulse",
  },
  {
    start: 3,
    end: 4,
    textStandard: "[Power switches off]",
    textExperience: "[Power suddenly switches off]",
    type: "sound shake-soft",
  },
  {
    start: 4,
    end: 6,
    textStandard: "Dwight: Uh-oh, okay, okay, nobody panic!",
    textExperience: "Dwight (panicked, loud): Uh-oh, okay, okay, nobody panic!",
    type: "dialogue loud shake-soft",
  },
  {
    start: 5.5,
    end: 7.5,
    textStandard: "Listen up, listen up!",
    textExperience: "Dwight (urgent): Listen up, listen up!",
    type: "dialogue shake-soft",
  },
  {
    start: 8,
    end: 9,
    textStandard: "[Flashlight clicks on]",
    textExperience: "[A flashlight clicks on in the dark]",
    type: "sound focus-in",
  },
  {
    start: 9,
    end: 11,
    textStandard: "Everyone, follow me to the shelter.",
    textExperience: "Dwight (commanding): Everyone, follow me to the shelter.",
    type: "dialogue shake-soft",
  },
  {
    start: 11,
    end: 13,
    textStandard: "We've got enough food for 14 days.",
    textExperience:
      "Dwight (serious, awkward): We've got enough food for 14 days.",
    type: "dialogue awkward",
  },
  {
    start: 13,
    end: 16,
    textStandard: "After that, we have a difficult conversation.",
    textExperience:
      "Dwight (awkward): After that, we have a difficult conversation.",
    type: "dialogue awkward",
  },
  {
    start: 16,
    end: 19,
    textStandard: "Michael: My bad. Space heater and fan were both on high,",
    textExperience:
      "Michael (casual): My bad. Space heater and fan were both on high,",
    type: "dialogue fade-slide",
  },
  {
    start: 19,
    end: 21,
    textStandard: "plugged into the same outlet, so...",
    textExperience: "Michael: plugged into the same outlet, so...",
    type: "dialogue fade-slide",
  },
  {
    start: 21,
    end: 24,
    textStandard: "Jim: It's saying the server went down?",
    textExperience: "Jim (confused): Uhhh, it's saying the server went down?",
    type: "dialogue focus-in",
  },
  {
    start: 24,
    end: 26,
    textStandard: "Does anybody know that password?",
    textExperience: "Jim: Does anybody know that password?",
    type: "dialogue focus-in",
  },
  {
    start: 26,
    end: 27,
    textStandard: "Because otherwise we can't do any work.",
    textExperience: "Jim: Because otherwise we can't do any work.",
    type: "dialogue fade-slide",
  },
  {
    start: 27,
    end: 29,
    textStandard: "Michael: Try 'password'.",
    textExperience: "Michael (guessing): Uhhh, try 'password'.",
    type: "dialogue awkward",
  },
  {
    start: 29,
    end: 30,
    textStandard: "[Typing sounds]",
    textExperience: "[Quick typing sounds]",
    type: "sound fade-slide",
  },
  {
    start: 30,
    end: 30.6,
    textStandard: "Jim: Nope.",
    textExperience: "Jim: Nope.",
    type: "dialogue fade-slide",
  },
  {
    start: 30.6,
    end: 34,
    textStandard: "Try zero, zero, zero... zero, zero, zero.",
    textExperience:
      "Dwight (thinking aloud): Try zero, zero, zero... zero, zero, zero.",
    type: "dialogue awkward",
  },
  {
    start: 34,
    end: 35,
    textStandard: "[Typing sounds]",
    textExperience: "[More typing sounds]",
    type: "sound fade-slide",
  },
  {
    start: 35,
    end: 35.5,
    textStandard: "Jim: No.",
    textExperience: "Jim: No.",
    type: "dialogue fade-slide",
  },
  {
    start: 35.5,
    end: 39.5,
    textStandard: "Okay, now try zero, zero, zero... zero, zero, one.",
    textExperience:
      "Dwight: Okay, now try zero, zero, zero... zero, zero, one.",
    type: "dialogue awkward",
  },
  {
    start: 39.5,
    end: 41.5,
    textStandard: "Jim: Okay, I'm not doing every number.",
    textExperience: "Jim (annoyed): Okay, I'm not doing every number.",
    type: "dialogue focus-in",
  },
  {
    start: 41.5,
    end: 44,
    textStandard: "Pam: Wait, does anyone remember when it was set up?",
    textExperience: "Pam: Wait, um, does anyone remember when it was set up?",
    type: "dialogue fade-slide",
  },
  {
    start: 44,
    end: 46.5,
    textStandard: "Michael: It was like eight years ago.",
    textExperience: "Michael: Uh, it was like eight years ago.",
    type: "dialogue fade-slide",
  },
  {
    start: 46.5,
    end: 48,
    textStandard: "Pam: Lord of the Rings stuff?",
    textExperience: "Pam (questioning): Lord of the Rings... stuff?",
    type: "dialogue awkward",
  },
  {
    start: 48.5,
    end: 49,
    textStandard: "Pam: I don't know.",
    textExperience: "Pam: I don't know.",
    type: "dialogue fade-slide",
  },
  {
    start: 49,
    end: 51,
    textStandard: "I'm just trying to think of things from that time.",
    textExperience:
      "Pam: I'm just trying to think of things that were happening at the time.",
    type: "dialogue fade-slide",
  },
  {
    start: 51.5,
    end: 53,
    textStandard: "Erin: Everyone was getting their driver's license.",
    textExperience: "Erin: Um, everyone was getting their driver's license.",
    type: "dialogue fade-slide",
  },
  {
    start: 54,
    end: 56.5,
    textStandard: "Jim: Why don't we just call the IT guy?",
    textExperience: "Jim: Why don't we just call the IT guy who set it up?",
    type: "dialogue focus-in",
  },
  {
    start: 56.5,
    end: 58,
    textStandard: "What's the name of the guy in the glasses again?",
    textExperience: "Jim: What's the name of the guy in the glasses again?",
    type: "dialogue fade-slide",
  },
  {
    start: 58,
    end: 61,
    textStandard: "Michael: Okay, moving backwards, our IT guys have been...",
    textExperience: "Michael: Okay, moving backwards, our IT guys have been...",
    type: "dialogue awkward",
  },
  {
    start: 61,
    end: 65.5,
    textStandard: "Glasses, turban, ear hair, fatty three, shorts, fatty two,",
    textExperience:
      "Michael (listing): Glasses, turban, ear hair, fatty three, shorts, fatty two,",
    type: "dialogue awkward",
  },
  {
    start: 65.5,
    end: 67.5,
    textStandard: "lozenge, and fatso.",
    textExperience: "Michael: lozenge, and fatso.",
    type: "dialogue awkward",
  },
  {
    start: 67.5,
    end: 70,
    textStandard: "I think lozenge is the one who installed it.",
    textExperience: "Jim: I think lozenge is the one who installed it.",
    type: "dialogue focus-in",
  },
  {
    start: 70,
    end: 71.5,
    textStandard: "Andy: I got it. Try, um...",
    textExperience: "Andy: I got it. Try, um...",
    type: "dialogue focus-in",
  },
  {
    start: 71.5,
    end: 74.5,
    textStandard: "[Fake coughing]",
    textExperience: "[Fake coughing to hint at a word]",
    type: "sound awkward",
  },
  {
    start: 74.5,
    end: 77,
    textStandard: "Michael: It made me laugh when I heard it,",
    textExperience: "Michael: You know what? It made me laugh when I heard it,",
    type: "dialogue awkward",
  },
  {
    start: 77,
    end: 79,
    textStandard: "but Pam got really offended.",
    textExperience: "Michael: but Pam got really offended.",
    type: "dialogue awkward",
  },
  {
    start: 79,
    end: 81,
    textStandard: "Kevin: Big boobs.",
    textExperience: "Kevin (matter-of-fact): Big boobs.",
    type: "dialogue awkward focus-in",
  },
  {
    start: 81.5,
    end: 82.3,
    textStandard: "Meredith: Drama queen?",
    textExperience: "Meredith (confused): Drama queen?",
    type: "dialogue awkward",
  },
  {
    start: 82.3,
    end: 83,
    textStandard: "Angela: Nosey?",
    textExperience: "Angela (guessing): Nosey?",
    type: "dialogue awkward",
  },
  {
    start: 84,
    end: 85.5,
    textStandard: "Pam: You're typing big boobs?",
    textExperience: "Pam (disbelieving): You're typing big boobs?",
    type: "dialogue focus-in",
  },
  {
    start: 85.5,
    end: 86.5,
    textStandard: "Jim: I'm trying everything.",
    textExperience: "Jim: I'm trying everything.",
    type: "dialogue fade-slide",
  },
  {
    start: 86.5,
    end: 88,
    textStandard: "Dwight: Try big boobs with a Z.",
    textExperience: "Dwight: Try big boobs with a Z.",
    type: "dialogue awkward",
  },
  {
    start: 88,
    end: 91,
    textStandard: "Jim: That's the password. We're in.",
    textExperience: "Jim (surprised): That's... the password. We're in.",
    type: "dialogue focus-in",
  },
  {
    start: 91,
    end: 92,
    textStandard: "All: All right!",
    textExperience: "All (relieved): All right!",
    type: "dialogue pulse",
  },
  {
    start: 92,
    end: 92.7,
    textStandard: "All: Wow. Yes.",
    textExperience: "All (excited): Wow. Yes.",
    type: "dialogue pulse",
  },
  {
    start: 92.7,
    end: 96,
    textStandard:
      "Michael: The important thing is, this kept us secure, people.",
    textExperience:
      "Michael (self-satisfied): The important thing is, this kept us secure, people.",
    type: "dialogue awkward",
  },
  {
    start: 99,
    end: 105,
    textStandard: "[The Office theme playing]",
    textExperience: "[The Office theme plays brightly]",
    type: "music pulse",
  },
];

function updateModeUI() {
  const label = modeLabels[experienceLevel];
  experienceLabel.textContent = label;
  modeStatus.textContent = label;
}

function applyFontSize() {
  subtitle.style.fontSize = fontSize + "px";
  fontSizeStatus.textContent = fontSize + "px";
  localStorage.setItem("subtitleFontSize", String(fontSize));
}

function getSubtitleText(current) {
  if (experienceLevel === 0) {
    return current.textStandard || current.textExperience || current.text;
  }
  return current.textExperience || current.textStandard || current.text;
}

function getModeClass() {
  if (experienceLevel === 0) return "mode-standard";
  if (experienceLevel === 1) return "mode-exp-1";
  if (experienceLevel === 2) return "mode-exp-2";
  return "mode-exp-3";
}

function renderSubtitle() {
  const currentTime = video.currentTime;
  const current = subtitles.find(
    (sub) => currentTime >= sub.start && currentTime < sub.end,
  );

  if (!current) {
    subtitle.textContent = "";
    subtitle.className = "subtitle";
    return;
  }

  subtitle.textContent = getSubtitleText(current);

  const classes = ["subtitle", getModeClass()];
  if (current.type) {
    classes.push(...current.type.split(" "));
  }

  subtitle.className = classes.join(" ");
  subtitle.style.fontSize = fontSize + "px";
}

video.addEventListener("timeupdate", renderSubtitle);
video.addEventListener("seeked", renderSubtitle);
video.addEventListener("play", renderSubtitle);

experienceRange.addEventListener("input", () => {
  experienceLevel = Number(experienceRange.value);
  localStorage.setItem("experienceLevel", String(experienceLevel));
  updateModeUI();
  renderSubtitle();
});

increaseFontBtn.addEventListener("click", () => {
  if (fontSize < 60) {
    fontSize += 2;
    applyFontSize();
  }
});

decreaseFontBtn.addEventListener("click", () => {
  if (fontSize > 14) {
    fontSize -= 2;
    applyFontSize();
  }
});

fullscreenBtn.addEventListener("click", () => {
  if (!document.fullscreenElement) {
    if (player.requestFullscreen) {
      player.requestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
});

document.addEventListener("fullscreenchange", () => {
  fullscreenBtn.textContent = document.fullscreenElement
    ? "Exit fullscreen"
    : "Fullscreen";
});

// Restore saved preferences
const savedFontSize = localStorage.getItem("subtitleFontSize");
const savedExperience = localStorage.getItem("experienceLevel");

if (savedFontSize) {
  fontSize = Number(savedFontSize);
}

if (savedExperience !== null) {
  experienceLevel = Number(savedExperience);
  experienceRange.value = String(experienceLevel);
}

updateModeUI();
applyFontSize();
renderSubtitle();
