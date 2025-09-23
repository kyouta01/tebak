/* Sudoku Kanji — JavaScript */

/* Kanji map (index 1..9) */
const KANJI = ["", "一","二","三","四","五","六","七","八","九"];

/* Contoh puzzle (0 = kosong) --- classic medium puzzle */
const puzzle = [
  [5,3,0,0,7,0,0,0,0],
  [6,0,0,1,9,5,0,0,0],
  [0,9,8,0,0,0,0,6,0],
  [8,0,0,0,6,0,0,0,3],
  [4,0,0,8,0,3,0,0,1],
  [7,0,0,0,2,0,0,0,6],
  [0,6,0,0,0,0,2,8,0],
  [0,0,0,4,1,9,0,0,5],
  [0,0,0,0,8,0,0,7,9]
];

/* Solusi lengkap (dipakai untuk hint & cek) */
const solution = [
  [5,3,4,6,7,8,9,1,2],
  [6,7,2,1,9,5,3,4,8],
  [1,9,8,3,4,2,5,6,7],
  [8,5,9,7,6,1,4,2,3],
  [4,2,6,8,5,3,7,9,1],
  [7,1,3,9,2,4,8,5,6],
  [9,6,1,5,3,7,2,8,4],
  [2,8,7,4,1,9,6,3,5],
  [3,4,5,2,8,6,1,7,9]
];

const boardEl = document.getElementById('board');
const statusEl = document.getElementById('status');
let selected = null; // {r,c}
let grid = [];       // current values (numbers)

/* build initial grid from puzzle */
function initGrid() {
  grid = puzzle.map(row => row.slice());
}

/* render board */
function renderBoard() {
  boardEl.innerHTML = '';
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.dataset.r = r;
      cell.dataset.c = c;

      // add block borders for 3x3 visual
      if ((c+1) % 3 === 0 && c !== 8) cell.classList.add('block-right');
      if ((r+1) % 3 === 0 && r !== 8) cell.classList.add('block-bottom');
      if (c % 3 === 0 && c !== 0) cell.classList.add('block-left');
      if (r % 3 === 0 && r !== 0) cell.classList.add('block-top');

      const val = grid[r][c];
      if (puzzle[r][c] !== 0) {
        cell.classList.add('fixed');
        cell.textContent = KANJI[val];
      } else {
        cell.textContent = val ? KANJI[val] : '';
      }

      cell.addEventListener('click', () => onCellClick(r, c));
      boardEl.appendChild(cell);
    }
  }
  validateAll();
}

/* cell click */
function onCellClick(r,c) {
  // can't select fixed cells
  if (puzzle[r][c] !== 0) {
    selected = null;
    updateSelection();
    return;
  }
  selected = {r,c};
  updateSelection();
}

/* update selection highlight */
function updateSelection() {
  document.querySelectorAll('.cell').forEach(el => el.classList.remove('selected'));
  if (!selected) return;
  const el = document.querySelector(`.cell[data-r="${selected.r}"][data-c="${selected.c}"]`);
  if (el) el.classList.add('selected');
}

/* set number into selected cell */
function setNumber(n) {
  if (!selected) return;
  const {r,c} = selected;
  grid[r][c] = n;
  renderBoard();
  updateSelection();
}

/* erase selected */
function eraseSelected() {
  if (!selected) return;
  const {r,c} = selected;
  grid[r][c] = 0;
  renderBoard();
  updateSelection();
}

/* validate row/col/box and mark conflicts */
function validateAll() {
  // clear conflicts
  document.querySelectorAll('.cell').forEach(el => el.classList.remove('conflict'));
  // check each non-empty cell
  for (let r=0; r<9; r++){
    for (let c=0; c<9; c++){
      const val = grid[r][c];
      if (!val) continue;
      // check row
      for (let cc=0; cc<9; cc++){
        if (cc===c) continue;
        if (grid[r][cc] === val) markConflict(r,c,r,cc);
      }
      // check col
      for (let rr=0; rr<9; rr++){
        if (rr===r) continue;
        if (grid[rr][c] === val) markConflict(r,c,rr,c);
      }
      // check box
      const br = Math.floor(r/3)*3;
      const bc = Math.floor(c/3)*3;
      for (let rr=br; rr<br+3; rr++){
        for (let cc=bc; cc<bc+3; cc++){
          if (rr===r && cc===c) continue;
          if (grid[rr][cc] === val) markConflict(r,c,rr,cc);
        }
      }
    }
  }
}

/* mark conflict pair */
function markConflict(r1,c1,r2,c2) {
  const a = document.querySelector(`.cell[data-r="${r1}"][data-c="${c1}"]`);
  const b = document.querySelector(`.cell[data-r="${r2}"][data-c="${c2}"]`);
  if (a) a.classList.add('conflict');
  if (b) b.classList.add('conflict');
}

/* check solution (compare with solution array) */
function checkSolution() {
  let allFilled = true;
  let wrongCount = 0;
  for (let r=0; r<9; r++){
    for (let c=0; c<9; c++){
      if (grid[r][c] === 0) allFilled = false;
      if (grid[r][c] !== solution[r][c]) wrongCount++;
    }
  }
  validateAll();
  if (wrongCount === 0 && allFilled) {
    statusEl.textContent = "Selamat — puzzle terpecahkan! 🎉";
    statusEl.style.color = "#2b6b2b";
    return true;
  } else {
    statusEl.textContent = `Masih ada ${wrongCount} angka salah / kosong.`;
    statusEl.style.color = "#8b2b2b";
    return false;
  }
}

/* hint: isi satu sel kosong dengan nilai benar */
function giveHint() {
  const empties = [];
  for (let r=0; r<9; r++){
    for (let c=0; c<9; c++){
      if (grid[r][c] === 0) empties.push({r,c});
    }
  }
  if (empties.length === 0) {
    statusEl.textContent = "Tidak ada sel kosong untuk hint.";
    return;
  }
  const pick = empties[Math.floor(Math.random()*empties.length)];
  grid[pick.r][pick.c] = solution[pick.r][pick.c];
  selected = {r: pick.r, c: pick.c};
  renderBoard();
  updateSelection();
  statusEl.textContent = "Hint diberikan (terisi satu angka).";
  statusEl.style.color = "#2b6b2b";
}

/* reset ke puzzle awal */
function resetPuzzle() {
  initGrid();
  selected = null;
  renderBoard();
  statusEl.textContent = "";
}

/* setup keypad buttons */
function setupControls() {
  document.querySelectorAll('.kanji-btn').forEach(btn=>{
    btn.addEventListener('click', e=>{
      const n = Number(btn.dataset.num);
      setNumber(n);
    });
  });
  document.getElementById('eraseBtn').addEventListener('click', ()=> eraseSelected());
  document.getElementById('checkBtn').addEventListener('click', ()=> checkSolution());
  document.getElementById('hintBtn').addEventListener('click', ()=> giveHint());
  document.getElementById('resetBtn').addEventListener('click', ()=> resetPuzzle());

  // keyboard support: 1-9 & Backspace
  window.addEventListener('keydown', e=>{
    if (!selected) return;
    const key = e.key;
    if (/^[1-9]$/.test(key)) {
      setNumber(Number(key));
    } else if (key === 'Backspace' || key === 'Delete' || key === '0') {
      eraseSelected();
    } else if (key === 'Enter') {
      checkSolution();
    }
  });
}

/* init */
initGrid();
renderBoard();
setupControls();
