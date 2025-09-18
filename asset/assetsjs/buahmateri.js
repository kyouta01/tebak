// Format: [Nama Indonesia, Jepang, Romaji]
const fruits = [
  ["Alpukat", "アボカド", "Abokado"],
  ["Apel", "りんご", "Ringo"],
  ["Aprikot", "あんず", "Anzu"],
  ["Belimbing", "スターフルーツ", "Sutāfurūtsu"],
  ["Blackberry", "ブラックベリー", "Burakkuberī"],
  ["Blueberry", "ブルーベリー", "Burūberī"],
  ["Ceri", "さくらんぼ", "Sakuranbo"],
  ["Delima", "ざくろ", "Zakuro"],
  ["Durian", "ドリアン", "Dorian"],
  ["Jeruk", "みかん / オレンジ", "Mikan / Orenji"],
  ["Jeruk Bali", "グレープフルーツ", "Gurēpufurūtsu"],
  ["Jambu Air", "ローズアップル", "Rōzuappuru"],
  ["Jambu Biji", "グアバ", "Guaba"],
  ["Kiwi", "キウイ", "Kiui"],
  ["Lemon", "レモン", "Remon"],
  ["Jeruk Nipis", "ライム", "Raimu"],
  ["Mangga", "マンゴー", "Mangō"],
  ["Manggis", "マンゴスチン", "Manggosuchin"],
  ["Melon", "メロン", "Meron"],
  ["Nanas", "パイナップル", "Painappuru"],
  ["Nangka", "ジャックフルーツ", "Jakkufurūtsu"],
  ["Pepaya", "パパイヤ", "Papaiya"],
  ["Persik / Peach", "もも", "Momo"],
  ["Pir", "なし", "Nashi"],
  ["Pisang", "バナナ", "Banana"],
  ["Plum", "プラム", "Puramu"],
  ["Rambutan", "ランブータン", "Ranbūtan"],
  ["Salak", "サラック", "Sarakku"],
  ["Semangka", "スイカ", "Suika"],
  ["Stroberi", "いちご", "Ichigo"],
  // 20 tambahan
  ["Anggur", "ぶどう", "Budō"],
  ["Buah Naga", "ドラゴンフルーツ", "Doragon Furūtsu"],
  ["Cempedak", "チェンペダク", "Chenpedaku"],
  ["Cranberry", "クランベリー", "Kuranberī"],
  ["Kurma", "デーツ", "Dētsu"],
  ["Kasturi (Mangga kecil)", "カストゥリ", "Kasuturi"],
  ["Langsat", "ランサット", "Ransatto"],
  ["Longan / Lengkeng", "リュウガン", "Ryūgan"],
  ["Loquat", "びわ", "Biwa"],
  ["Markisa", "パッションフルーツ", "Passhon Furūtsu"],
  ["Mulberry", "マルベリー", "Maruberī"],
  ["Pepino", "ペピーノ", "Pepīno"],
  ["Pisang Raja", "バナナラジャ", "Banana Raja"],
  ["Quince", "マルメロ", "Marumero"],
  ["Sawo", "サポジラ", "Sapojira"],
  ["Sirsak", "グラビオラ", "Gurabiora"],
  ["Sukun", "パンノキ", "Pan no Ki"],
  ["Tomat", "トマト", "Tomato"],
  ["Vanila (buah polong)", "バニラ", "Banira"],
  ["Zaitun", "オリーブ", "Orību"]
];

// Urutkan A–Z berdasar nama Indonesia
fruits.sort((a, b) => a[0].localeCompare(b[0], 'id'));

const listEl = document.getElementById("fruitList");
fruits.forEach(([indo, jp, romaji]) => {
  const li = document.createElement("li");
  li.innerHTML = `${indo} (${jp})<span class="romaji">${romaji}</span>`;
  listEl.appendChild(li);
});

