// =======================
//  BUNPŌ QUIZ GAME LOGIC
// =======================

// ----- Bank Soal -----
const questions = [
  { text: "Watashi ___ genki desu.",     answers: ["は","wa"] },
  { text: "Onamae wa nandesu ___ .",     answers: ["か","ka"] },
  { text: "Kore ___ hon desu.",          answers: ["は","wa"] },
  { text: "Ashita ___ gakko e ikimasu.", answers: ["は","wa"] },
  { text: "Nihongo ___ muzukashii desu.",answers: ["は","wa"] }
];

// ----- Variabel Utama -----
let current = 0;
let score   = 0;
let player  = "";

// ----- Elemen DOM -----
const startScreen  = document.getElementById('startScreen');
const quizScreen   = document.getElementById('quizScreen');
const resultScreen = document.getElementById('resultScreen');

const questionEl   = document.getElementById('question');
const answerInput  = document.getElementById('answerInput');
const scoreEl      = document.getElementById('score');
const messageEl    = document.getElementById('message');
const nextBtn      = document.getElementById('nextBtn');
const finalScoreEl = document.getElementById('finalScore');

// ======= Fungsi =======
function showQuestion() {
  const q = questions[current];
  questionEl.textContent = q.text;
  answerInput.value = "";
  messageEl.textContent = "";
  nextBtn.classList.add("hidden");
}

function checkAnswer() {
  const user = answerInput.value.trim().toLowerCase();
  if (!user) return;

  // ✅ gunakan questions[current].answers (array)
  const correctAnswers = questions[current].answers.map(a => a.toLowerCase());

  if (correctAnswers.includes(user)) {
    score += 10;
    scoreEl.textContent = score;
    messageEl.textContent = "Benar! +10";
  } else {
    messageEl.textContent = `Salah. Jawaban: ${correctAnswers.join(" / ")}`;
  }
  nextBtn.classList.remove("hidden");
}

function nextQuestion() {
  current++;
  if (current >= questions.length) {
    showResult();
  } else {
    showQuestion();
  }
}

function showResult() {
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");
  finalScoreEl.textContent = `${player} : ${score}`;

  // === Simpan ke ScoreBoard ===
  const board = JSON.parse(localStorage.getItem('scoreBoard')) || [];
  board.push({
    name: player,
    score: score,
    game: 'bunpo',
    date: new Date().toLocaleString()
  });
  localStorage.setItem('scoreBoard', JSON.stringify(board));
}

// ======= Event Listener =======
document.getElementById('startBtn').addEventListener('click', () => {
  player = document.getElementById('playerName').value.trim() || "Pemain";
  startScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  score = 0;
  scoreEl.textContent = score;
  current = 0;
  showQuestion();
});

document.getElementById('submitBtn').addEventListener('click', checkAnswer);
nextBtn.addEventListener('click', nextQuestion);

document.getElementById('playAgainBtn').addEventListener('click', () => {
  resultScreen.classList.add("hidden");
  startScreen.classList.remove("hidden");
});
