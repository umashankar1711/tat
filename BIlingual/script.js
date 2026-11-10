const intro = document.getElementById("intro");
const site = document.getElementById("site");
const skip = document.getElementById("skipIntro");
function enterSite(){
  intro.classList.add("hide");
  site.classList.add("ready");
  document.body.style.overflow = "";
}
document.body.style.overflow = "hidden";
const introTimer = setTimeout(enterSite, 2600);
skip.addEventListener("click", () => { clearTimeout(introTimer); enterSite(); });

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => {
  const opened = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(opened));
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

// Countdown is exclusively for the official website launch: 11 December 2026, IST.
const launchAt = new Date("2026-12-11T00:00:00+05:30").getTime();
const pad = n => String(n).padStart(2, "0");
function updateCountdown(){
  let remaining = Math.max(0, launchAt - Date.now());
  const days = Math.floor(remaining / 86400000); remaining %= 86400000;
  const hours = Math.floor(remaining / 3600000); remaining %= 3600000;
  const minutes = Math.floor(remaining / 60000); remaining %= 60000;
  const seconds = Math.floor(remaining / 1000);
  document.getElementById("days").textContent = pad(days);
  document.getElementById("hours").textContent = pad(hours);
  document.getElementById("minutes").textContent = pad(minutes);
  document.getElementById("seconds").textContent = pad(seconds);
  if (Date.now() >= launchAt){
    document.getElementById("countdownStatus").textContent = "இன்று தான்! இணையதளம் அறிமுகமாகிறது.";
    document.querySelector(".countdown-foot span:last-child").textContent = "THE WEBSITE IS LIVE ↗";
  }
}
updateCountdown();
setInterval(updateCountdown, 1000);
