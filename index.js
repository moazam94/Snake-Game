//console.log('working')

const canvas = document.getElementById('game');
const context = canvas.getContext('2d');

let speed = 7;

let tileCount = 30;
let tileSize = canvas.width / tileCount -5;
let headA = 15;
let headB = 15;

//game loop
function drawGame() {
    clearScreen();
    drawSnake();
    setTimeout(drawGame, 1000/ speed);
}

function clearScreen() {
    context.fillStyle = 'black';
    context.fillRect(0,0,canvas.width,canvas.height)
}

function drawSnake() {
    context.fillStyle = 'orange'
    context.fillRect(headA * tileCount, headA * tileCount, tileSize, tileSize)
}

drawGame();