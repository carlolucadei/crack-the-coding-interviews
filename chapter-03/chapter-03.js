
export const removeDuplicatesFromString = (sentence) => {
    if (!sentence) return sentence
    let sentenceArray = sentence.split('')
    let startIndex = 0
    while (startIndex < sentenceArray.length - 1) {
        let nextIndex = startIndex + 1
        while (nextIndex < sentenceArray.length) {
            if (sentenceArray[nextIndex] === sentenceArray[startIndex]) {
                sentenceArray.splice(nextIndex, 1)
            } else {
                nextIndex++
            }
        }
        startIndex++
    }
    return sentenceArray.join('')
}
