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

Piece.prototype.fill = function(colour) {
	for(let i = 0; i < this.activePattern.length; i++) {
		for(let j = 0; j < this.activePattern.length; j++) {
			if(this.activePattern[i][j]) {
				drawSquare(this.x + j, this.y + i, colour);
			}
		}	
	}
}

Piece.prototype.draw = function() {
	this.fill(this.colour);
}

Piece.prototype.unDraw = function() {
	this.fill(VACANT);
}

Piece.prototype.moveDown = function() {
	if(this.detectCollision(0, 1, this.activePattern)) {
		this.unDraw();
		this.y++;
		this.draw();
	}
	else {

	}
}

Piece.prototype.moveLeft = function() {
	if(this.detectCollision(-1, 0, this.activePattern)) {
		this.unDraw();
		this.x--;
		this.draw();
	}
	else {

	}
}

Piece.prototype.moveRight = function() {
	if(this.detectCollision(1, 0, this.activePattern)) {
		this.unDraw();
		this.x++;
		this.draw();
	}
	else {

	}
}

Piece.prototype.rotate = function() {
	this.unDraw();
	this.startPattern = (this.startPattern + 1)%this.tetronimo.length;
	this.activePattern = this.tetronimo[this.startPattern];
	this.draw();
}

Piece.prototype.detectCollision = function(x, y, piece) {
	for(let i = 0; i < piece.length; i++) {
		for(let j = 0; j < piece.length; j++) {
			if(!peice[i][j]) {
				continue;
			}

			let newX = this.x + j + x;
			let newY = this.y + i + y;

			if(newX < 0 || newX > ROW || newY > COLUMN) {
				return true;
			}

			if(newY < 0) {
				continue;
			}

			if(board[newX][newY] != VACANT) {
				return true;
			}
		}
	}

	return false;
}

document.addEventListener('keydown', handleKeyDown);

function handleKeyDown(event) {
	switch(event.keyCode) {
		case 37:
			piece.moveLeft();
			break;
		case 38:
			peice.rotate();
			break;
		case 39:
			piece.moveRight();
			break;
		case 40:
			peice.moveDown();
			break;
		default:
			alert('Wrong key');
	}
}

