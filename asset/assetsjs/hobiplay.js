// script.js for Coming Soon page
document.addEventListener('DOMContentLoaded', ()=> {
  const notifyBtn = document.getElementById('notifyBtn');

  // contoh interaksi ringan: simpan preferensi notifikasi sederhana di localStorage
  notifyBtn.addEventListener('click', ()=> {
    // toggle flag "notifyMateri"
    const current = localStorage.getItem('notifyMateri') === 'true';
    localStorage.setItem('notifyMateri', String(!current));
    notifyBtn.textContent = !current ? 'Terdaftar — Akan diberitahu' : 'Beritahu saya';
    notifyBtn.classList.toggle('primary', !current);
    // beri umpan balik singkat
    const prev = notifyBtn.textContent;
    notifyBtn.animate([{ transform: 'scale(1)' }, { transform: 'scale(0.98)' }, { transform: 'scale(1)' }], { duration: 220 });
  });

  // inisialisasi tekst tombol sesuai nilai saved
  if (localStorage.getItem('notifyMateri') === 'true') {
    notifyBtn.textContent = 'Terdaftar — Akan diberitahu';
    notifyBtn.classList.add('primary');
  } else {
    notifyBtn.textContent = 'Beritahu saya';
    notifyBtn.classList.remove('primary');
  }
});


