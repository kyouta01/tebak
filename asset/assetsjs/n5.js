// ====== Daftar Kanji N5 (disaring, tanpa 16 kanji N4) ======
const kanjiN5 = [
  {k:"日", m:"matahari/hari"}, {k:"月", m:"bulan"}, {k:"山", m:"gunung"}, {k:"川", m:"sungai"},
  {k:"田", m:"sawah"}, {k:"人", m:"orang"}, {k:"口", m:"mulut"}, {k:"目", m:"mata"},
  {k:"耳", m:"telinga"}, {k:"手", m:"tangan"}, {k:"足", m:"kaki"}, {k:"心", m:"hati/perasaan"},
  {k:"力", m:"kekuatan"}, {k:"火", m:"api"}, {k:"水", m:"air"}, {k:"木", m:"pohon/kayu"},
  {k:"花", m:"bunga"}, {k:"草", m:"rumput"}, {k:"森", m:"hutan lebat"}, {k:"林", m:"hutan kecil"},
  {k:"空", m:"langit/kosong"}, {k:"雨", m:"hujan"}, {k:"天", m:"langit/cuaca"}, {k:"電", m:"listrik"},
  {k:"車", m:"mobil/kereta"}, {k:"駅", m:"stasiun"}, {k:"学", m:"belajar"}, {k:"校", m:"sekolah"},
  {k:"先", m:"sebelum/guru"}, {k:"生", m:"hidup/siswa"}, {k:"友", m:"teman"}, {k:"名", m:"nama"},
  {k:"女", m:"perempuan"}, {k:"男", m:"laki-laki"}, {k:"父", m:"ayah"}, {k:"母", m:"ibu"},
  {k:"子", m:"anak"}, {k:"犬", m:"anjing"}, {k:"猫", m:"kucing"}, {k:"魚", m:"ikan"},
  {k:"鳥", m:"burung"}, {k:"大", m:"besar"}, {k:"小", m:"kecil"}, {k:"高", m:"tinggi/mahal"},
  {k:"安", m:"murah/aman"}, {k:"新", m:"baru"}, {k:"古", m:"lama/tua"}, {k:"白", m:"putih"},
  {k:"黒", m:"hitam"}, {k:"赤", m:"merah"}, {k:"青", m:"biru"}, {k:"黄", m:"kuning"},
  {k:"色", m:"warna"}, {k:"上", m:"atas"}, {k:"下", m:"bawah"}, {k:"左", m:"kiri"},
  {k:"右", m:"kanan"}, {k:"中", m:"tengah"}, {k:"外", m:"luar"}, {k:"北", m:"utara"},
  {k:"南", m:"selatan"}, {k:"東", m:"timur"}, {k:"西", m:"barat"},
  {k:"一", m:"satu"}, {k:"二", m:"dua"}, {k:"三", m:"tiga"}, {k:"四", m:"empat"},
  {k:"五", m:"lima"}, {k:"六", m:"enam"}, {k:"七", m:"tujuh"}, {k:"八", m:"delapan"},
  {k:"九", m:"sembilan"}, {k:"十", m:"sepuluh"}, {k:"百", m:"seratus"}, {k:"千", m:"seribu"},
  {k:"万", m:"sepuluh ribu"}, {k:"円", m:"yen"},
  {k:"年", m:"tahun"}, {k:"時", m:"waktu/jam"}, {k:"分", m:"menit/bagian"}, {k:"間", m:"antara"},
  {k:"何", m:"apa"},
  {k:"毎", m:"setiap"}, {k:"週", m:"minggu/pekan"}, {k:"月", m:"bulan (waktu)"}, {k:"曜", m:"hari (mingguan)"},
  {k:"朝", m:"pagi"}, {k:"昼", m:"siang"}, {k:"夜", m:"malam"},
  {k:"行", m:"pergi"}, {k:"来", m:"datang"}, {k:"見", m:"melihat"}, {k:"聞", m:"mendengar"},
  {k:"言", m:"mengatakan"}, {k:"読", m:"membaca"}, {k:"書", m:"menulis"},
  {k:"食", m:"makan"}, {k:"飲", m:"minum"}, {k:"買", m:"membeli"}, {k:"売", m:"menjual"},
  {k:"立", m:"berdiri"}, {k:"休", m:"istirahat"}, {k:"入", m:"masuk"}, {k:"出", m:"keluar"},
  {k:"開", m:"membuka"}, {k:"閉", m:"menutup"}
];

// ====== Render ke Grid ======
const grid = document.getElementById('kanjiGrid');
kanjiN5.forEach(item => {
  const div = document.createElement('div');
  div.className = 'kanji-card';
  div.innerHTML = `<span class="k">${item.k}</span><small>${item.m}</small>`;
  grid.appendChild(div);
});
