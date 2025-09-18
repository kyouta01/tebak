// Semua tombol kategori
document.querySelectorAll('.menu-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    // arahkan ke halaman game sesuai data-target
    const target = btn.dataset.target;
    window.location.href = target;
  });
});


