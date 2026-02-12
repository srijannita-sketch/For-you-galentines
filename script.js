// PASSWORD
function unlock() {
  const passwords = ["Ritu", "Anu", "Ana", "Sagnika", "Shrily", "Angella", "Shoharji", "Jabeda"];
  const entered = document.getElementById("password").value.toLowerCase();

  if (passwords.includes(entered)) {
    localStorage.setItem("friendName", entered);
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("mainContent").classList.remove("hidden");
    document.getElementById("bgMusic").play();
  } else {
    alert("Wrong password 💔 Try again!");
  }
}

// Navigation
function goNext() {
  window.location.href = "reasons.html";
}

function goFinal() {
  window.location.href = "final.html";
}

// Floating Hearts
function createHearts() {
  const container = document.querySelector(".hearts-container");
  if (!container) return;

  for (let i = 0; i < 25; i++) {
    const heart = document.createElement("span");
    heart.innerHTML = "💗";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 5 + 5) + "s";
    container.appendChild(heart);
  }
}
createHearts();

// Shrinking NO
function shrinkNo(btn) {
  let size = btn.offsetWidth;
  if (size > 40) {
    btn.style.width = size - 20 + "px";
    btn.style.height = size - 10 + "px";
  } else {
    btn.style.display = "none";
  }
}

// Celebrate
function celebrate() {
  const name = localStorage.getItem("friendName");

  // BIG CONFETTI BLAST
  var duration = 3 * 1000;
  var end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 8,
      angle: 60,
      spread: 100,
      origin: { x: 0 }
    });
    confetti({
      particleCount: 8,
      angle: 120,
      spread: 100,
      origin: { x: 1 }
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();

  document.getElementById("response").innerHTML = `
    <h3>YAYYY 🥳💖 Date Confirmed!</h3>
    <p><strong>Where :</strong> At your favourite place, ${name} 💕</p>
    <p><strong>When :</strong> Whenever you want jaaneman🫦</p>
    <p>I like me better when I am with you💋</p>
    <p style="font-style: italic; opacity: 0.8;">
      (Don’t overthink it… just know I mean it.)
    </p>
    <br>
    <p>With love,<br><strong>Srijannita 💌</strong></p>
  `;
}
