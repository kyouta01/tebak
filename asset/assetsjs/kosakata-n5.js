// ===== Kosakata gabungan Kanji N5 (±100) =====
// format: {k:"Kanji", f:"Furigana", m:"Arti Indonesia"}
const vocabCombo = [
  // ---- dari daftar lama (50-an pertama) ----
  {k:"火山", f:"かざん", m:"gunung berapi"}, {k:"火曜日", f:"かようび", m:"hari Selasa"},
  {k:"水曜日", f:"すいようび", m:"hari Rabu"}, {k:"花火", f:"はなび", m:"kembang api"},
  {k:"電車", f:"でんしゃ", m:"kereta listrik"}, {k:"電話", f:"でんわ", m:"telepon"},
  {k:"学校", f:"がっこう", m:"sekolah"}, {k:"大学", f:"だいがく", m:"universitas"},
  {k:"中学校", f:"ちゅうがっこう", m:"SMP"}, {k:"小学校", f:"しょうがっこう", m:"SD"},
  {k:"友達", f:"ともだち", m:"teman"}, {k:"男女", f:"だんじょ", m:"laki-laki & perempuan"},
  {k:"人口", f:"じんこう", m:"populasi"}, {k:"目薬", f:"めぐすり", m:"obat tetes mata"},
  {k:"手紙", f:"てがみ", m:"surat"}, {k:"力仕事", f:"ちからしごと", m:"pekerjaan fisik"},
  {k:"木曜日", f:"もくようび", m:"hari Kamis"}, {k:"金曜日", f:"きんようび", m:"hari Jumat"},
  {k:"日曜日", f:"にちようび", m:"hari Minggu"}, {k:"毎日", f:"まいにち", m:"setiap hari"},
  {k:"毎週", f:"まいしゅう", m:"setiap minggu"}, {k:"朝食", f:"ちょうしょく", m:"sarapan"},
  {k:"昼食", f:"ちゅうしょく", m:"makan siang"}, {k:"夕食", f:"ゆうしょく", m:"makan malam"},
  {k:"時間", f:"じかん", m:"waktu/jam"}, {k:"何時", f:"なんじ", m:"jam berapa"},
  {k:"見物", f:"けんぶつ", m:"tamasya"}, {k:"読書", f:"どくしょ", m:"membaca buku"},
  {k:"飲食", f:"いんしょく", m:"makan dan minum"}, {k:"売店", f:"ばいてん", m:"kios"},
  {k:"駅前", f:"えきまえ", m:"depan stasiun"}, {k:"出口", f:"でぐち", m:"pintu keluar"},
  {k:"入口", f:"いりぐち", m:"pintu masuk"}, {k:"休暇", f:"きゅうか", m:"liburan/cuti"},
  {k:"大雨", f:"おおあめ", m:"hujan lebat"}, {k:"小川", f:"おがわ", m:"sungai kecil"},
  {k:"山口", f:"やまぐち", m:"mulut gunung / nama tempat"},
  {k:"白鳥", f:"はくちょう", m:"angsa putih"}, {k:"黒猫", f:"くろねこ", m:"kucing hitam"},
  {k:"赤道", f:"せきどう", m:"garis khatulistiwa"}, {k:"青空", f:"あおぞら", m:"langit biru"},
  {k:"金山", f:"かなやま", m:"gunung emas"}, {k:"子犬", f:"こいぬ", m:"anak anjing"},
  {k:"子猫", f:"こねこ", m:"anak kucing"}, {k:"高校", f:"こうこう", m:"SMA"},
  {k:"海外", f:"かいがい", m:"luar negeri"}, {k:"国内", f:"こくない", m:"dalam negeri"},

  // ---- Tambahan baru (+50) ----
  {k:"電気", f:"でんき", m:"listrik"}, {k:"電灯", f:"でんとう", m:"lampu listrik"},
  {k:"電力", f:"でんりょく", m:"tenaga listrik"}, {k:"火力", f:"かりょく", m:"daya panas"},
  {k:"水力", f:"すいりょく", m:"tenaga air"}, {k:"風力", f:"ふうりょく", m:"tenaga angin"},
  {k:"水道", f:"すいどう", m:"saluran air"}, {k:"水中", f:"すいちゅう", m:"dalam air"},
  {k:"水色", f:"みずいろ", m:"warna biru muda"}, {k:"雨水", f:"あまみず", m:"air hujan"},
  {k:"雪山", f:"ゆきやま", m:"gunung salju"}, {k:"山道", f:"やまみち", m:"jalan gunung"},
  {k:"山林", f:"さんりん", m:"pegunungan/hutan"}, {k:"森林", f:"しんりん", m:"hutan lebat"},
  {k:"川口", f:"かわぐち", m:"muara sungai"}, {k:"川辺", f:"かわべ", m:"tepi sungai"},
  {k:"田園", f:"でんえん", m:"daerah pedesaan"}, {k:"田舎", f:"いなか", m:"desa"},
  {k:"田中", f:"たなか", m:"nama keluarga Tanaka"}, {k:"大木", f:"たいぼく", m:"pohon besar"},
  {k:"小道", f:"こみち", m:"jalan kecil"}, {k:"小雨", f:"こさめ", m:"gerimis"},
  {k:"大空", f:"おおぞら", m:"langit luas"}, {k:"大火", f:"たいか", m:"kebakaran besar"},
  {k:"大人", f:"おとな", m:"orang dewasa"}, {k:"大家", f:"おおや", m:"pemilik rumah"},
  {k:"人口口", f:"じんこうぐち", m:"pintu populasi (statistik)"},
  {k:"出口口", f:"でぐちぐち", m:"pintu keluar (dialek)"},
  {k:"友情", f:"ゆうじょう", m:"persahabatan"}, {k:"友人", f:"ゆうじん", m:"teman (formal)"},
  {k:"男女平等", f:"だんじょびょうどう", m:"kesetaraan gender"},
  {k:"男女別", f:"だんじょべつ", m:"pemisahan pria & wanita"},
  {k:"朝日", f:"あさひ", m:"matahari pagi"}, {k:"夕日", f:"ゆうひ", m:"matahari sore"},
  {k:"夕方", f:"ゆうがた", m:"sore hari"}, {k:"夜空", f:"よぞら", m:"langit malam"},
  {k:"星空", f:"ほしぞら", m:"langit berbintang"}, {k:"星月夜", f:"ほしづきよ", m:"malam berbintang"},
  {k:"時雨", f:"しぐれ", m:"gerimis musiman"}, {k:"時間割", f:"じかんわり", m:"jadwal pelajaran"},
  {k:"時計", f:"とけい", m:"jam (alat)"},
  {k:"食堂", f:"しょくどう", m:"kantin"}, {k:"食事", f:"しょくじ", m:"makan (kegiatan)"},
  {k:"飲料", f:"いんりょう", m:"minuman"}, {k:"飲水", f:"いんすい", m:"air minum"},
  {k:"買物", f:"かいもの", m:"belanja"}, {k:"売買", f:"ばいばい", m:"jual beli"},
  {k:"立入禁止", f:"たちいりきんし", m:"dilarang masuk"},
  {k:"休止", f:"きゅうし", m:"berhenti sejenak"}, {k:"休学", f:"きゅうがく", m:"cuti kuliah"},
  {k:"入口口", f:"いりぐちぐち", m:"pintu masuk (dialek)"}
];

// ===== Render ke Grid =====
const grid = document.getElementById('vocabGrid');
vocabCombo.forEach(item => {
  const card = document.createElement('div');
  card.className = 'vocab-card';
  card.innerHTML = `
    <span class="kanji">${item.k}</span>
    <span class="furigana">${item.f}</span>
    <div class="arti">${item.m}</div>
  `;
  grid.appendChild(card);
});
