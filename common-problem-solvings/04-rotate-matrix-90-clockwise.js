/**
 * Problem 04: Rotate a Matrix 90 Degrees Clockwise
 * ------------------------------------------------
 * Given a 2D matrix, rotate it 90 degrees clockwise in place.
 *
 * Example:
 *   Input:
 *     [1, 2, 3]
 *     [4, 5, 6]
 *     [7, 8, 9]
 *
 *   Output:
 *     [7, 4, 1]
 *     [8, 5, 2]
 *     [9, 6, 3]
 *
 * Insight: Rotating 90° clockwise = Transpose + Reverse each row
 */

// Approach 1: Transpose then reverse rows (in-place for square matrix)
// Time: O(n^2), Space: O(1)
function rotateMatrixInPlace(matrix) {
    const n = matrix.length;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }

    return matrix;
}

// Approach 2: Create a new rotated matrix (works for any m x n)
// Time: O(m*n), Space: O(m*n)
function rotateMatrixNew(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const rotated = Array.from({ length: cols }, () => new Array(rows));

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            rotated[j][rows - 1 - i] = matrix[i][j];
        }
    }
    return rotated;
}

// Approach 3: Layer-by-layer rotation (4-way swap)
// Time: O(n^2), Space: O(1)
function rotateMatrixLayers(matrix) {
    const n = matrix.length;
    for (let layer = 0; layer < Math.floor(n / 2); layer++) {
        const first = layer;
        const last = n - 1 - layer;

        for (let i = first; i < last; i++) {
            const offset = i - first;
            const top = matrix[first][i];

            matrix[first][i] = matrix[last - offset][first];
            matrix[last - offset][first] = matrix[last][last - offset];
            matrix[last][last - offset] = matrix[i][last];
            matrix[i][last] = top;
        }
    }
    return matrix;
}

const printMatrix = (m) => console.log(m.map((row) => row.join(" ")).join("\n"));

const m1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
printMatrix(rotateMatrixInPlace(m1));
console.log("---");

const m2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
printMatrix(rotateMatrixNew(m2));
console.log("---");

const m3 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
];
printMatrix(rotateMatrixLayers(m3));
