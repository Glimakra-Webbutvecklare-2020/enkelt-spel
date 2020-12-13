const pSelections = document.querySelectorAll(".player");
const cSelections = document.querySelectorAll(".computer");
const anim = document.querySelector("#animation");
const counter = document.querySelector("#counter");
const restart = document.querySelector("#restart");
let pSelect = undefined;
let cSelection = undefined;
let game = true;
let winCounterPlayer = 0;
let winCounterComputer = 0;

function cGuess(cSelections) {
  resetSelections(cSelections);
  const cRandom = Math.floor(Math.random() * cSelections.length);
  const cSelected = cSelections[cRandom];
  cSelected.classList.add("selected");
  return cSelected;
}
function selected(e) {
  resetSelections(pSelections);
  e.target.classList.add("selected");
  return e.target;
}
function resetSelections(selections) {
  selections.forEach((selection) => {
    if (selection.classList.contains("selected")) {
      selection.classList.remove("selected");
    }
    if (selection.classList.contains("win")) {
      selection.classList.remove("win");
    }
    if (selection.classList.contains("lost")) {
      selection.classList.remove("lost");
    }
    if (selection.classList.contains("draw")) {
      selection.classList.remove("draw");
    }
  });
}
function resultOfGame(pSelect, cSelection) {
  const pOpt = pSelect.classList[0];
  const cOpt = cSelection.classList[0];
  let result = "lose";
  if (pOpt === cOpt) {
    result = "draw";
  } else {
    if (pOpt === "rock") {
      if (cOpt === "scissors") {
        result = "win";
      }
    } else if (pOpt === "paper") {
      if (cOpt === "rock") {
        result = "win";
      }
    } else if (pOpt === "scissors") {
      if (cOpt === "paper") {
        result = "win";
      }
    }
  }
  return result;
}
function andTheWinnerIs(result) {
  if (result === "win") {
    anim.textContent = "Winner";
    pSelect.classList.add("win");
    cSelection.classList.add("lost");
    winCounterPlayer++;
  } else if (result === "draw") {
    anim.textContent = "Draw!";
    pSelect.classList.add("draw");
    cSelection.classList.add("draw");
  } else {
    winCounterComputer++;
    anim.textContent = "Loser";
    pSelect.classList.add("lost");
    cSelection.classList.add("win");
  }
  counter.textContent = `${winCounterPlayer}:${winCounterComputer}`;
}
function fullClear() {
  anim.textContent = " ";
  resetSelections(pSelections);
  resetSelections(cSelections);
}
function restarter() {
  if (winCounterPlayer === 3 || winCounterComputer === 3) {
    // show restart button link
    restartBtn.textContent = "RESTART";
    if (winCounterPlayer === 3) {
      anim.classList.add("endGameEffectWin");
    } else if (winCounterComputer === 3) {
      anim.classList.add("endGameEffectLose");
    }
    // remove eventListener
    pSelections.forEach((btn) => {
      btn.removeEventListener("click", rps);
    });
  }
}

function rps(e) {
  fullClear();
  pSelect = selected(e);
  setTimeout(() => {
    cSelection = cGuess(cSelections);
    const result = resultOfGame(pSelect, cSelection);
    andTheWinnerIs(result);
    restarter();
  }, 1500);
}

pSelections.forEach((btn) => {
  btn.addEventListener("click", rps);
});
