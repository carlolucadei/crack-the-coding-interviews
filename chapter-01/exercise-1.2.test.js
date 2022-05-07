import { stringReverse } from './exercise-1.2'
describe('Exercise 1.2', () => {
    it('should return null in case of null', () => {
        expect(stringReverse(null)).toEqual(null)
    })
    it('should return the same string in case of empty', () => {
        expect(stringReverse('')).toEqual('')
    })

    it('should return the reversed string in case of odd numbers of chars', () => {
        expect(stringReverse('abc')).toEqual('cba')
    })

    it('should return the reversed string in case of even numbers of chars', () => {
        expect(stringReverse('abcd')).toEqual('dcba')
    })
})