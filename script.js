// PASSWORD SYSTEM
function unlock() {
  const passwords = ["ritu","anu","ana","sagnika","shrily","angella","shoharji","jabeda"];

  const entered = document.getElementById("password").value
    .trim()
    .toLowerCase();

  if (passwords.includes(entered)) {
    localStorage.setItem("friendName", entered);
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("proposal").classList.remove("hidden");
  } else {
    alert("Wrong password 💔 Try again!");
  }
}


// NO BUTTON RUNS AWAY
function moveNo() {
  const btn = document.getElementById("noBtn");
  btn.style.position = "absolute";
  btn.style.top = Math.random() * 80 + "vh";
  btn.style.left = Math.random() * 80 + "vw";
}


// NAVIGATION
function goToReasons() {
  window.location.href = "reasons.html";
}

function goToFinal() {
  window.location.href = "final.html";
}


// FINAL CELEBRATION
function celebrate() {

  const name = localStorage.getItem("friendName");

  const music = document.getElementById("bgMusic");
  if (music) {
    music.play().catch(err => console.log(err));
  }

  // CONFETTI BLAST
  var duration = 3 * 1000;
  var end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 7,
      angle: 60,
      spread: 100,
      origin: { x: 0 }
    });
    confetti({
      particleCount: 7,
      angle: 120,
      spread: 100,
      origin: { x: 1 }
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();

  document.getElementById("finalMessage").innerHTML = `
    <h2>YAYY!! 🥳💖 Date Confirmed!</h2>

    <p><strong>Where:</strong> at your favourite place 💞</p>

    <p><strong>When:</strong> whenever you want jaaneman🫦</p>

    <p>I like me better when I am with you💋</p>

    <br>

    <p style="opacity:0.8;">(Don't overthink it... just know I mean it.)</p>

    <br>

    <p>With love,<br>
    <strong>Srijannita 💌</strong></p>
  `;
    }

