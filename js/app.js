let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const scissors_div = document.getElementById("s");
const paper_div = document.getElementById("p");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if(letter === "r") return "Rock";
    if(letter === "s") return "Scissors";
    if(letter === "p") return "Paper";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    console.log("win");
    const smallUserWorld = "user".fontsize(2).sup();
    const smallCompWorld = "comp".fontsize(2).sup();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWorld} beats ${convertToWord(computerChoice)}${smallCompWorld}. You win!`;
}

function lose(userChoice, computerChoice) {
    console.log("lose");
    computerScore++;
    const smallUserWorld = "user".fontsize(2).sup();
    const smallCompWorld = "comp".fontsize(2).sup();
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(computerChoice)}${smallUserWorld} loses to ${convertToWord(userChoice)}${smallCompWorld}. You lost...`;
}

function draw(userChoice, computerChoice) {
    console.log("Draw");
    const smallUserWorld = "user".fontsize(2).sup();
    const smallCompWorld = "comp".fontsize(2).sup();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWorld} and  ${convertToWord(computerChoice)}${smallCompWorld}. Draw, nobody win!`;
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
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

