let user1Score = 0;
let user2Score = 0;
let turnCounter = 0;
const turnDesc = document.getElementById('userNamesTurn');
const user1Score_span = document.getElementById('user1-score');
const user2Score_span = document.getElementById('user2-score');
const user1_addpoint = document.getElementById('user1-addpoint');
const user2_addpoint = document.getElementById('user2-addpoint');

function user1AddPoint() {
    user1Score++;
    user1Score_span.innerHTML = user1Score;
    turnCheck();
}

function user2AddPoint() {
    user2Score++;
    user2Score_span.innerHTML = user2Score;
    turnCheck();
}

function isOdd(n) {
    return n % 2 == 1;
}

function turnCheck() {
    const z = (user1Score + user2Score) % 4;
    if (z == 2) {
        turnDesc.innerHTML = "User2";
    } else if (z == 1) {
        turnDesc.innerHTML = "User1";
    } else if (z == 0) {
        turnDesc.innerHTML = "User1"
    } else if (z == 3) {
        turnDesc.innerHTML = "User2"
    }
}