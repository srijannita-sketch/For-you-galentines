// PASSWORD
function unlock() {
  const correctPassword = "jaaneman";
  const entered = document.getElementById("password").value;

  if (entered === correctPassword) {
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
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 }
  });

  document.getElementById("response").innerHTML = `
    <h3>YAYYY 🥳💖 Date Confirmed!</h3>
    <p><strong>Where :</strong> At your favourite place 💕</p>
    <p><strong>When :</strong> Whenever you want jaaneman🫦</p>
    <p>I like me better when I am with you💋</p>
    <p style="font-style: italic; opacity: 0.8;">
      (Don’t overthink it… just know I mean it.)
    </p>
    <br>
    <p>With love,<br><strong>Srijannita 💌</strong></p>
  `;
             }
