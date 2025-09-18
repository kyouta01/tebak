// Navigasi tombol menu
document.getElementById('gameBtn').addEventListener('click', () => {
  window.location.href = 'play/index.html';
});
document.getElementById('materiBtn').addEventListener('click', () => {
  window.location.href = 'materi.html';
});
document.getElementById('gambarBtn').addEventListener('click', () => {
  window.location.href = 'gambar.html';
});
document.getElementById('petunjukBtn').addEventListener('click', () => {
  window.location.href = 'petunjuk.html';
});

// Ganti tema sesuai tombol yang diklik
document.querySelectorAll('.theme-btn').forEach(button => {
  button.addEventListener('click', () => {
    document.body.classList.remove('theme-pink', 'theme-green'); // reset

    const theme = button.dataset.theme;
    if (theme === 'pink') {
      document.body.classList.add('theme-pink');
    } else if (theme === 'green') {
      document.body.classList.add('theme-green');
    }
    // 'default' = blue pastel, tidak menambah class
  });
});

// === Scoreboard ===
const scoreList = document.getElementById('scoreList');
const emptyMsg  = document.getElementById('emptyMsg');
const resetBtn  = document.getElementById('resetBtn');

function loadScores() {
  const scores = JSON.parse(localStorage.getItem('scores')) || [];

  if (scores.length === 0) {
    emptyMsg.classList.remove('hidden');
    return;
  }

  scores.forEach(item => {
    const li = document.createElement('li');

    // Jika game = bunpo, beri label khusus
    if (item.game === 'bunpo') {
      li.innerHTML = `<strong>[BUNPO]</strong> ${item.value} pts <small>${item.date}</small>`;
    } else {
      li.textContent = `${item.game}: ${item.value} pts (${item.date})`;
    }

    scoreList.appendChild(li);
  });
}

resetBtn.addEventListener('click', () => {
  localStorage.removeItem('scores');
  scoreList.innerHTML = '';
  emptyMsg.classList.remove('hidden');
});

loadScores();

