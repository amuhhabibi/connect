let user1Score = 0;
let user2Score = 0;
let turnCounter = 0;
const user1Name = document.getElementById('user1-label');
const user2Name = document.getElementById('user2-label');
const turnDesc = document.getElementById('userNamesTurn');
const user1Score_span = document.getElementById('user1-score');
const user2Score_span = document.getElementById('user2-score');
const user1_addpoint = document.getElementById('user1-addpoint');
const user2_addpoint = document.getElementById('user2-addpoint');

function user1AddPoint() {
    user1Score++;
    user1Score_span.innerHTML = user1Score;
    turnCheck();
    setName()
}

function user2AddPoint() {
    user2Score++;
    user2Score_span.innerHTML = user2Score;
    turnCheck();
    setName()
}

function turnCheck() {
    const z = (user1Score + user2Score) % 4;
    if (z == 2 || z == 3) {
        turnDesc.innerHTML = user2Name.value;
    } else if (z == 1 || z == 0) {
        turnDesc.innerHTML = user1Name.value;
    }
}

function loadName() {
    if (localStorage.user1Name_local) {
        user1Name.value = localStorage.user1Name_local;
    } else {
        localStorage.user1Name_local = 'p1';
    }
    if (localStorage.user2Name_local) {
        user2Name.value = localStorage.user2Name_local;
    } else {
        localStorage.user2Name_local = 'p2';
    }
}

function setName() {
    localStorage.user1Name_local = user1Name.value;
    localStorage.user2Name_local = user2Name.value;
}

function setNameOnLoad() {
    turnDesc.innerHTML = user1Name.value;
}

loadName();
setNameOnLoad();