// Subtitles gebruiken
const video = document.getElementById("video");
const subtitle = document.getElementById("subtitle");

const subtitles = [
  { start: 2.5, end: 5.5, text: "Dwight (panicked, loud): Uh-oh, okay, okay, nobody panic!", type: "dialogue loud" },

  { start: 5.5, end: 7.5, text: "Dwight (urgent): Listen up, listen up!", type: "music" },

  { start: 7.5, end: 9.5, text: "Dwight (commanding): Everyone, follow me to the shelter.", type: "sound" },

  { start: 9.5, end: 11.5, text: "Dwight: We've got enough food for 14 days.", type: "dialogue" },

  { start: 11.5, end: 14.5, text: "Dwight (awkward): After that, we have a difficult conversation.", type: "dialogue" },

  { start: 14.5, end: 17.5, text: "Ryan (casual): My bad. Space heater and fan were both on high,", type: "dialogue" },

  { start: 17.5, end: 19.5, text: "Ryan: plugged into the same outlet, so...", type: "dialogue" },

  { start: 19.5, end: 22.5, text: "Jim: Uh, it's saying the server went down.", type: "dialogue" },

  { start: 22.5, end: 24.5, text: "Jim: Does anybody know that password?", type: "dialogue" },

  { start: 24.5, end: 26.5, text: "Jim: Because otherwise we can't do any work.", type: "dialogue" },

  { start: 26.5, end: 28.5, text: "Dwight: Uh-oh, try password.", type: "dialogue" },

  { start: 28.5, end: 30.5, text: "Kevin: Nope.", type: "dialogue" },

  { start: 30.5, end: 34.5, text: "Dwight (thinking): Try zero, zero, zero. Zero, zero, zero.", type: "dialogue" },

  { start: 34.5, end: 35.5, text: "Kevin: No.", type: "dialogue" },

  { start: 35.5, end: 39.5, text: "Dwight: Okay, now try zero, zero, zero. Zero, zero, one.", type: "dialogue" },

  { start: 39.5, end: 41.5, text: "Kevin (annoyed): Okay, I'm not doing every number.", type: "dialogue" },

  { start: 41.5, end: 44.5, text: "Jim: Wait, um, does anyone remember when it was set up?", type: "dialogue" },

  { start: 44.5, end: 46.5, text: "Pam: Uh, it was like eight years ago.", type: "dialogue" },

  { start: 46.5, end: 48.5, text: "Jim: Lord of the Rings stuff?", type: "dialogue" },

  { start: 48.5, end: 49.5, text: "Pam: I don't know.", type: "dialogue" },

  { start: 49.5, end: 51.5, text: "Jim: I'm just trying to think of things that were happening at the time.", type: "dialogue" },

  { start: 51.5, end: 53.5, text: "Jim: Um, everyone was getting their driver's license.", type: "dialogue" },

  { start: 53.5, end: 56.5, text: "Pam: Why don't we just call the IT guy who set it up?", type: "dialogue" },

  { start: 56.5, end: 58.5, text: "Jim: What's the name of the guy in the glasses again?", type: "dialogue" },

  { start: 58.5, end: 61.5, text: "Dwight: Okay, moving backwards, our IT guys have been...", type: "dialogue" },

  { start: 61.5, end: 65.5, text: "Dwight (listing): Glasses, turban, ear hair, fatty three, shorts, fatty two,", type: "dialogue" },

  { start: 65.5, end: 67.5, text: "Dwight: lozenge, and fatso.", type: "dialogue" },

  { start: 67.5, end: 70.5, text: "Jim: I think lozenge is the one who installed it.", type: "dialogue" },

  { start: 70.5, end: 72.5, text: "Kevin: I got it. Try, um...", type: "dialogue" },

  { start: 72.5, end: 74.5, text: "[coughing]", type: "sound" },

  { start: 74.5, end: 77.5, text: "Kevin: You know what? It made me laugh when I heard it,", type: "dialogue" },

  { start: 77.5, end: 79.5, text: "Kevin: but Pam got really offended.", type: "dialogue" },

  { start: 79.5, end: 81.5, text: "Kevin: Big boobs.", type: "dialogue" },

  { start: 81.5, end: 84.5, text: "Dwight (confused): Trauma coin? Nosey?", type: "dialogue" },

  { start: 84.5, end: 86.5, text: "Jim: You're typing big boobs?", type: "dialogue" },

  { start: 86.5, end: 89.5, text: "Kevin: I'm trying everything.", type: "dialogue" },

  { start: 89.5, end: 91.5, text: "Dwight: Try big boobs with a Z.", type: "dialogue" },

  { start: 91.5, end: 93.5, text: "Jim (surprised): That's the password. We're in.", type: "dialogue" },

  { start: 93.5, end: 94.5, text: "All: All right!", type: "dialogue loud" },

  { start: 94.5, end: 95.5, text: "All: Wow. Yes.", type: "dialogue" },

  { start: 95.5, end: 98.5, text: "Dwight: The important thing is, this kept us secure, people.", type: "dialogue" }
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