
export const replaceBlankSpace = (url) => {
    if (!url || url.length === 0) return url
    const urlLength = url.length - 1
    let numOfBlankSpace = 0
    for (let i = 0; i < url.length; i++) {
        if (url[i] === ' ')
            numOfBlankSpace++
    }

    const newUrlLength = urlLength + 2 * numOfBlankSpace
    for (let i = urlLength, j = newUrlLength; i >= 0 && j > i; i--, j--) {
        if (url[i] === ' ') {
            url[j] = '0'
            url[--j] = '2'
            url[--j] = '%'
        } else {
            url[j] = url[i]
        }
    }

    return url
}
