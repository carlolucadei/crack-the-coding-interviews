import { rotateMatrixBy90DegreeClockWise } from './exercise-1.6'
describe('Exercise 1.6', () => {
    it('should rotete a 3x3 matrix', () => {
        expect(rotateMatrixBy90DegreeClockWise([
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8]
        ])).toEqual(([
            [6, 3, 0],
            [7, 4, 1],
            [8, 5, 2]
        ]))
    })
    it('should rotete a 4x4 matrix', () => {
        expect(rotateMatrixBy90DegreeClockWise([
            ['a', 'b', 'c', 'd'],
            ['e', 'f', 'g', 'h'],
            ['i', 'l', 'm', 'n'],
            ['o', 'p', 'q', 'r'],
        ])).toEqual(([
            ['o', 'i', 'e', 'a'],
            ['p', 'l', 'f', 'b'],
            ['q', 'm', 'g', 'c'],
            ['r', 'n', 'h', 'd'],
        ]))
    })
})