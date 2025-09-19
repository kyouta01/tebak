// =======================
//   Daftar Kanji JLPT N4
//   (inti umum ±170) dgn
//   On-yomi & Kun-yomi
// =======================
const kanjiN4 = [
  // --- Kanji umum sehari-hari ---
  {k:"会", m:"bertemu/pertemuan", on:"カイ", kun:"あ・う"},
  {k:"話", m:"bicara/cerita",       on:"ワ",  kun:"はな・す, はなし"},
  {k:"体", m:"tubuh",              on:"タイ, テイ", kun:"からだ"},
  {k:"何", m:"apa",               on:"カ",        kun:"なに, なん"},
  {k:"住", m:"tinggal",           on:"ジュウ",    kun:"す・む"},
  {k:"作", m:"membuat",           on:"サク, サ",  kun:"つく・る"},
  {k:"使", m:"menggunakan",       on:"シ",        kun:"つか・う"},
  {k:"働", m:"bekerja",           on:"ドウ",      kun:"はたら・く"},
  {k:"仕", m:"tugas/pekerjaan",   on:"シ",        kun:"つか・える"},
  {k:"事", m:"hal/urusan",        on:"ジ, ズ",    kun:"こと"},
  {k:"始", m:"memulai",           on:"シ",        kun:"はじ・める, はじ・まる"},
  {k:"終", m:"selesai/akhir",     on:"シュウ",    kun:"お・わる, お・える"},
  {k:"思", m:"berpikir",          on:"シ",        kun:"おも・う"},
  {k:"知", m:"mengetahui",        on:"チ",        kun:"し・る"},
  {k:"考", m:"memikirkan",        on:"コウ",      kun:"かんが・える"},
  {k:"教", m:"mengajar",          on:"キョウ",    kun:"おし・える, おそ・わる"},
  {k:"習", m:"belajar (kebiasaan)",on:"シュウ",   kun:"なら・う"},
  {k:"勉", m:"berusaha",          on:"ベン",      kun:"つと・める(rare)"},
  {k:"強", m:"kuat/belajar",      on:"キョウ, ゴウ", kun:"つよ・い, つよ・める"},
  {k:"持", m:"memegang",          on:"ジ",        kun:"も・つ"},
  {k:"待", m:"menunggu",          on:"タイ",      kun:"ま・つ"},
  {k:"送", m:"mengirim",          on:"ソウ",      kun:"おく・る"},
  {k:"借", m:"meminjam",          on:"シャク",    kun:"か・りる"},
  {k:"貸", m:"meminjamkan",       on:"タイ",      kun:"か・す"},
  {k:"駅", m:"stasiun",           on:"エキ",      kun:"—"},
  {k:"銀", m:"perak",             on:"ギン",      kun:"—"},
  {k:"館", m:"gedung/hall",       on:"カン",      kun:"やかた"},
  {k:"病", m:"penyakit",          on:"ビョウ",    kun:"や・む, やまい"},
  {k:"院", m:"institusi/klinik",  on:"イン",      kun:"—"},
  {k:"薬", m:"obat",              on:"ヤク",      kun:"くすり"},
  {k:"有", m:"ada/memiliki",      on:"ユウ, ウ",  kun:"あ・る"},
  {k:"旅", m:"perjalanan",        on:"リョ",      kun:"たび"},
  {k:"族", m:"keluarga/klan",     on:"ゾク",      kun:"—"},
  {k:"親", m:"orang tua/dekat",   on:"シン",      kun:"おや, した・しい"},
  {k:"兄", m:"kakak laki-laki",   on:"ケイ, キョウ", kun:"あに"},
  {k:"姉", m:"kakak perempuan",   on:"シ",        kun:"あね"},
  {k:"弟", m:"adik laki-laki",    on:"テイ, ダイ", kun:"おとうと"},
  {k:"妹", m:"adik perempuan",    on:"マイ",      kun:"いもうと"},
  {k:"彼", m:"dia (laki)",        on:"ヒ",        kun:"かれ"},
  {k:"彼女",m:"dia (perempuan)",  on:"ジョ",      kun:"かの・じょ"},
  {k:"主", m:"tuan/utama",        on:"シュ, ス",  kun:"ぬし, おも"},
  {k:"市", m:"kota",             on:"シ",        kun:"いち"},
  {k:"区", m:"wilayah/distrik",   on:"ク",        kun:"—"},
  {k:"町", m:"kota kecil",        on:"チョウ",    kun:"まち"},
  {k:"村", m:"desa",             on:"ソン",      kun:"むら"},
  {k:"県", m:"prefektur",         on:"ケン",      kun:"—"},
  {k:"都", m:"ibu kota/metropolis",on:"ト, ツ",   kun:"みやこ"},
  {k:"府", m:"provinsi",          on:"フ",        kun:"—"},
  {k:"京", m:"ibu kota",          on:"キョウ, ケイ", kun:"みやこ"},
  {k:"洋", m:"Barat/laut",        on:"ヨウ",      kun:"—"},
  {k:"和", m:"Jepang/harmoni",    on:"ワ",        kun:"やわ・らぐ, なご・む"},
  {k:"世", m:"dunia",            on:"セイ, セ",  kun:"よ"},
  {k:"界", m:"batas/dunia",       on:"カイ",      kun:"—"},
  {k:"試", m:"mencoba/ujian",     on:"シ",        kun:"こころ・みる, ため・す"},
  {k:"験", m:"pengalaman/tes",    on:"ケン, ゲン", kun:"—"},
  // ---- Waktu & Musim ----
  {k:"週", m:"pekan",            on:"シュウ",    kun:"—"},
  {k:"曜", m:"hari (minggu)",     on:"ヨウ",      kun:"—"},
  {k:"昨", m:"kemarin",          on:"サク",      kun:"—"},
  {k:"朝", m:"pagi",             on:"チョウ",    kun:"あさ"},
  {k:"昼", m:"siang",            on:"チュウ",    kun:"ひる"},
  {k:"晩", m:"malam",            on:"バン",      kun:"—"},
  {k:"春", m:"musim semi",       on:"シュン",    kun:"はる"},
  {k:"夏", m:"musim panas",      on:"カ",        kun:"なつ"},
  {k:"秋", m:"musim gugur",      on:"シュウ",    kun:"あき"},
  {k:"冬", m:"musim dingin",     on:"トウ",      kun:"ふゆ"},
  // ---- Transport ----
  {k:"道", m:"jalan",            on:"ドウ, トウ", kun:"みち"},
  {k:"通", m:"melewati",         on:"ツウ",      kun:"とお・る, かよ・う"},
  {k:"走", m:"berlari",          on:"ソウ",      kun:"はし・る"},
  {k:"歩", m:"berjalan",         on:"ホ, ブ",    kun:"ある・く"},
  {k:"速", m:"cepat",            on:"ソク",      kun:"はや・い"},
  {k:"遅", m:"lambat",           on:"チ",        kun:"おく・れる, おそ・い"},
  {k:"港", m:"pelabuhan",        on:"コウ",      kun:"みなと"},
  {k:"船", m:"kapal",            on:"セン",      kun:"ふね, ふな"},
  {k:"空", m:"langit/kosong",    on:"クウ",      kun:"そら, あ・く"},
  {k:"飛", m:"terbang",          on:"ヒ",        kun:"と・ぶ"},
  // ---- Sifat ----
  {k:"重", m:"berat/penting",    on:"ジュウ, チョウ", kun:"おも・い, かさ・ねる"},
  {k:"軽", m:"ringan",           on:"ケイ",      kun:"かる・い"},
  {k:"低", m:"rendah",           on:"テイ",      kun:"ひく・い"},
  {k:"悪", m:"buruk",            on:"アク, オ",  kun:"わる・い"},
  {k:"正", m:"benar",            on:"セイ, ショウ", kun:"ただ・しい"},
  {k:"不", m:"tidak",            on:"フ, ブ",    kun:"—"},
  {k:"急", m:"mendesak",         on:"キュウ",    kun:"いそ・ぐ"},
  {k:"最", m:"paling",           on:"サイ",      kun:"もっと・も"},
  // ---- Lainnya (contoh) ----
  {k:"音", m:"suara",           on:"オン, イン",  kun:"おと, ね"},
  {k:"楽", m:"musik/menyenangkan",on:"ガク, ラク",kun:"たの・しい"},
  {k:"歌", m:"lagu",            on:"カ",         kun:"うた, うた・う"},
  {k:"写", m:"memotret",        on:"シャ",       kun:"うつ・す, うつ・る"},
  {k:"真", m:"benar/sejati",    on:"シン",       kun:"ま, まこと"},
  {k:"英", m:"Inggris",         on:"エイ",       kun:"—"},
  {k:"漢", m:"Han/kanji",       on:"カン",       kun:"—"},
  {k:"医", m:"medis",           on:"イ",         kun:"—"},
  {k:"歯", m:"gigi",            on:"シ",         kun:"は"},
  {k:"頭", m:"kepala",          on:"トウ, ズ",   kun:"あたま"},
  {k:"顔", m:"wajah",           on:"ガン",       kun:"かお"},
  {k:"心", m:"hati/perasaan",   on:"シン",       kun:"こころ"},
  {k:"感", m:"perasaan",        on:"カン",       kun:"—"},
  {k:"情", m:"emosi",           on:"ジョウ, セイ", kun:"なさ・け"},
  {k:"愛", m:"cinta",           on:"アイ",       kun:"—"},
  {k:"幸", m:"bahagia",         on:"コウ",       kun:"さいわ・い, しあわ・せ"},
  {k:"悲", m:"sedih",           on:"ヒ",         kun:"かな・しい, かな・しむ"}
];

// ===== Render ke grid =====
const grid = document.getElementById('kanjiGrid');
kanjiN4.forEach(item => {
  const div = document.createElement('div');
  div.className = 'kanji-card';
  div.innerHTML = `
    <span class="k">${item.k}</span>
    <small>${item.m}</small>
    <small class="reading"><b>On:</b> ${item.on || "-"} | <b>Kun:</b> ${item.kun || "-"}</small>
  `;
  grid.appendChild(div);
});
