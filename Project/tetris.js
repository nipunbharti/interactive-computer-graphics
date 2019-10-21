const canvas = document.getElementById('tetris');
const ctx = canvas.getContext('2d');

const ROW = 20;
const COLUMN = 10;
const VACANT = "white";
const SQ = 30;
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

const pieces = [
	[Z, "green"],
	[S, "red"],
	[J, "blue"],
	[T, "yellow"],
	[I, "orange"],
	[O, "pink"]
];

function drawTetronimo(piece, colour) {
	for(let i = 0; i < piece.length; i++) {
		for(let j = 0; j < piece[0].length; j++) {
			if(piece[i][j]) {
				drawSquare(j, i, colour)
			}
		}
	}
}

drawTetronimo(pieces[0][0][3], pieces[0][1])

function Piece(tetronimo, colour) {
	this.tetronimo = tetronimo;
	this.startPattern = 0;
	this.activePattern = this.tetronimo[this.startPattern];
	this.colour = colour;
	this.x = 3;
	this.y = -2;
}