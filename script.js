/*const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");

const start_btn = document.getElementById("start").style.visibility = "hidden";
const rock_btn = document.getElementById("rock").style.visibility = "visible";
const paper_btn = document.getElementById("paper").style.visibility = "visible";
const scissors_btn = document.getElementById("scissors").style.visibility = "visible";
*/
function start() {
    document.getElementById("start").style.visibility = "hidden";
    document.getElementById("rock").style.visibility = "visible";
    document.getElementById("paper").style.visibility = "visible";
    document.getElementById("scissors").style.visibility = "visible";
}
LeftHand = ["<img src=Images/Rock-User.png id=img1>","<img src=Images/Paper-User.png id=img1>",
"<img src=Images/Scissors-User.png id=img1>"];

RightHand = ["<img src=Images/Rock.png id=img2>","<img src=Images/Paper.png id=img2>",
"<img src=Images/Scissors.png id=img2>"];

/*start_btn.addEventListener('click', function() {
    console.log("Let us start the game");
})
rock_btn.addEventListener('click', function() {
    console.log("hey you clicked Rock");
})*/

function game(position){
    document.getElementById("img1").style.animation = 'shakeLeft 1s 5 ease-in-out';
    document.getElementById("img2").style.animation = 'shakeRight 1s 5 ease-in-out';

    var random = Math.floor(Math.random()*3);
    setTimeout(() => {
        document.getElementById("hand2").innerHTML = RightHand[random];
        document.getElementById("hand1").innerHTML = LeftHand[position];
    }, 4500);
    setTimeout(() => {
        if(random == position) {
            alert("MATCH DRAW !!");
            window.location.reload();
        } else if(position == 0 && random == 2) {
            alert("ROCK BREAKS SCISSORS, YOU WIN!!");
            window.location.reload();
        } else if(position == 1 && random == 0) {
            alert("PAPER COVERS ROCK, YOU WIN!!");
            window.location.reload();
        } else if(position == 2 && random == 1) {
            alert("SCISSORS CUTS PAPER, YOU WIN!!");
            window.location.reload();
        } else {
            alert("COMPUTER IS THE WINNER, TRY NEXT TIME!!");
            window.location.reload();
        }
    }, 5000);
}