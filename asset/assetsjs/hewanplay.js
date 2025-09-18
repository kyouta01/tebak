// ==== 20 Soal (ganti path gambar & teks sesuai kebutuhan) ====
const questionBank = [
  {src:'asset/image/hewan/1a.jpeg', choices:['ペンギン','カメ','とり','さかな'], answer:0, hint:'Hewan di kutub utara.'},
  {src:'asset/image/hewan/2.jpeg',  choices:['カニ','うま','たか','いぬ'],       answer:0, hint:'Memiliki 2 capit.'},
  {src:'asset/image/hewan/3.jpeg',  choices:['イーグル','しか','カメ','ねこ'],    answer:2, hint:'Membawa rumah di punggung.'},
  {src:'asset/image/hewan/4.jpeg',  choices:['イーグル','うま','いぬ','カメ'],    answer:2, hint:'Suka menggonggong.'},
  {src:'asset/image/hewan/5.jpeg',  choices:['ぶた','ぎゅう','ペンギン','いぬ'],  answer:1, hint:'Menghasilkan susu.'},
  {src:'asset/image/hewan/6.jpeg',  choices:['うま','さかな','とり','ぶた'],      answer:3, hint:'Berwarna pink.'},
  {src:'asset/image/hewan/7.jpeg',  choices:['ライオン','わに','ぞう','とら'],     answer:1, hint:'Julukan playboy.'},
  {src:'asset/image/hewan/8.jpeg',  choices:['さかな','へび','ライオン','とら'],    answer:0, hint:'Berenang di air.'},
  {src:'asset/image/hewan/9.jpeg',  choices:['たか','しか','かも','ねこ'],        answer:2, hint:'Unggas bisa berenang.'},
  {src:'asset/image/hewan/10.jpeg', choices:['うさぎ','へび','ペンギン','わに'],   answer:0, hint:'Telinganya panjang.'},
  // Tambahan 10 soal
  {src:'asset/image/hewan/11.jpeg', choices:['きつね','ねずみ','ねこ','しか'],     answer:2, hint:'Suka whiskas.'},
  {src:'asset/image/hewan/12.jpeg', choices:['うし','ぞう','やぎ','ラマ'],         answer:1, hint:'Telinganya besar.'},
  {src:'asset/image/hewan/13.jpeg', choices:['えび','かえる','とんぼ','とり'],    answer:0, hint:'Suka dibalik batu.'},
  {src:'asset/image/hewan/14.jpeg', choices:['ねこ','たこ','さかな','うま'],      answer:1, hint:'8 tentacle.'},
  {src:'asset/image/hewan/15.jpeg', choices:['わに','さめ','いるか','くじら'],    answer:3, hint:'Punya gym di Bikini Bottom.'},
  {src:'asset/image/hewan/16.jpeg', choices:['とり','あり','はち','へび'],        answer:3, hint:'Temanmu.'},
  {src:'asset/image/hewan/17.jpeg', choices:['ペンギン','アリゲーター','ヘビ','サメ'], answer:3, hint:'Gawr Gura.'},
  {src:'asset/image/hewan/18.jpeg', choices:['イカ','いぬ','ライオン','とら'],    answer:0, hint:'Tintanya warna hitam.'},
  {src:'asset/image/hewan/19.jpeg', choices:['にわとり','かも','かえる','カラス'], answer:2, hint:'Amfibi.'},
  {src:'asset/image/hewan/20.jpeg', choices:['たこ','ねずみ','もぐら','カメ'],   answer:0, hint:'Sering jadi takoyaki.'},
];

// ==== Ambil 10 Soal Acak ====
function getRandomQuestions(srcArray, count=10) {
  const arr = [...srcArray];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.slice(0, count);
}

// ==== Variabel Game ====
let questions, order, current, score, playerName;
let timerInterval, timeLeft = 60; // Timer 60 detik

const imgEl       = document.getElementById('quizImage');
const choicesEl   = document.getElementById('choices');
const scoreEl     = document.getElementById('score');
const roundEl     = document.getElementById('round');
const totalEl     = document.getElementById('total');
const messageEl   = document.getElementById('message');
const hintEl      = document.getElementById('hint');
const progressBar = document.getElementById('progressBar');
const timerEl     = document.getElementById('timer');

const nameSection  = document.getElementById('nameSection');
const gameSection  = document.getElementById('gameSection');
const leaderboard  = document.getElementById('leaderboardSection');
const leaderboardList = document.getElementById('leaderboardList');

// ==== Leaderboard ====
// simpan skor + sisa waktu
function saveScore(name, sc, remainingTime){
  const board = JSON.parse(localStorage.getItem('scoreBoard') || '[]');
  board.push({ 
    name, 
    score: sc, 
    timeLeft: remainingTime, // <== simpan sisa waktu
    date: new Date().toLocaleString()
  });
  // urutkan: skor tertinggi dulu, jika sama sisa waktu terbanyak
  board.sort((a,b) => {
    if (b.score === a.score) return b.timeLeft - a.timeLeft;
    return b.score - a.score;
  });
  localStorage.setItem('scoreBoard', JSON.stringify(board.slice(0,10)));
}

function renderLeaderboard(){
  const board = JSON.parse(localStorage.getItem('scoreBoard') || '[]');
  leaderboardList.innerHTML = '';
  board.forEach((b,i)=>{
    const li = document.createElement('li');
    li.innerHTML = `<strong>${i+1}. ${b.name}</strong> - Skor: ${b.score} 
                    <br>Sisa Waktu: ${b.timeLeft}s
                    <br><small>${b.date}</small>`;
    leaderboardList.appendChild(li);
  });
}

// ==== Timer ====
function startTimer(){
  clearInterval(timerInterval);
  timeLeft = 60;
  timerEl.textContent = timeLeft;
  timerInterval = setInterval(()=>{
    timeLeft--;
    timerEl.textContent = timeLeft;
    if(timeLeft <= 0){
      clearInterval(timerInterval);
      messageEl.textContent = 'Waktu habis!';
      showResults();   // otomatis selesai
    }
  },1000);
}

// ==== Fungsi Util ====
function shuffle(a){
  for(let i=a.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
}

function loadRound(index){
  const q = questions[order[index]];
  imgEl.src = q.src;
  choicesEl.innerHTML='';
  q.choices.forEach((c,i)=>{
    const btn = document.createElement('button');
    btn.className='choice';
    btn.textContent=c;
    btn.onclick=()=>select(i,btn);
    choicesEl.appendChild(btn);
  });
  roundEl.textContent = index + 1;
  hintEl.textContent  = 'Tekan "Hint" jika butuh petunjuk';
  messageEl.textContent = '';
  updateProgress();
}

function select(i,btn){
  const q = questions[order[current]];
  Array.from(choicesEl.children).forEach(b=>b.disabled=true);
  if(i===q.answer){
    btn.classList.add('correct');
    score+=10;
    scoreEl.textContent = score;
    messageEl.textContent = 'Benar! +10';
  }else{
    btn.classList.add('wrong');
    Array.from(choicesEl.children)[q.answer].classList.add('correct');
    messageEl.textContent = 'Salah.';
  }
}

function next(){
  current++;
  if(current>=order.length){ showResults(); return; }
  loadRound(current);
}

function showResults(){
  clearInterval(timerInterval); // stop timer
  // simpan skor + sisa waktu
  saveScore(playerName, score, timeLeft);
  renderLeaderboard();

  imgEl.src = 'data:image/svg+xml;utf8,'+encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='800' height='400'>
      <rect width='100%' height='100%' fill='#0b1220'/>
      <text x='50%' y='44%' fill='white' font-size='36' text-anchor='middle'>Selesai!</text>
      <text x='50%' y='58%' fill='#9fbcd9' font-size='22' text-anchor='middle'>Skor akhir: ${score}</text>
    </svg>`
  );
  choicesEl.innerHTML='';
  messageEl.textContent='Permainan selesai.';
  leaderboard.classList.remove('hidden');
}

function showHint(){
  if(current<0||current>=order.length) return;
  hintEl.textContent='Hint: '+questions[order[current]].hint;
}

function updateProgress(finished=false){
  const pct = finished ? 100 : Math.round(((current+1)/questions.length)*100);
  progressBar.style.width = pct + '%';
}

function resetGame(shuffleOrder=true){
  questions = getRandomQuestions(questionBank,10);
  order = [...Array(questions.length).keys()];
  if(shuffleOrder) shuffle(order);
  current = -1;
  score = 0;
  scoreEl.textContent = score;
  totalEl.textContent = questions.length;
  startTimer();
  next();
}

// ==== Event ====
document.getElementById('nextBtn').addEventListener('click',()=> next());
document.getElementById('hintBtn').addEventListener('click',showHint);
document.getElementById('shuffleBtn').addEventListener('click',()=> resetGame(true));
document.getElementById('startGameBtn').addEventListener('click',()=>{
  const name = document.getElementById('playerName').value.trim();
  if(!name){ alert('Masukkan nama terlebih dahulu'); return; }
  playerName = name;
  nameSection.classList.add('hidden');
  gameSection.classList.remove('hidden');
  resetGame(true);
});
document.getElementById('playAgainBtn').addEventListener('click',()=>{
  leaderboard.classList.add('hidden');
  resetGame(true);
});

