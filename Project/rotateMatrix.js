function rotateMatrix(mat) {
	let m = mat.length;
	let n = mat[0].length;
	let prev, curr;
	let row = 0, col = n-1;
	let newMatrix = [new Array(3).fill(0), new Array(3).fill(0), new Array(3).fill(0)];

	while(col >= 0) {
		for(let i = 0; i < m; i++) {
			newMatrix[i][col] = mat[row][i];
		}
		
		col--, row++;
	}	

	return newMatrix;
}

let mat = [
	[1, 1, 0],
	[0, 1, 1],
	[0, 0, 0]
];
mat = rotateMatrix(mat);
mat = rotateMatrix(mat);

console.log(" ");
for(let i = 0; i < mat.length; i++) {
	console.log(mat[i]);
}