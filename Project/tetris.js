const canvas = document.getElementById('tetris');
const ctx = canvas.getContext('2d');

const ROW = 20;
const COLUMN = 10;
const VACANT = "white";
const SQ = 20;
let board = [];

function drawSquare(x, y, colour) {
	ctx.fillStyle = colour;
	ctx.fillRect(x*SQ, y*SQ, SQ, SQ);
	ctx.strokeStyle = "black";
	ctx.strokeRect(x*SQ, y*SQ, SQ, SQ);
}

for(let i = 0; i < ROW; i++) {
	board[i] = [];
	for(let j = 0; j < COLUMN; j++) {
		board[i][j] = VACANT;
	}
}

function drawBoard() {
	for(let i = 0; i < ROW; i++) {
		for(let j = 0; j < COLUMN; j++) {
			drawSquare(j, i, board[i][j]);
		}
	}
}

drawBoard();