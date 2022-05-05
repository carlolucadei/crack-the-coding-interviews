export const stringHasUniqueChars = (sentence) => {
    if (!sentence || sentence.length === 0)
        return false
    let hasUniqueChars = true
    for (let prevCharIndex = 0; prevCharIndex < sentence.length - 1 && hasUniqueChars; prevCharIndex++)
        for (let nextCharIndex = prevCharIndex + 1; nextCharIndex < sentence.length && hasUniqueChars; nextCharIndex++)
            if (sentence[prevCharIndex] === sentence[nextCharIndex])
                hasUniqueChars = false
    return hasUniqueChars
}
