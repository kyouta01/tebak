// Format: [Nama Indonesia, Jepang, Romaji]
const organs = [
  ["Aorta", "大動脈", "Daidōmyaku"],
  ["Empedu", "胆のう", "Tannō"],
  ["Esofagus / Kerongkongan", "食道", "Shokudō"],
  ["Ginjal", "腎臓", "Jinzō"],
  ["Hati / Liver", "肝臓", "Kanzō"],
  ["Jantung", "心臓", "Shinzō"],
  ["Kulit", "皮膚", "Hifu"],
  ["Lambung", "胃", "I"],
  ["Laring", "喉頭", "Kōtō"],
  ["Limpa", "脾臓", "Hizō"],
  ["Mulut", "口", "Kuchi"],
  ["Otak", "脳", "Nō"],
  ["Ovarium", "卵巣", "Ransō"],
  ["Pankreas", "膵臓", "Suizō"],
  ["Paru-paru", "肺", "Hai"],
  ["Pembuluh Darah", "血管", "Kekkan"],
  ["Prostat", "前立腺", "Zenritsusen"],
  ["Rahim", "子宮", "Shikyū"],
  ["Rektum", "直腸", "Chokuchō"],
  ["Telinga", "耳", "Mimi"],
  ["Tenggorokan / Faring", "咽頭", "Intō"],
  ["Testis", "精巣", "Seisō"],
  ["Tiroid", "甲状腺", "Kōjōsen"],
  ["Trakea", "気管", "Kikan"],
  ["Usus Besar", "大腸", "Daichō"],
  ["Usus Halus", "小腸", "Shōchō"],
  ["Vagina", "膣", "Chitsu"]
];

// Urutkan A–Z menurut nama Indonesia
organs.sort((a,b)=>a[0].localeCompare(b[0],'id'));

const listEl = document.getElementById("organList");
organs.forEach(([indo,jp,romaji])=>{
  const li = document.createElement("li");
  li.innerHTML = `${indo} (${jp})<span class="romaji">${romaji}</span>`;
  listEl.appendChild(li);
});

