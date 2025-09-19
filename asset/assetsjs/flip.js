// ==========================
//  KANJI FLIP – 5 STAGE
// ==========================
const board      = document.getElementById('board');
const movesEl    = document.getElementById('moves');
const timeEl     = document.getElementById('time');
const resultBox  = document.getElementById('result');
const finalScore = document.getElementById('finalScore');
const restartBtn = document.getElementById('restartBtn');
const startBtn   = document.getElementById('startBtn');
const stageSel   = document.getElementById('stageSelect');

let cards   = [];
let flipped = [];
let moves   = 0;
let matched = 0;
let timeLeft = 0;
let timer;
let playerName = "";

// ====== Data Kanji ======
// Stage 1: 4 pasang (8 kartu) … Stage 5: 64 pasang (128 kartu)
const stagePairs = {
  1: ["日","月","山","川"],
  2: ["日","月","山","川","田","人","口","目"],
  3: [
    "日","月","山","川","田","人","口","目",
    "耳","手","足","心","力","火","水","木"
  ],
  4: [ // 32 pasang
    "日","月","山","川","田","人","口","目",
    "耳","手","足","心","力","火","水","木",
    "空","雨","石","金","土","竹","花","草",
    "虫","犬","鳥","魚","馬","風","雪","星"
  ],
  5: [ // 64 pasang (berbagai kanji dasar & angka)
    "一","二","三","四","五","六","七","八","九","十",
    "百","千","万","円","上","下","左","右","中","大",
    "小","入","出","立","休","先","生","学","校","時",
    "名","女","男","子","父","母","友","見","聞","言",
    "食","飲","車","電","駅","道","海","空","山","川",
    "花","草","木","森","雨","雪","風","火","水","土",
    "金","土","曜","書","読","話"
  ],
  6: [
    // *** Sample 128 kanji N4 ***
    "愛","案","以","意","医","員","院","飲","運","泳","駅","央","横","屋","温","化","荷","界",
    "開","階","寒","感","漢","館","岸","起","期","客","急","級","宮","球","去","橋","業","曲",
    "近","銀","区","苦","具","君","係","軽","血","決","研","県","庫","湖","向","幸","港","号",
    "根","祭","皿","仕","死","使","始","指","歯","詩","次","事","持","式","実","写","者","主",
    "取","守","酒","受","州","拾","終","習","集","住","重","宿","所","暑","助","昭","消","商",
    "章","勝","乗","植","申","深","真","神","親","図","数","晴","世","整","昔","全","相","送",
    "想","息","速","族","他","打","対","待","代","第","題","炭","短","談","着","注","柱","丁",
    "帳","調","追","定","庭","笛","鉄","転","都","度","投","豆","島","湯","登","等","動","童"
  ],
  7: [
    // *** Sample ±250 kanji N4 (perluas dari list N4) ***
    "愛","案","以","意","医","員","院","飲","運","泳","駅","央","横","屋","温","化","荷","界",
    "開","階","寒","感","漢","館","岸","起","期","客","急","級","宮","球","去","橋","業","曲",
    "近","銀","区","苦","具","君","係","軽","血","決","研","県","庫","湖","向","幸","港","号",
    "根","祭","皿","仕","死","使","始","指","歯","詩","次","事","持","式","実","写","者","主",
    "取","守","酒","受","州","拾","終","習","集","住","重","宿","所","暑","助","昭","消","商",
    "章","勝","乗","植","申","深","真","神","親","図","数","晴","世","整","昔","全","相","送",
    "想","息","速","族","他","打","対","待","代","第","題","炭","短","談","着","注","柱","丁",
    "帳","調","追","定","庭","笛","鉄","転","都","度","投","豆","島","湯","登","等","動","童",
    // tambah variasi N4 lainnya (duplikat untuk mencapai 250)
    "働","毒","特","馬","倍","箱","畑","発","反","坂","板","表","品","夫","付","府","副","兵","別",
    "辺","変","便","包","法","望","牧","末","民","無","約","薬","勇","有","由","遊","予","羊",
    "洋","葉","陽","様","落","流","旅","両","料","良","緑","列","連","老","労","録","和","悲",
    "福","喜","楽","願","怒","善","悪","感","想","愛","夢","望","歴","戦","残","極","満","然",
    "焼","照","簡","難","願","季","節","景","歌","芸","農","漁","港","警","守","護","論","議"
    // total ±250 simbol (boleh dilengkapi sesuai kebutuhan)
  ]
};

// ====== Buat & Acak kartu ======
function generateCards(stage) {
  const pairs = stagePairs[stage];
  const deck = [...pairs, ...pairs].sort(() => 0.5 - Math.random());
  board.innerHTML = "";
  deck.forEach(symbol => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <div class="front"></div>
      <div class="back">${symbol}</div>
    `;
    card.dataset.symbol = symbol;
    card.addEventListener('click', flipCard);
    board.appendChild(card);
  });
  cards = document.querySelectorAll('.card');
}

// ====== Hitung waktu berdasar stage ======
function stageTime(stage) {
  switch(stage) {
    case 1: return 60;     // 8  kartu
    case 2: return 90;     // 16 kartu
    case 3: return 150;    // 32 kartu
    case 4: return 300;    // 64 kartu
    case 5: return 600;    // 128 kartu
    case 6: return 600;    // ±256 kartu
    case 7: return 900;   // ±512 kartu
    default: return 60;
  }
}

// ====== Mulai Game ======
function startGame() {
  const stage = Number(stageSel.value);

  if (!playerName) {
    playerName = prompt("Masukkan nama pemain:", "Pemain") || "Pemain";
  }

  moves   = 0;
  matched = 0;
  flipped = [];
  timeLeft = stageTime(stage);

  movesEl.textContent = moves;
  timeEl.textContent  = timeLeft;
  resultBox.classList.add('hidden');

  generateCards(stage);

  clearInterval(timer);
  timer = setInterval(() => {
    timeLeft--;
    timeEl.textContent = timeLeft;
    if (timeLeft <= 0) endGame();
  }, 1000);
}

// ====== Balik kartu ======
function flipCard() {
  if (flipped.length === 2) return;
  if (this.classList.contains('flip')) return;

  this.classList.add('flip');
  flipped.push(this);

  if (flipped.length === 2) {
    moves++;
    movesEl.textContent = moves;

    if (flipped[0].dataset.symbol === flipped[1].dataset.symbol) {
      matched += 2;
      flipped = [];
      if (matched === cards.length) endGame();
    } else {
      setTimeout(() => {
        flipped.forEach(c => c.classList.remove('flip'));
        flipped = [];
      }, 800);
    }
  }
}

// ====== Selesai ======
function endGame() {
  clearInterval(timer);
  const totalScore = Math.max(0, 100 - (moves * 3) + timeLeft);

  resultBox.classList.remove('hidden');
  finalScore.textContent =
    `${playerName} | Langkah: ${moves} | Sisa Waktu: ${timeLeft}s | Skor: ${totalScore}`;

  const boardData = JSON.parse(localStorage.getItem('scoreBoard')) || [];
  boardData.push({
    name: playerName,
    score: totalScore,
    moves,
    timeLeft,
    stage: stageSel.value,
    game: 'kanji-flip-5stage',
    date: new Date().toLocaleString()
  });
  localStorage.setItem('scoreBoard', JSON.stringify(boardData));
}

// ====== Event ======
startBtn.addEventListener('click', startGame);
restartBtn.addEventListener('click', startGame);

// Start default Stage 1
startGame();
