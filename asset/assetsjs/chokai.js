// ====== Bank Soal Audio ======
const questions = [
  { audio: 'audio/1.mp3', answer: 'kucing' },
  { audio: 'audio/2.mp3', answer: 'anjing' },
  { audio: 'audio/3.mp3', answer: 'burung' }
];

const playAudioBtn = document.getElementById('playAudioBtn');
const submitBtn    = document.getElementById('submitBtn');
const nextBtn      = document.getElementById('nextBtn');
const answerInput  = document.getElementById('answerInput');
const message      = document.getElementById('message');
const scoreEl      = document.getElementById('score');
const totalEl      = document.getElementById('total');

let currentIndex = 0;
let score = 0;
totalEl.textContent = questions.length;

// Fungsi memutar audio
function playAudio() {
  const q = questions[currentIndex];
  const audio = new Audio(q.audio);
  audio.play();
}

// Fungsi cek jawaban
function checkAnswer() {
  const userAnswer = answerInput.value.trim().toLowerCase();
  const correct    = questions[currentIndex].answer.toLowerCase();
  if (!userAnswer) return;

  if (userAnswer === correct) {
    score++;
    message.textContent = '✅ Benar!';
    message.style.color = 'green';
  } else {
    message.textContent = `❌ Salah. Jawaban benar: ${correct}`;
    message.style.color = 'red';
  }
  scoreEl.textContent = score;
  submitBtn.disabled = true;
  nextBtn.classList.remove('hidden');
}

// Fungsi soal berikutnya
function nextQuestion() {
  currentIndex++;
  if (currentIndex >= questions.length) {
    message.textContent = `Game selesai! Skor akhir: ${score}/${questions.length}`;
    playAudioBtn.disabled = true;
    answerInput.disabled  = true;
    nextBtn.disabled      = true;
    return;
  }
  // Reset tampilan
  answerInput.value = '';
  message.textContent = '';
  submitBtn.disabled = false;
  nextBtn.classList.add('hidden');
}

playAudioBtn.addEventListener('click', playAudio);
submitBtn.addEventListener('click', checkAnswer);
nextBtn.addEventListener('click', nextQuestion);
