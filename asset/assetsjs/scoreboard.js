const scoreList = document.getElementById('scoreList');
const emptyMsg = document.getElementById('emptyMsg');
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
    li.innerHTML = `<strong>${index + 1}. ${item.name}</strong><br>
                    Skor: ${item.score}<br>
                    Sisa Waktu: ${item.timeLeft ? item.timeLeft + 's' : '0s'}<br>
                    <small>${item.date}</small>`;
    scoreList.appendChild(li);
  });
}

resetBtn.addEventListener('click', () => {
  if (confirm('Hapus semua skor?')) {
    localStorage.removeItem('scoreBoard');
    tampilkanScore();
  }
});

// tampilkan scoreboard saat load
tampilkanScore();

// Tombol Home kembali ke halaman utama
document.getElementById('homeBtn').addEventListener('click', () => {
window.location.href = '/'; // ganti dengan nama file halaman utama Anda
});
