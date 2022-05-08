import { isRotatedSubstring } from './exercise-1.8'
describe('Exercise 1.8', () => {
    it.each([
        [false, null, 'abc'],
        [false, 'abc', null],
    ])('should return %p in case of first string is %p and second string is %p', (expected, first, second) => {
        expect(isRotatedSubstring(first, second)).toEqual(expected)
    })

    it.each([
        [false, 'abc', 'abcd'],
        [false, 'abcd', 'gt'],
    ])('should return %p in case of first string is %p and second string is %p (different lenght)', (expected, first, second) => {
        expect(isRotatedSubstring(first, second)).toEqual(expected)
    })

    it('should return true in case of “waterbottle” and “erbottlewat”', () => {
        expect(isRotatedSubstring('waterbottle', 'erbottlewat')).toBeTruthy()
    })
})