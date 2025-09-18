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
