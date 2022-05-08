export const rotateMatrixBy90DegreeClockWise = (matrix) => {
    const SIZE = matrix.length
    let rotatedMatrix = new Array(SIZE).fill().map(() => new Array(SIZE).fill(''));
    for (let i = 0; i < SIZE; i++)
        for (let j = 0; j < SIZE; j++)
            rotatedMatrix[SIZE - 1 - j][i] = matrix[i][j]
    return rotatedMatrix
}
