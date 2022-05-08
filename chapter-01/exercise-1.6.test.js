import { rotateMatrixBy90DegreeClockWise } from './exercise-1.6'
describe('Exercise 1.6', () => {
    it('should rotete a 3x3 matrix', () => {
        expect(rotateMatrixBy90DegreeClockWise([
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8]
        ])).toEqual(([
            [2, 5, 8],
            [1, 4, 7],
            [0, 3, 6]
        ]))
    })
    it('should rotete a 4x4 matrix', () => {
        expect(rotateMatrixBy90DegreeClockWise([
            ['a', 'b', 'c', 'd'],
            ['e', 'f', 'g', 'h'],
            ['i', 'l', 'm', 'n'],
            ['o', 'p', 'q', 'r'],
        ])).toEqual(([
            ['d', 'h', 'n', 'r'],
            ['c', 'g', 'm', 'q'],
            ['b', 'f', 'l', 'p'],
            ['a', 'e', 'i', 'o'],
        ]))
    })
})