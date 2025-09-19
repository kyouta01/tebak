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
