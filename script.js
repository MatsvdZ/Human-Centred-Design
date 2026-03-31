// Subtitles gebruiken
const video = document.getElementById("video");
const subtitle = document.getElementById("subtitle");

const subtitles = [
  { start: 0, end: 2.5, text: "[Intro music plays]", type: "music" },

  { start: 3, end: 4, text: "[Power switches off]", type: "sound" },

  { start: 4, end: 6, text: "Dwight (panicked, loud): Uh-oh, okay, okay, nobody panic!", type: "dialogue" },

  { start: 5.5, end: 7.5, text: "(urgent): Listen up, listen up!", type: "dialogue" },

  { start: 8, end: 9, text: "[Flashlight flicks on]", type: "sound" },

  { start: 9, end: 11, text: "Dwight: (commanding): Everyone, follow me to the shelter.", type: "dialogue" },

  { start: 11, end: 13, text: "We've got enough food for 14 days.", type: "dialogue" },

  { start: 13, end: 16, text: "Dwight (awkward): After that, we have a difficult conversation.", type: "dialogue" },

  { start: 16, end: 19, text: "Michael (casual): My bad. Space heater and fan were both on high,", type: "dialogue" },

  { start: 19, end: 21, text: "plugged into the same outlet, so...", type: "dialogue" },

  { start: 21, end: 24, text: "Jim: Uhhh, it's saying the server went down?", type: "dialogue" },

  { start: 24, end: 26, text: "Does anybody know that password?", type: "dialogue" },

  { start: 26, end: 27, text: "Because otherwise we can't do any work.", type: "dialogue" },

  { start: 27, end: 29, text: "Michael: Uhhh, try 'password'.", type: "dialogue" },

  { start: 29, end: 30, text: "[Types password]", type: "sound" },

  { start: 30, end: 30.6, text: "Jim: Nope.", type: "dialogue" },

  { start: 30.6, end: 34, text: "Dwight (thinking): Try zero, zero, zero... zero, zero, zero.", type: "dialogue" },

  { start: 34, end: 35, text: "Types password", type: "sound" },

  { start: 35, end: 35.5, text: "Jim: No.", type: "dialogue" },

  { start: 35.5, end: 39.5, text: "Dwight: Okay, now try zero, zero, zero... zero, zero, one.", type: "dialogue" },

  { start: 39.5, end: 41.5, text: "Jim (annoyed): Okay, I'm not doing every number.", type: "dialogue" },

  { start: 41.5, end: 44, text: "Pam: Wait, um, does anyone remember when it was set up?", type: "dialogue" },

  { start: 44, end: 46.5, text: "Michael: Uh, it was like eight years ago.", type: "dialogue" },

  { start: 46.5, end: 48, text: "Pam (questioning): Lord of the Rings... stuff?", type: "dialogue" },

  { start: 48.5, end: 49, text: "Pam: I don't know.", type: "dialogue" },

  { start: 49, end: 51, text: "Pam: I'm just trying to think of things that were happening at the time.", type: "dialogue" },

  { start: 51.5, end: 53, text: "Erin: Um, everyone was getting their driver's license.", type: "dialogue" },

  { start: 54, end: 56.5, text: "Jim: Why don't we just call the IT guy who set it up?", type: "dialogue" },

  { start: 56.5, end: 58, text: "What's the name of the guy in the glasses again?", type: "dialogue" },

  { start: 58, end: 61, text: "Michael: Okay, moving backwards, our IT guys have been...", type: "dialogue" },

  { start: 61, end: 65.5, text: "Glasses, turban, ear hair, fatty three, shorts, fatty two,", type: "dialogue" },

  { start: 65.5, end: 67.5, text: "lozenge, and fatso.", type: "dialogue" },

  { start: 67.5, end: 70, text: "I think lozenge is the one who installed it.", type: "dialogue" },

  { start: 70, end: 71.5, text: "Andy: I got it. Try, um...", type: "dialogue" },

  { start: 71.5, end: 74.5, text: "[Fake coughing]", type: "sound" },

  { start: 74.5, end: 77, text: "Michael: You know what? It made me laugh when I heard it,", type: "dialogue" },

  { start: 77, end: 79, text: "but Pam got really offended.", type: "dialogue" },

  { start: 79, end: 81, text: "Kevin: Big boobs.", type: "dialogue" },

  { start: 81.5, end: 82.3, text: "Meredith (confused): Drama queen?", type: "dialogue" },

  { start: 82.3, end: 83, text: "Angela: Nosey?", type: "dialogue" },

  { start: 84, end: 85.5, text: "Pam: You're typing big boobs?", type: "dialogue" },

  { start: 85.5, end: 86.5, text: "Jim: I'm trying everything.", type: "dialogue" },

  { start: 86.5, end: 88, text: "Dwight: Try big boobs with a Z.", type: "dialogue" },

  { start: 88, end: 91, text: "Jim (surprised): That's... the password. We're in.", type: "dialogue" },

  { start: 91, end: 92, text: "All: All right!", type: "dialogue" },

  { start: 92, end: 92.7, text: "All: Wow. Yes.", type: "dialogue" },

  { start: 92.7, end: 96, text: "Michael: The important thing is, this kept us secure, people.", type: "dialogue" },

  { start: 99, end: 105, text: "[The Office theme playing]", type: "music" }
];

video.addEventListener("timeupdate", () => {
  const t = video.currentTime;

  const current = subtitles.find(s => t >= s.start && t < s.end);

  if (current) {
    subtitle.textContent = current.text;
    subtitle.className = "subtitle " + current.type;
  } else {
    subtitle.textContent = "";
    subtitle.className = "subtitle";
  }
});


// Full-screen function
function goFullscreen() {
  const player = document.getElementById("player");

  if (player.requestFullscreen) {
    player.requestFullscreen();
  }
};


/**********************/
/* Font Size Controls */
/**********************/

let fontSize = 24; // begin grootte (px)

const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");

increaseBtn.addEventListener("click", () => {
  fontSize += 2;
  subtitle.style.fontSize = fontSize + "px";
});

decreaseBtn.addEventListener("click", () => {
  fontSize -= 2;
  subtitle.style.fontSize = fontSize + "px";
});

