
export const stringReverse = (sentence) => {
    if (!sentence) return sentence
    let startIndex = 0
    let endIndex = sentence.length - 1
    let reversed = sentence.split('')
    while(startIndex < endIndex) {
        const startSwap = reversed[startIndex]
        reversed[startIndex] = reversed[endIndex]
        reversed[endIndex] = startSwap
        startIndex++
        endIndex--
    }
    return reversed.join('')
}
