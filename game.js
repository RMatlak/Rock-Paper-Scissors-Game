

const gameChoice = {
    playerHand: "",
    aiHand: "",
};

const gameResults = {
    games: 0,
    wins: 0,
    losses: 0,
    draws: 0,
};

const images = [...document.querySelectorAll('.select img')];



function handSelection() {
    gameChoice.playerHand = this.dataset.option;
    images.forEach(image => image.style.boxShadow = "");
    this.style.boxShadow = "0 0 0 4px yellow";
};

function aiChoice() {
    const index = Math.floor(Math.random() * images.length);
    gameChoice.aiHand = images[index].dataset.option;
};

function whoWin(player, ai, result) {
    if (player === ai) {
        document.querySelector('[data-summary="who-win"]').textContent = "Remis";
        document.querySelector('[data-summary="who-win"]').style.color = "orange";
        document.querySelector('.draws span').textContent = ++gameResults.draws;
    } else if ((player === "papier" && ai === "kamień") || (player === "nożyczki" && ai === "papier") || (player === "kamień" && ai === "nożyczki")) {
        document.querySelector('[data-summary="who-win"]').textContent = "Wygrałeś!";
        document.querySelector('[data-summary="who-win"]').style.color = "green";
        document.querySelector('.wins span').textContent = ++gameResults.wins;
    } else {
        document.querySelector('[data-summary="who-win"]').textContent = "Przegrałeś";
        document.querySelector('[data-summary="who-win"]').style.color = "red";
        document.querySelector('.losses span').textContent = ++gameResults.losses;
    }

    document.querySelector('[data-summary="your-choice"]').textContent = player;
    document.querySelector('[data-summary="ai-choice"]').textContent = ai;
    document.querySelector('.numbers span').textContent = ++gameResults.games;

};


function gameReset(e) {
    document.querySelector(`[data-option=${gameChoice.playerHand}]`).style.boxShadow = "";
    gameChoice.playerHand = "";
    gameChoice.aiHand = "";
};



function start() {
    if (!gameChoice.playerHand) {
        alert('Wybierz dłoń!!');
        return;
    }
    aiChoice();
    whoWin(gameChoice.playerHand, gameChoice.aiHand);
    gameReset();
};


images.forEach(image => image.addEventListener('click', handSelection));
document.querySelector("button").addEventListener('click', start);