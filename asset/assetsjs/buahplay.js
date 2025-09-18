// ==== 20 Soal (ganti path gambar & teks sesuai kebutuhan) ====
const questionBank = [
  {src:'asset/image/buah/1a.jpeg', choices:['いちご','トマト','スイカ','グラビオラ'], answer:0,
   hint:'Buah merah kecil dengan biji di luar, manis asam.'},
  {src:'asset/image/buah/2.jpeg', choices:['マンゴスチン','うスイカま','トマト','いちご'], answer:0,
   hint:'Disebut ratu buah, kulitnya ungu pekat, daging putih manis.'},
  {src:'asset/image/buah/3.jpeg', choices:['ジャックフルーツ','パパイヤ','マンゴスチン','マンゴー'], answer:2,
   hint:'Kulit ungu pekat, daging putih, sering jadi ratu buah.'},
  {src:'asset/image/buah/4.jpeg', choices:['オレンジ','ライム','レモン','グレープフルーツ'], answer:2,
   hint:'Buah sitrus kuning, rasa asam segar, kaya vitamin C.'},
  {src:'asset/image/buah/5.jpeg', choices:['デーツ','パパイヤ','メロン','パッションフルーツ'], answer:1,
   hint:'Kulit oranye, daging lembut oranye, biasa untuk rujak.'},
  {src:'asset/image/buah/6.jpeg', choices:['トマト','うスイカま','マンゴスチン','スターフルーツ'], answer:3,
   hint:'Berbentuk bintang saat diiris, rasa manis asam segar.'},
  {src:'asset/image/buah/7.jpeg', choices:['オリーブ','バニラ','サポジラ','バナナ'], answer:1,
   hint:'Sumber aroma es krim, polong cokelat kehitaman.'},
  {src:'asset/image/buah/8.jpeg', choices:['スイカ','オリーブ','サラック','ペピーノ'], answer:0,
   hint:'Buah besar hijau, daging merah berair, favorit musim panas.'},
  {src:'asset/image/buah/9.jpeg', choices:['たか','オリーブ','チェンペダク','ペピーノ'], answer:2,
   hint:'Mirip nangka, harum khas, populer di Asia Tenggara.'},
  {src:'asset/image/buah/10.jpeg', choices:['ランサット','オリーブ','ペピーノ','メロン'], answer:0,
   hint:'Buah kecil berwarna kuning pucat, rasa manis agak asam.'},

  // Tambahan
  {src:'asset/image/buah/11.jpeg', choices:['グレープフルーツ','サポジラ','ドラゴンフルーツ','レモン'], answer:2,
   hint:'Kulit merah muda bersisik, daging putih/merah, biji hitam.'},
  {src:'asset/image/buah/12.jpeg', choices:['バナナ','メロン','ドラゴンフルーツ','サポジラ'], answer:1,
   hint:'Buah bulat hijau, daging oranye/hijau, harum dan manis.'},
  {src:'asset/image/buah/13.jpeg', choices:['ランブータン','サポジラ','グレープフルーツ','バナナ'], answer:0,
   hint:'Kulit merah berbulu, daging putih bening manis.'},
  {src:'asset/image/buah/14.jpeg', choices:['スターフルーツ','りんご','ドラゴンフルーツ','ドリアン'], answer:1,
   hint:'Buah merah/hijau, renyah manis, ikon buah dunia.'},
  {src:'asset/image/buah/15.jpeg', choices:['サポジラ','スターフルーツ','メロン','にんじん'], answer:3,
   hint:'Sayuran oranye manis, sering dijus atau dimasak sup.'},
  {src:'asset/image/buah/16.jpeg', choices:['メロン','にんじん','スターフルーツ','ドリアン'], answer:3,
   hint:'Dikenal sebagai raja buah, berduri tajam, aroma kuat.'},
  {src:'asset/image/buah/17.jpeg', choices:['ブラックベリー','ブルーベリー','アボカド','ざくろ'], answer:3,
   hint:'Kulit merah keras, biji banyak berair ruby merah.'},
  {src:'asset/image/buah/18.jpeg', choices:['アボカド','ブラックベリー','ざくろ','ブルーベリー'], answer:0,
   hint:'Kulit hijau, daging lembut krem, kaya lemak sehat.'}
];

// ==== Fungsi Util ====
function getRandomQuestions(srcArray, count=10) {
  const arr = [...srcArray];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.slice(0, count);
}
function shuffle(a){ for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } }

// ==== Variabel Game ====
let questions, order, current, score, playerName;
let timerInterval, timeLeft = 60;

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
function saveScore(name, sc, remainingTime){
  const board = JSON.parse(localStorage.getItem('scoreBoard') || '[]');
  board.push({name, score: sc, timeLeft: remainingTime, date: new Date().toLocaleString()});
  board.sort((a,b)=> b.score===a.score ? b.timeLeft - a.timeLeft : b.score - a.score);
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
      showResults();
    }
  },1000);
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
  // otomatis ke soal berikut setelah 1 detik
  setTimeout(next,1000);
}

function next(){
  current++;
  if(current>=order.length){ showResults(); return; }
  loadRound(current);
}

function showResults(){
  clearInterval(timerInterval);
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

// ==== Event Listeners ====
document.getElementById('nextBtn').addEventListener('click',next);
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

