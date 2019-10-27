const canvas = document.getElementById('tetris');
const ctx = canvas.getContext('2d');

const ROW = 20;
const COLUMN = 10;
const VACANT = "white";
const SQ = 30;
let board = [];
let score = 0;

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

// Draw board by drawing squares
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
	[T, "indigo"],
	[I, "orange"],
	[O, "coral"]
];

// Draw the tettronimo
function drawTetronimo(piece, colour) {
	for(let i = 0; i < piece.length; i++) {
		for(let j = 0; j < piece[0].length; j++) {
			if(piece[i][j]) {
				drawSquare(j, i, colour)
			}
		}
	}
}

// Generate a random piece
function generateRandomPiece() {
	let randomNumber = Math.floor(Math.random()*pieces.length);
	return new Piece(pieces[randomNumber][0], pieces[randomNumber][1]);
}

// Create a new piece
let newP = generateRandomPiece();

// Piece constructor
function Piece(tetronimo, colour) {
	this.tetronimo = tetronimo;
	this.startPattern = 0;
	this.activePattern = this.tetronimo[this.startPattern];
	this.colour = colour;
	this.x = 3;
	this.y = -2;
}

const scoreElement = document.getElementById('score');


// Draw the piece
Piece.prototype.fill = function(colour) {
	for(let i = 0; i < this.activePattern.length; i++) {
		for(let j = 0; j < this.activePattern.length; j++) {
			if(this.activePattern[i][j]) {
				drawSquare(this.x + j, this.y + i, colour);
			}
		}	
	}
}

// Draw square with the colour of tetronimo
Piece.prototype.draw = function() {
	this.fill(this.colour);
}

// Draw square with white colour
Piece.prototype.unDraw = function() {
	this.fill(VACANT);
}


// Check collision and then move down, else lock piece and create a new piece also
Piece.prototype.moveDown = function() {
	if(!this.detectCollision(0, 1, this.activePattern)) {
		this.unDraw();
		this.y++;
		this.draw();
	}
	else {
		this.lockPiece();
		newP = generateRandomPiece();
	}
}


// Decrement the "x" position
Piece.prototype.moveLeft = function() {
	if(!this.detectCollision(-1, 0, this.activePattern)) {
		this.unDraw();
		this.x--;
		this.draw();
	}
}


// Increment the "x" position
Piece.prototype.moveRight = function() {
	if(!this.detectCollision(1, 0, this.activePattern)) {
		this.unDraw();
		this.x++;
		this.draw();
	}
}

// Generate the next pattern, if it collides with the wall then push it from the wall
Piece.prototype.rotate = function() {
	let nextPattern = this.tetronimo[(this.startPattern + 1)%this.tetronimo.length];
	let wallKick = 0;

	if(this.detectCollision(0, 0, nextPattern)) {
		this.x > COLUMN/2 ? wallKick = -1 : wallKick = 1;
	}

	if(!this.detectCollision(wallKick, 0, nextPattern)) {
		this.unDraw();
		this.x += wallKick;
		this.startPattern = (this.startPattern + 1)%this.tetronimo.length;
		this.activePattern = this.tetronimo[this.startPattern];
		this.draw();
	}
}

// Detect a collision, check boundaries and then the board value
Piece.prototype.detectCollision = function(x, y, piece) {
	for(let i = 0; i < piece.length; i++) {
		for(let j = 0; j < piece.length; j++) {
			if(!piece[i][j]) {
				continue;
			}

			let newX = this.x + j + x;
			let newY = this.y + i + y;

			if(newX < 0 || newX >= COLUMN || newY >= ROW) {
				return true;
			}

			if(newY < 0) {
				continue;
			}

			if(board[newY][newX] != VACANT) {
				return true;
			}
		}
	}

	return false;
}

// Lock the piece by filling the board with the colour of the piece and also clear the row if the whole row is coloured
Piece.prototype.lockPiece = function() {
	for(let i = 0; i < this.activePattern.length; i++) {
		for(let j = 0; j < this.activePattern.length; j++) {
			if(!this.activePattern[i][j]) {
				continue;
			}
			if(this.y + i < 0) {
				alert('Game Over!');
				gameOver = true;
				break;
			}

			board[this.y + i][this.x + j] = this.colour;
		}
	}

	for(let i = 0; i < ROW; i++) {
		let isRowFull = true;

		for(let j = 0; j < COLUMN; j++) {
			isRowFull = isRowFull && (board[i][j] != VACANT);
		}

		if(isRowFull) {
			for(let k = i; k > 1; k--) {
				for(let j = 0; j < COLUMN; j++) {
					board[k][j] = board[k-1][j];
				}
			}

			for(let j = 0; j < COLUMN; j++) {
				board[0][j] = VACANT;
			}

			score += 10;
		}
	}

	drawBoard();
	scoreElement.innerHTML = score;
}

document.addEventListener('keydown', handleKeyDown);


// Handler for left, right, down and rotate
function handleKeyDown(event) {
	switch(event.keyCode) {
		case 37:
			newP.moveLeft();
			dropStartTime = Date.now();
			break;
		case 38:
			newP.rotate();
			dropStartTime = Date.now();
			break;
		case 39:
			newP.moveRight();
			dropStartTime = Date.now();
			break;
		case 40:
			newP.moveDown();
			dropStartTime = Date.now();
			break;
	}
}

let dropStartTime = Date.now();
let gameOver = false;

// Drop a piece every 1000ms
function dropPiece() {
	// console.log(newP);
	let now = Date.now();
	let delta = now - dropStartTime;
	if(delta > 1000) {
		newP.moveDown();
		dropStartTime = Date.now();
	}
	if(!gameOver) {
		requestAnimationFrame(dropPiece);
	}
}

dropPiece();