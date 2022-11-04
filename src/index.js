const mainGame = document.querySelector('.main-game');
const instructions = document.querySelector('.instructions');
const selecOptions = document.querySelector('.select-options');
const playButton = document.querySelector('.play-button');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');
const button5 = document.getElementById('button5');
const button6 = document.getElementById('button6');
const button7 = document.getElementById('button7');
const button8 = document.getElementById('button8');
const button9 = document.getElementById('button9');
const playerCount = document.getElementById("player-count");
const cpuCount = document.getElementById("cpu-count");

let playerOption;
let cpuOption; 
let positionsCollection = [];
let playerGrids = [];
let cpuGrids = [];
let playerScore = 0;
let cpuScore = 0;
let victory = false;

const playerSelect = (option) => {
    playerOption = option;
    alert(`Has selected ${playerOption}`);
    playButton.style.display = 'block';
    cpuSelect();
}

const cpuSelect = () => {
    if (playerOption == 'X') {
        cpuOption = 'O';
    } else {
        cpuOption = 'X';
    }
}

const firstPlayer = () => {
    mainGame.style.display = 'flex';
    instructions.style.display = 'none';
    selecOptions.style.display = 'none';
    let random = Math.floor(Math.random() * (3 - 1) + 1);
    if (random == 1) {
        alert('The player play first');
    } else {
        alert('The CPU play first');
        playEnemy();
    }
}

const play = (number) => {
    positionsCollection.push(number);
    playerGrids.push(number);
    switch(number) {
        case 1:
            if (playerOption == 'X') {
                button1.innerHTML = `<img src="./assets/cross.svg" alt="">`;
                button1.disabled = true;
            } else {
                button1.innerHTML = `<img src="./assets/circle.svg" alt="">`
                button1.disabled = true;
            }
            break;
        case 2:
            if (playerOption == 'X') {
                button2.innerHTML = `<img src="./assets/cross.svg" alt="">`;
                button2.disabled = true;
            } else {
                button2.innerHTML = `<img src="./assets/circle.svg" alt="">`;
                button2.disabled = true;
            }
            break;
        case 3:
            if (playerOption == 'X') {
                button3.innerHTML = `<img src="./assets/cross.svg" alt="">`;
                button3.disabled = true;
            } else {
                button3.innerHTML = `<img src="./assets/circle.svg" alt="">`;
                button3.disabled = true;
            }
            break;
        case 4:
            if (playerOption == 'X') {
                button4.innerHTML = `<img src="./assets/cross.svg" alt="">`;
                button4.disabled = true;
            } else {
                button4.innerHTML = `<img src="./assets/circle.svg" alt="">`;
                button4.disabled = true;
            }
            break;
        case 5:
            if (playerOption == 'X') {
                button5.innerHTML = `<img src="./assets/cross.svg" alt="">`;
                button5.disabled = true;
            } else {
                button5.innerHTML = `<img src="./assets/circle.svg" alt="">`;
                button5.disabled = true;
            }
            break;
        case 6:
            if (playerOption == 'X') {
                button6.innerHTML = `<img src="./assets/cross.svg" alt="">`;
                button6.disabled = true;
            } else {
                button6.innerHTML = `<img src="./assets/circle.svg" alt="">`
                button6.disabled = true;
            }
            break;
        case 7:
            if (playerOption == 'X') {
                button7.innerHTML = `<img src="./assets/cross.svg" alt="">`;
                button7.disabled = true;
            } else {
                button7.innerHTML = `<img src="./assets/circle.svg" alt="">`;
                button7.disabled = true;
            }
            break;
        case 8:
            if (playerOption == 'X') {
                button8.innerHTML = `<img src="./assets/cross.svg" alt="">`;
                button8.disabled = true;
            } else {
                button8.innerHTML = `<img src="./assets/circle.svg" alt="">`;
                button8.disabled = true;
            }
            break;
        case 9:
            if (playerOption == 'X') {
                button9.innerHTML = `<img src="./assets/cross.svg" alt="">`;
                button9.disabled = true;
            } else {
                button9.innerHTML = `<img src="./assets/circle.svg" alt="">`;
                button9.disabled = true;
            }
            break;
    }
    conditionWin();
    if (victory === false) {
        playEnemy();
    }
}

const playEnemy = () => {
    let condition = true;
    do {
        let random = Math.floor(Math.random() * (10 - 1) + 1);
        condition = positionsCollection.some(element => element == random);
        if (condition === false) {
            positionsCollection.push(random);
            cpuGrids.push(random);
            switch(random) {
                case 1:
                    if (cpuOption == 'X') {
                        button1.innerHTML = `<img src="./assets/cross.svg" alt="">`;
                        button1.disabled = true;
                    } else {
                        button1.innerHTML = `<img src="./assets/circle.svg" alt="">`
                        button1.disabled = true;
                    }
                    break;
                case 2:
                    if (cpuOption == 'X') {
                        button2.innerHTML = `<img src="./assets/cross.svg" alt="">`;
                        button2.disabled = true;
                    } else {
                        button2.innerHTML = `<img src="./assets/circle.svg" alt="">`;
                        button2.disabled = true;
                    }
                    break;
                case 3:
                    if (cpuOption == 'X') {
                        button3.innerHTML = `<img src="./assets/cross.svg" alt="">`;
                        button3.disabled = true;
                    } else {
                        button3.innerHTML = `<img src="./assets/circle.svg" alt="">`;
                        button3.disabled = true;
                    }
                    break;
                case 4:
                    if (cpuOption == 'X') {
                        button4.innerHTML = `<img src="./assets/cross.svg" alt="">`;
                        button4.disabled = true;
                    } else {
                        button4.innerHTML = `<img src="./assets/circle.svg" alt="">`;
                        button4.disabled = true;
                    }
                    break;
                case 5:
                    if (cpuOption == 'X') {
                        button5.innerHTML = `<img src="./assets/cross.svg" alt="">`;
                        button5.disabled = true;
                    } else {
                        button5.innerHTML = `<img src="./assets/circle.svg" alt="">`;
                        button5.disabled = true;
                    }
                    break;
                case 6:
                    if (cpuOption == 'X') {
                        button6.innerHTML = `<img src="./assets/cross.svg" alt="">`;
                        button6.disabled = true;
                    } else {
                        button6.innerHTML = `<img src="./assets/circle.svg" alt="">`
                        button6.disabled = true;
                    }
                    break;
                case 7:
                    if (cpuOption == 'X') {
                        button7.innerHTML = `<img src="./assets/cross.svg" alt="">`;
                        button7.disabled = true;
                    } else {
                        button7.innerHTML = `<img src="./assets/circle.svg" alt="">`;
                        button7.disabled = true;
                    }
                    break;
                case 8:
                    if (cpuOption == 'X') {
                        button8.innerHTML = `<img src="./assets/cross.svg" alt="">`;
                        button8.disabled = true;
                    } else {
                        button8.innerHTML = `<img src="./assets/circle.svg" alt="">`;
                        button8.disabled = true;
                    }
                    break;
                case 9:
                    if (cpuOption == 'X') {
                        button9.innerHTML = `<img src="./assets/cross.svg" alt="">`;
                        button9.disabled = true;
                    } else {
                        button9.innerHTML = `<img src="./assets/circle.svg" alt="">`;
                        button9.disabled = true;
                    }
                    break;
            }
        }
    } while (condition === true)
    console.log(positionsCollection);
    conditionWin();
}

const conditionWin = () => {
    if((playerGrids.includes(1) === true && playerGrids.includes(2) === true && playerGrids.includes(3) === true) || (playerGrids.includes(1) === true && playerGrids.includes(4) === true && playerGrids.includes(7) === true) || (playerGrids.includes(3) === true && playerGrids.includes(6) === true && playerGrids.includes(9) === true) || (playerGrids.includes(7) === true && playerGrids.includes(8) === true && playerGrids.includes(9) === true) || (playerGrids.includes(1) === true && playerGrids.includes(5) === true && playerGrids.includes(9) === true) || (playerGrids.includes(4) === true && playerGrids.includes(5) === true && playerGrids.includes(6) === true) || (playerGrids.includes(3) === true && playerGrids.includes(5) === true && playerGrids.includes(7) === true) || (playerGrids.includes(2) === true && playerGrids.includes(5) === true && playerGrids.includes(8) === true)) {
        alert('Has ganado');
        playerScore += 1;
        playerCount.textContent = `${playerScore}`;
        victory = true;
        resetGame();
    } else if((cpuGrids.includes(1) === true && cpuGrids.includes(2) === true && cpuGrids.includes(3) === true) || (cpuGrids.includes(1) === true && cpuGrids.includes(4) === true && cpuGrids.includes(7) === true) || (cpuGrids.includes(3) === true && cpuGrids.includes(6) === true && cpuGrids.includes(9) === true) || (cpuGrids.includes(7) === true && cpuGrids.includes(8) === true && cpuGrids.includes(9) === true) || (cpuGrids.includes(1) === true && cpuGrids.includes(5) === true && cpuGrids.includes(9) === true) || (cpuGrids.includes(4) === true && cpuGrids.includes(5) === true && cpuGrids.includes(6) === true) || (cpuGrids.includes(3) === true && cpuGrids.includes(5) === true && cpuGrids.includes(7) === true) || (cpuGrids.includes(2) === true && cpuGrids.includes(5) === true && cpuGrids.includes(8) === true)) {
        alert('Has perdido');
        cpuScore += 1;
        cpuCount.textContent = `${cpuScore}`;
        resetGame();
    } 
    if(positionsCollection.length === 9) {
        alert('Empate');
        resetGame();
    }
}

const resetGame = () => {
    while (positionsCollection.length > 0 ) {
        positionsCollection.pop();
    }
    while (playerGrids.length > 0) {
        playerGrids.pop();
    }
    while (cpuGrids.length > 0) {
        cpuGrids.pop();
    }
}

const restartGame = () => {
    button1.innerHTML = ``;
    button1.disabled = false;
    button2.innerHTML = ``;
    button2.disabled = false;
    button3.innerHTML = ``;
    button3.disabled = false;
    button4.innerHTML = ``;
    button4.disabled = false;
    button5.innerHTML = ``;
    button5.disabled = false;
    button6.innerHTML = ``;
    button6.disabled = false;
    button7.innerHTML = ``;
    button7.disabled = false;
    button8.innerHTML = ``;
    button8.disabled = false;
    button9.innerHTML = ``;
    button9.disabled = false;
    victory = false;
    firstPlayer();
}

const restartAll = () => {
    location.reload();
}