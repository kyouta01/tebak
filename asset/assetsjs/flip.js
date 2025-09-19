// ==========================
//   KANJI FLIP – MEMORY GAME
// ==========================

const board      = document.getElementById('board');
const movesEl    = document.getElementById('moves');
const timeEl     = document.getElementById('time');
const resultBox  = document.getElementById('result');
const finalScore = document.getElementById('finalScore');
const restartBtn = document.getElementById('restartBtn');

let cards   = [];
let flipped = [];
let moves   = 0;
let matched = 0;
let timeLeft = 60;
let timer;
let playerName = "";

// === Pasangan Kanji (4 pasang = 8 kartu) ===
const kanjiPairs = ["日","月","山","川"];

// === Buat & acak kartu ===
function generateCards() {
  const deck = [...kanjiPairs, ...kanjiPairs].sort(() => 0.5 - Math.random());
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

// === Mulai Game ===
function startGame() {
  // minta nama pemain sekali di awal
  if (!playerName) {
    playerName = prompt("Masukkan nama pemain:", "Pemain") || "Pemain";
  }

  moves = 0;
  matched = 0;
  timeLeft = 60;
  movesEl.textContent = moves;
  timeEl.textContent  = timeLeft;
  resultBox.classList.add('hidden');

  generateCards();

  clearInterval(timer);
  timer = setInterval(() => {
    timeLeft--;
    timeEl.textContent = timeLeft;
    if (timeLeft <= 0) endGame();
  }, 1000);
}

// === Balik kartu ===
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

// === Selesai ===
function endGame() {
  clearInterval(timer);

  // Hitung skor: 100 - langkah*5 + sisa waktu
  const totalScore = Math.max(0, 100 - (moves * 5) + timeLeft);

  resultBox.classList.remove('hidden');
  finalScore.textContent = `${playerName} | Langkah: ${moves} | Sisa Waktu: ${timeLeft}s | Skor: ${totalScore}`;

  // ===== Simpan ke SCOREBOARD =====
  const boardData = JSON.parse(localStorage.getItem('scoreBoard')) || [];
  boardData.push({
    name: playerName,
    score: totalScore,
    moves: moves,
    timeLeft: timeLeft,
    game: 'kanji-flip',
    date: new Date().toLocaleString()
  });
  localStorage.setItem('scoreBoard', JSON.stringify(boardData));
}

// === Event ===
restartBtn.addEventListener('click', startGame);

// Start pertama kali
startGame();
