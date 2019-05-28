const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const scissors_div = document.getElementById("s");
const paper_div = document.getElementById("p");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            console.log("USER WINS");
            break;
        case "sr":
        case "rp":
        case "ps":
            console.log("User Loses");
            break;
        case "rr":
        case "pp":
        case "ss":
            console.log("Its a draw");
            break;
    }
}

function main() {

    rock_div.addEventListener('click', function () {
        game("r");
    });

    scissors_div.addEventListener('click', function () {
        game("s");
    });

    paper_div.addEventListener('click', function () {
        game("p");
    });
}

main();

