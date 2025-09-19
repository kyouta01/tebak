// =====================
//     SCOREBOARD
// =====================
const scoreList = document.getElementById('scoreList');
const emptyMsg  = document.getElementById('emptyMsg');
const resetBtn  = document.getElementById('resetBtn');

function tampilkanScore() {
  const board = JSON.parse(localStorage.getItem('scoreBoard')) || [];
  scoreList.innerHTML = '';

  if (board.length === 0) {
    emptyMsg.classList.remove('hidden');
    return;
  } else {
    emptyMsg.classList.add('hidden');
  }

  board.forEach((item, index) => {
    const li = document.createElement('li');
    // Tambahkan kelas khusus per game
    if (item.game === 'bunpo') li.classList.add('bunpo-item');
    if (item.game === 'kanji-flip') li.classList.add('kanji-item');

    li.innerHTML = `
      <strong>${index + 1}. ${item.name}</strong><br>
      Game: ${item.game || 'lainnya'}<br>
      Skor: ${item.score}<br>
      ${item.timeLeft ? `Sisa Waktu: ${item.timeLeft}s<br>` : ''}
      <small>${item.date}</small>
    `;
    scoreList.appendChild(li);
  });
}

// Hapus semua skor
resetBtn.addEventListener('click', () => {
  if (confirm('Hapus semua skor?')) {
    localStorage.removeItem('scoreBoard');
    tampilkanScore();
  }
});

// Tombol kembali ke Halaman Utama
document.getElementById('homeBtn').addEventListener('click', () => {
  window.location.href = 'index.html'; // sesuaikan path
});

tampilkanScore();
