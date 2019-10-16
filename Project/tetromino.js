function rotateMatrix(mat) {
	let m = mat.length;
	let n = mat[0].length;
	let prev, curr;
	let row = 0, col = n-1;
	let newMatrix = (mat.length == 3) ? 
		[new Array(mat.length).fill(0), new Array(mat.length).fill(0), new Array(mat.length).fill(0)]
		: [new Array(mat.length).fill(0), new Array(mat.length).fill(0), new Array(mat.length).fill(0), new Array(mat.length).fill(0)];

	while(col >= 0) {
		for(let i = 0; i < m; i++) {
			newMatrix[i][col] = mat[row][i];
		}
		
		col--, row++;
	}	

	return newMatrix;
}

const ZBase = [
	[1, 1, 0],
	[0, 1, 1],
	[0, 0, 0]
];

const SBase = [
	[0, 1, 1],
	[1, 1, 0],
	[0, 0, 0]
];

const JBase = [
	[0, 1, 0],
	[0, 1, 0],
	[1, 1, 0]
];

const TBase = [
	[0, 0, 0],
	[1, 1, 1],
	[0, 1, 0]
];

const IBase = [
	[0, 1, 0, 0],
	[0, 1, 0, 0],
	[0, 1, 0, 0],
	[0, 1, 0, 0]
];

const O = [
	[0, 0, 0, 0],
	[0, 1, 1, 0],
	[0, 1, 1, 0],
	[0, 0, 0, 0]
];

const Z = [rotateMatrix(ZBase), rotateMatrix(rotateMatrix(ZBase)), rotateMatrix(rotateMatrix(rotateMatrix(ZBase))), ZBase];
const S = [rotateMatrix(SBase), rotateMatrix(rotateMatrix(SBase)), rotateMatrix(rotateMatrix(rotateMatrix(SBase))), SBase];
const J = [rotateMatrix(JBase), rotateMatrix(rotateMatrix(JBase)), rotateMatrix(rotateMatrix(rotateMatrix(JBase))), JBase];
const T = [rotateMatrix(TBase), rotateMatrix(rotateMatrix(TBase)), rotateMatrix(rotateMatrix(rotateMatrix(TBase))), TBase];
const I = [rotateMatrix(IBase), rotateMatrix(rotateMatrix(IBase)), rotateMatrix(rotateMatrix(rotateMatrix(IBase))), IBase];