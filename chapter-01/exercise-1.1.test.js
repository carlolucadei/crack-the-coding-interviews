import { stringHasUniqueChars } from './exercise-1.1'
describe('Exercise 1.1', () => {

    it('should return false in case of a null string', () => {
        expect(stringHasUniqueChars()).toBe(false)
    })

    it('should return false in case of an empty string', () => {
        expect(stringHasUniqueChars('')).toBe(false)
    })

    it('should return true in case of one char', () => {
        expect(stringHasUniqueChars('a')).toBe(true)
    })

    it('should return true in case of more than two different chars', () => {
        expect(stringHasUniqueChars('abcdef')).toBe(true)
    })

    it('should return false in case of two same chars at the beginning', () => {
        expect(stringHasUniqueChars('aabcdef')).toBe(false)
    })

    it('should return false in case of two same chars at the boundaries', () => {
        expect(stringHasUniqueChars('abcdefa')).toBe(false)
    })

    it('should return false in case of two same chars in the end', () => {
        expect(stringHasUniqueChars('abcdefgg')).toBe(false)
    })

    it('should return false in case of two same chars in the middle', () => {
        expect(stringHasUniqueChars('abcddefg')).toBe(false)
    })
})