
export const areAnagrams = (firstSentence, secondSentence) => {
    const orderChars = (str) => str ? str.toLowerCase().split('').sort().join('').trim() : ''
    return orderChars(firstSentence) === orderChars(secondSentence)
}
