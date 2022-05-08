export const rotateMatrixBy90DegreeClockWise = (matrix) => {
    const SIZE = matrix.length
    for (let step = 0; step < SIZE / 2; ++step) {
        let first = step
        let last = SIZE - 1 - step
        for (let i = first; i < last; ++i) {
            let offset = i - first
            let top = matrix[first][i]
            matrix[first][i] = matrix[last - offset][first]
            matrix[last - offset][first] = matrix[last][last - offset]
            matrix[last][last - offset] = matrix[i][last]
            matrix[i][last] = top
        }
    }
    return matrix
}