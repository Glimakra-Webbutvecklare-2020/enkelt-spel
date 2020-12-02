const pSelections = document.querySelectorAll('.player');
const cSelections = document.querySelectorAll('.computer');
const anim = document.querySelector('#anim');
let pSelect = undefined;
let cSelection = undefined;
let game = true;
let wincounterPlayer = 0;
let wincounterComputer = 0;

function cGuess(cSelections) {
    resetSelections(cSelections);
    const cRandom = Math.floor(Math.random() * cSelections.length);
    const cSelected = cSelections[cRandom];
    cSelected.classList.add('selected');
    return cSelected;
}
function selected(e) {
    resetSelections(pSelections);
    e.target.classList.add('selected');
    return e.target;
}
function resetSelections(selections) {
    selections.forEach((selection) => {
        if (selection.classList.contains('selected')) {
            selection.classList.remove('selected');
        }
        if (selection.classList.contains('win')) {
            selection.classList.remove('win');
        }
        if (selection.classList.contains('lost')) {
            selection.classList.remove('lost');
        }
        if (selection.classList.contains('draw')) {
            selection.classList.remove('draw');
        }
    });
}
function resultOfGame(pSelect, cSelection) {
    const pOpt = pSelect.classList[0];
    const cOpt = cSelection.classList[0];
    let result = 'lose';
    if (pOpt === cOpt) {
        result = 'draw';
    } else {
        if (pOpt === 'rock') {
            if (cOpt === 'scissors') {
                result = 'win';
            }
        } else if (pOpt === 'paper') {
            if (cOpt === 'rock') {
                result = 'win';
            }
        } else if (pOpt === 'scissors') {
            if (cOpt === 'paper') {
                result = 'win';
            }
        }
    }
    return result;
}
function andTheWinnerIs(result) {
    if (result === 'win') {
        anim.textContent = 'Winner';
        pSelect.classList.add('win');
        cSelection.classList.add('lost');
    } else if (result === 'draw') {
        anim.textContent = 'Draw!';
        pSelect.classList.add('draw');
        cSelection.classList.add('draw');
    } else {
        anim.textContent = 'Loser';
        pSelect.classList.add('lost');
        cSelection.classList.add('win');
    }
}
function fullClear() {
    anim.textContent = ' ';
    resetSelections(pSelections);
    resetSelections(cSelections);
}

function rps(e) {
    fullClear();
    pSelect = selected(e);
    setTimeout(() => {
        cSelection = cGuess(cSelections);
        const result = resultOfGame(pSelect, cSelection);
        andTheWinnerIs(result);
    }, 1500);
}

pSelections.forEach((btn) => {
    btn.addEventListener('click', rps);
});
