// Petunjuk tiap menu
const guides = [
  {
    title: "Game",
    desc: "Mulai permainan Tebak Gambar. Lihat gambar yang ditampilkan dan pilih jawaban yang benar dari pilihan yang tersedia."
  },
  {
    title: "Materi",
    desc: "Pelajari kosakata. Berisi daftar nama hewan, buah-buahan, hobi, dan organ tubuh dalam bahasa Indonesia dan Jepang (beserta romaji)."
  },
  {
    title: "Score",
    desc: "Lihat skor tertinggi yang pernah kamu capai selama bermain. Papan skor akan menampilkan nama pemain dan poin."
  },
  {
    title: "Petunjuk",
    desc: "Halaman ini berisi panduan cara bermain dan penjelasan tiap menu."
  },
  {
    title: "Cara Bermain",
    desc: "1) Tekan menu Game.\n2) Amati gambar yang muncul.\n3) Pilih jawaban yang benar sebelum waktu habis untuk mendapatkan poin.\n4) Kumpulkan skor setinggi mungkin!"
  }
];

const guideList = document.getElementById("guideList");
guides.forEach(g => {
  const li = document.createElement("li");
  li.innerHTML = `<strong>${g.title}</strong><br>${g.desc.replace(/\n/g,"<br>")}`;
  guideList.appendChild(li);
});

