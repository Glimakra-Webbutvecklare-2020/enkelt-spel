// function rockPaperScissors() {
//     console.clear;
//     console.groupCollapsed(`New game`);
//     let game = true;
//     while (game === true) {
//         ('use strict');
//         let cGuess = Math.random();
//         cGuess = cGuess * 3;
//         cGuess = Math.ceil(cGuess);
//         console.info(`The computer guessed ${cGuess}`);
//         let uGuessPromt = `Enter a number to choose rock, paper or scissors\n1: Rock\n2: Paper\n3: Scissors`;
//         let uGuess = prompt(`${uGuessPromt}`);
//         if (uGuess === null) {
//             break;
//         }
//         uGuess = parseInt(uGuess);
//         console.info(`You guessed ${uGuess}`);
//         if (cGuess === 1 && uGuess === 3) {
//             alert(`You win, paper covers rock`);
//             game = false;
//         } else if (cGuess === 2 && uGuess === 1) {
//             alert(`You win, rock crushes scissors`);
//             game = false;
//         } else if (cGuess === 3 && uGuess === 2) {
//             alert(`You win, scissors cuts paper`);
//             game = false;
//         } else if (uGuess === 1 && cGuess === 3) {
//             alert(`You loose, paper covers rock`);
//             game = false;
//         } else if (uGuess === 2 && cGuess === 1) {
//             alert(`You loose, rock crushes scissors`);
//             game = false;
//         } else if (uGuess === 3 && cGuess === 2) {
//             alert(`You loose, scissors cuts paper`);
//             game = false;
//         } else {
//             alert`Tie, try again`;
//             console.info(`Tie`);
//         }
//     }
//     console.groupEnd();
// }
// function rockPaperScissorsBO3() {
//     console.clear;
//     console.groupCollapsed(`New game`);
//     let game = true;
//     let wincounterPlayer = 0;
//     let wincounterComputer = 0;
//     let winner = ``;
//     while (game === true) {
//         ('use strict');
//         let cGuess = Math.random();
//         cGuess = cGuess * 3;
//         cGuess = Math.ceil(cGuess);
//         console.info(`The computer guessed ${cGuess}`);
//         let uGuessPromt = `Enter a number to choose rock, paper or scissors\n1: Rock\n2: Paper\n3: Scissors`;
//         let uGuess = prompt(`${uGuessPromt}`);
//         if (uGuess === null) {
//             break;
//         }
//         uGuess = parseInt(uGuess);
//         console.info(`You guessed ${uGuess}`);
//         if (cGuess === 1 && uGuess === 3) {
//             wincounterPlayer++;
//             alert(
//                 `You win, paper covers rock\nPlayer wins: ${wincounterPlayer}`,
//             );
//         } else if (cGuess === 2 && uGuess === 1) {
//             wincounterPlayer++;
//             alert(
//                 `You win, rock crushes scissors\nPlayer wins: ${wincounterPlayer}`,
//             );
//         } else if (cGuess === 3 && uGuess === 2) {
//             wincounterPlayer++;
//             alert(
//                 `You win, scissors cuts paper\nPlayer wins: ${wincounterPlayer}`,
//             );
//         } else if (uGuess === 1 && cGuess === 3) {
//             wincounterComputer++;
//             alert(
//                 `You loose, paper covers rock\nComputer wins:${wincounterComputer}`,
//             );
//         } else if (uGuess === 2 && cGuess === 1) {
//             wincounterComputer++;
//             alert(
//                 `You loose, rock crushes scissors\nComputer wins:${wincounterComputer}`,
//             );
//         } else if (uGuess === 3 && cGuess === 2) {
//             wincounterComputer++;
//             alert(
//                 `You loose, scissors cuts paper\nComputer wins:${wincounterComputer}`,
//             );
//         } else {
//             alert(
//                 `Tie, try again\nPlayer wins: ${wincounterPlayer}\nComputer wins:${wincounterComputer}`,
//             );
//             console.info(`Tie`);
//         }
//         if (wincounterPlayer === 3 || wincounterComputer === 3) {
//             game = false;
//             if (wincounterPlayer === 3) {
//                 winner = `Player`;
//             } else if (wincounterComputer === 3) {
//                 winner = `Computer`;
//             }
//             setTimeout(function () {
//                 alert(
//                     `${winner} wins the game.\nPlayer won ${wincounterPlayer} rounds\nComputer won ${wincounterComputer} rounds`,
//                 );
//             }, 1000);
//         }
//     }
//     console.groupEnd();
// }

function pokemonFight() {
    console.clear;
    console.groupCollapsed(`New game`);
    let player = {
        name: ``,
        xp: 0,
        lvl() {
            return Math.floor(this.xp / 3) + 1;
        },
        stats: {
            health: 0,
            attackPower: 0,
            defencePower: 0,
            healthInit() {
                this.health = player.lvl() * 10;
            },
            attackPowerInit() {
                this.attackPower = player.lvl() * 10;
            },
            defencePowerInit() {
                this.defencePower = player.lvl() * 10;
            },
            attack(target) {
                if (
                    this.attackPower > target.stats.defencePower &&
                    target.evade() === true
                ) {
                    target.stats.health -= this.attackPower;
                } else if (target.evade() === false) {
                    return 'Taget evaded';
                }
            },
            evade() {
                reply = false;
                if (this.defencePower > target.stats.defencePower) {
                    reply = true;
                }
                return reply;
            },
        },
    };
    let enemy = {
        name: ``,
        lvl: 1, // choose lvl to modify health, attack and defence
        stats: {
            health: 0,
            attackPower: 0,
            defencePower: 0,
            healthInit() {
                this.health = enemy.lvl * 6;
            },
            attackPowerInit() {
                this.attackPower = enemy.lvl * 6;
            },
            defencePowerInit() {
                this.defencePower = enemy.lvl * 6;
            },
        },
    };
    const players = [player];
    const enemys = [enemy];
    let game = true;
    while (game === true) {
        ('use strict');

        game = false;
    }
    console.groupEnd();
}
