export function transposeMatrix(matrix: number[][]) {
  const height = matrix.length; // Number of rows in the original matrix
  const width = matrix[0].length; // Number of columns in the original matrix

  // Initialize a transposed matrix with `width` rows, each being an empty array.
  const transposed = new Array(width).fill(null).map((_) => new Array());

  // Fill the transposed matrix by swapping rows and columns
  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      transposed[col][row] = matrix[row][col]; // Assign the transposed value
    }
  }
  return transposed; // Return the transposed matrix
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
];

console.log(transposeMatrix(matrix));
