const board = document.getElementById('board');
const diceBox = document.getElementById('diceBox');
const rollBtn = document.getElementById('rollBtn');
const turnSpan = document.getElementById('turn');

const questionSquares = [13,17,27,33,39,47,53,56,67,78,81,92,99];
const ladders = {4:14, 9:31, 20:38, 28:84, 40:59, 63:81, 71:91};
const snakes  = {17:7, 54:34, 62:19, 64:60, 87:24, 93:73, 95:75, 99:78};

let positions = [1,1];
let turn = 0;

const questions = [
  "Apa ibu kota Jepang?",
  "Gunung tertinggi di Jepang?",
  "Bunga nasional Jepang?",
  "Mata uang Jepang disebut apa?",
  "Pulau terbesar di Jepang?",
  "Nama kereta cepat di Jepang?",
  "Samurai menggunakan pedang apa?"
];

/* === Buat papan 10x10 === */
for (let r = 9; r >= 0; r--) {
  for (let c = 0; c < 10; c++) {
    const num = r % 2 === 0 ? r*10 + c + 1 : r*10 + (10 - c);
    const sq = document.createElement('div');
    sq.className = 'square';
    if (questionSquares.includes(num)) sq.classList.add('question');
    sq.id = 'sq' + num;
    sq.textContent = num;
    // label tangga
    if (ladders[num]) {
      const lbl = document.createElement('span');
      lbl.className = 'label';
      lbl.textContent = `🪜${num}→${ladders[num]}`;
      sq.appendChild(lbl);
    }
    // label ular
    if (snakes[num]) {
      const lbl = document.createElement('span');
      lbl.className = 'label';
      lbl.textContent = `🐍${num}→${snakes[num]}`;
      sq.appendChild(lbl);
    }
    board.appendChild(sq);
  }
}

/* === Tambah gambar ular & tangga (posisi manual) === */
/* Anda bisa atur posisi & ukuran sesuai kebutuhan. */
function addImage(cls, left, top, width, height) {
  const img = document.createElement('div');
  img.className = cls;
  img.style.left = left;
  img.style.top = top;
  img.style.width = width;
  img.style.height = height;
  board.appendChild(img);
}
// Contoh letak beberapa ular/tangga
addImage('ladder','20%','50%','8%','35%');
addImage('ladder','60%','20%','8%','40%');
addImage('snake','40%','30%','15%','50%');
addImage('snake','75%','60%','12%','35%');

/* === Pemain === */
function renderPlayers() {
  document.querySelectorAll('.player1,.player2').forEach(e => e.remove());
  positions.forEach((pos, i) => {
    const piece = document.createElement('div');
    piece.className = i === 0 ? 'player1' : 'player2';
    document.getElementById('sq' + pos).appendChild(piece);
  });
}
renderPlayers();

/* === Animasi Dadu === */
function rollDice() {
  rollBtn.disabled = true;
  let count = 0;
  const interval = setInterval(() => {
    const n = Math.floor(Math.random() * 6) + 1;
    diceBox.textContent = ["🎲","⚀","⚁","⚂","⚃","⚄","⚅"][n];
    count++;
    if (count > 10) {
      clearInterval(interval);
      movePlayer(n);
    }
  }, 100);
}

function movePlayer(dice) {
  const idx = turn;
  let target = positions[idx] + dice;
  if (target > 100) { nextTurn(); return; }
  let cur = positions[idx];
  const step = setInterval(() => {
    cur++;
    positions[idx] = cur;
    renderPlayers();
    if (cur >= target) {
      clearInterval(step);
      setTimeout(() => {
        if (ladders[cur]) { positions[idx] = ladders[cur]; renderPlayers(); }
        else if (snakes[cur]) { positions[idx] = snakes[cur]; renderPlayers(); }
        afterMove();
      }, 300);
    }
  }, 300);
}

function afterMove() {
  if (questionSquares.includes(positions[turn])) showQuestion();
  if (positions[turn] === 100) {
    alert(`Pemain ${turn+1} MENANG!`);
    rollBtn.disabled = true;
    return;
  }
  nextTurn();
}
function nextTurn() {
  turn = 1 - turn;
  turnSpan.textContent = `Pemain ${turn + 1}`;
  rollBtn.disabled = false;
}
rollBtn.addEventListener('click', rollDice);

/* === Modal pertanyaan === */
const modal = document.getElementById('questionModal');
const questionText = document.getElementById('questionText');
document.getElementById('closeModal').onclick = () => modal.style.display = 'none';
window.onclick = e => { if (e.target === modal) modal.style.display = 'none'; };

function showQuestion() {
  questionText.textContent = questions[Math.floor(Math.random() * questions.length)];
  modal.style.display = 'block';
}
