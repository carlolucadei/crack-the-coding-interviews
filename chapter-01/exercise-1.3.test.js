import { removeDuplicatesFromString } from './exercise-1.3'
describe('Exercise 1.3', () => {
    it('should return null in case of null', () => {
        expect(removeDuplicatesFromString(null)).toEqual(null)
    })
    it('should return the same string in case of empty', () => {
        expect(removeDuplicatesFromString('')).toEqual('')
    })

    it('should return only a char in case of all same duplicated char', () => {
        expect(removeDuplicatesFromString('aaaaaaaaa')).toEqual('a')
    })

    it('should return the string without any duplicated chars in any position', () => {
        expect(removeDuplicatesFromString('abababa')).toEqual('ab')
    })
})