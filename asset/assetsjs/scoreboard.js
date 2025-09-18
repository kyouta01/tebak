// =====================
//   SCOREBOARD LOGIC
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
    li.className = item.game === 'bunpo' ? 'bunpo-item' : '';
    li.innerHTML = `<strong>${index + 1}. ${item.name}</strong><br>
                    Game: ${item.game || 'tebak'}<br>
                    Skor: ${item.score}<br>
                    ${item.timeLeft ? `Sisa Waktu: ${item.timeLeft}s<br>` : ''}
                    <small>${item.date}</small>`;
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
  // Pastikan path ke index.html sesuai struktur repositori Anda
  window.location.href = 'index.html';
});

// Tampilkan saat halaman selesai dimuat
tampilkanScore();
