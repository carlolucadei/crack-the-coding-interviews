export const resetRowAndColumn = (matrix, rows, cols) => {
    let rowsWith0 = new Array(rows).fill(false)
    let columnsWith0 = new Array(cols).fill(false)
    for (let i = 0; i < rows; i++)
        for (let j = 0; j < cols; j++)
            if (matrix[i][j] === 0)
                rowsWith0[i] = columnsWith0[j] = true

    for (let i = 0; i < rows; i++)
        for (let j = 0; j < cols; j++)
            if (rowsWith0[i] || columnsWith0[j])
                matrix[i][j] = 0
    return matrix
}