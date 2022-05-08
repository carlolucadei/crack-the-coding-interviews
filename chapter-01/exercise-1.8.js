export function isRotatedSubstring(sentence1, sentence2) {
    if (!sentence1 || !sentence2)
        return false
    if (sentence1.length !== sentence2.length)
        return false
    return isSubstring(sentence1 + sentence1, sentence2)
}

function isSubstring(str, substr) {
    return str.includes(substr);
}