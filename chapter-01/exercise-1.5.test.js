import { replaceBlankSpace } from './exercise-1.5'
describe('Exercise 1.5', () => {
    it('should return the unchanged input string in case of null', () => {
        expect(replaceBlankSpace(null)).toEqual(null)
    })

    it('should return the unchanged input string in case of empty', () => {
        expect(replaceBlankSpace('')).toEqual('')
    })

    it.each([
        ['Noblankspace', 'Noblankspace'],
        ['This%20is%20a%20test', 'This is a test'],
    ])('should return %p in case of %p', (expected, value) => {
        expect(replaceBlankSpace(value.split(''))).toEqual(expected.split(''))
    })
})