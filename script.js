// script.js
const quotes = {
  happy: [
    "Happiness is contagious. Share it!",
    "Today is your day to shine! 🌟",
    "Spread joy like confetti! 🎊",
  ],
  sad: [
    "Every storm runs out of rain. Keep going!",
    "You are stronger than you think. 💪",
    "Better days are just around the corner. 🌈",
  ],
};

document.getElementById("submitFeeling").addEventListener("click", () => {
  const feeling = document.getElementById("feeling").value;
  const responseDiv = document.getElementById("response");
  const quoteDiv = document.getElementById("quote");
  const effectsDiv = document.getElementById("effects");
  const musicDiv = document.getElementById("music");

  // Display response
  responseDiv.textContent =
    feeling === "happy"
      ? "That's awesome! Let's celebrate! 🎉"
      : "Cheer up! You're doing great! 😊";

  // Display a random quote
  const quoteList = quotes[feeling];
  const randomQuote = quoteList[Math.floor(Math.random() * quoteList.length)];
  quoteDiv.textContent = randomQuote;

  // Display effects (Fireworks, Balloons)
  effectsDiv.innerHTML = `
        <div class="firework" style="left: 20%; top: 20%; animation-delay: 0s;"></div>
        <div class="firework" style="left: 40%; top: 30%; animation-delay: 0.3s;"></div>
        <div class="firework" style="left: 60%; top: 25%; animation-delay: 0.6s;"></div>
        <div class="balloon" style="left: 10%; animation-delay: 1s;"></div>
        <div class="balloon" style="left: 30%; animation-delay: 1.2s;"></div>
        <div class="balloon" style="left: 70%; animation-delay: 1.4s;"></div>
    `;

  // Display the corresponding music (YouTube videos)
  if (feeling === "happy") {
    musicDiv.innerHTML = `
            <iframe src="https://www.youtube.com/embed/MijOFxR-X1g" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `;
  } else {
    musicDiv.innerHTML = `
            <iframe src="https://www.youtube.com/embed/nyH44DaI10w" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `;
  }

  // Show music area
  musicDiv.style.display = "block";
});

document.getElementById("playMusic").addEventListener("click", () => {
  const music = document.getElementById("backgroundMusic");
  music.play();
});
