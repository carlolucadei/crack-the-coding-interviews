export const stringHasUniqueChars = (sentence) => {
    if (!sentence || sentence.length === 0)
        return false
    const chars = sentence.split('').sort()
    for (let nextCharIndex = 1; nextCharIndex < chars.length; nextCharIndex++)
        if (chars[nextCharIndex] === chars[nextCharIndex - 1])
            return false
    return true
}
