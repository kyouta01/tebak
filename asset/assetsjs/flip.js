// ==========================
//  KANJI FLIP – 3 STAGE
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
// Stage 1: 4 pasang, Stage 2: 8 pasang, Stage 3: 16 pasang
const stagePairs = {
  1: ["日","月","山","川"],
  2: ["日","月","山","川","田","人","口","目"],
  3: [
    "日","月","山","川","田","人","口","目",
    "耳","手","足","心","力","火","水","木"
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

// ====== Mulai Game ======
function startGame() {
  const stage = Number(stageSel.value);

  if (!playerName) {
    playerName = prompt("Masukkan nama pemain:", "Pemain") || "Pemain";
  }

  moves   = 0;
  matched = 0;
  flipped = [];
  timeLeft = stage === 1 ? 60 : stage === 2 ? 90 : 150; // waktu berbeda per stage

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

  // simpan ke localStorage scoreboard
  const boardData = JSON.parse(localStorage.getItem('scoreBoard')) || [];
  boardData.push({
    name: playerName,
    score: totalScore,
    moves,
    timeLeft,
    stage: stageSel.value,
    game: 'kanji-flip-3stage',
    date: new Date().toLocaleString()
  });
  localStorage.setItem('scoreBoard', JSON.stringify(boardData));
}

// ====== Event ======
startBtn.addEventListener('click', startGame);
restartBtn.addEventListener('click', startGame);

// Start default Stage 1
startGame();
