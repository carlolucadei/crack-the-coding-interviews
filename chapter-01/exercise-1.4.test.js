import { areAnagrams } from './exercise-1.4'
describe('Exercise 1.4', () => {
    it.each([
        [null, null, true],
        ['', '', true],
        ['Debit card', 'Bad credit', true],
        ['Dormitory', 'Dirty room', true],
        ['The earthquakes', 'The queer shakes', false],
        ['School master', 'The classroom', true],
    ])('should evalutate %p and %p and return %p', (first, second, expected) => {
        expect(areAnagrams(first, second)).toEqual(expected)
    })
})