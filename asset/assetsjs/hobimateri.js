// hobi.js
const hobiData = [
  "Berkebun (ガーデニング)",
  "Berenang (水泳 - Suiei)",
  "Bermain Musik (音楽をする - Ongaku o suru)",
  "Bermain Sepak Bola (サッカー - Sakkā)",
  "Bermain Basket (バスケットボール - Basukettobōru)",
  "Bermain Catur (チェス - Chesu)",
  "Bermain Game (ゲーム - Gēmu)",
  "Berjalan Santai (散歩 - Sanpo)",
  "Bersepeda (サイクリング - Saikuringu)",
  "Fotografi (写真 - Shashin)",
  "Jogging (ジョギング - Jogingu)",
  "Kaligrafi (書道 - Shodō)",
  "Koleksi Perangko (切手収集 - Kitte Shūshū)",
  "Koleksi Koin (コイン収集 - Koin Shūshū)",
  "Mendaki Gunung (登山 - Tozan)",
  "Memasak (料理 - Ryōri)",
  "Membaca (読書 - Dokusho)",
  "Menulis (書く - Kaku)",
  "Menjahit (裁縫 - Saihō)",
  "Menonton Film (映画鑑賞 - Eiga Kanshō)",
  "Menonton Anime (アニメ鑑賞 - Anime Kanshō)",
  "Menggambar (絵を描く - E o kaku)",
  "Melukis (ペインティング - Peintingu)",
  "Memancing (釣り - Tsuri)",
  "Mendengarkan Musik (音楽鑑賞 - Ongaku Kanshō)",
  "Menari (ダンス - Dansu)",
  "Origami (折り紙 - Origami)",
  "Panahan (アーチェリー - Ācherī)",
  "Parkour (パルクール - Parukūru)",
  "Yoga (ヨガ - Yoga)"
];

// Urutkan A–Z (berdasarkan teks Indonesia)
const sortedHobi = hobiData.sort((a,b)=>a.localeCompare(b));

const listEl = document.getElementById('hobiList');
sortedHobi.forEach(item=>{
  const li = document.createElement('li');
  li.className = 'hobi-item';
  li.textContent = item;
  listEl.appendChild(li);
});


