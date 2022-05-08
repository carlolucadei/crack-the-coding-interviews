import { resetRowAndColumn } from './exercise-1.7'
describe('Exercise 1.7', () => {
    it('should not reset due to missing 0', () => {
        expect(resetRowAndColumn([
            [9, 1, 2],
            [3, 4, 5],
            [6, 7, 8]
        ], 3, 3)).toEqual(([
            [9, 1, 2],
            [3, 4, 5],
            [6, 7, 8]
        ]))
    })

    it('should reset cols and rows in case of 0 NxN matrix', () => {
        expect(resetRowAndColumn([
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8]
        ], 3, 3)).toEqual(([
            [0, 0, 0],
            [0, 4, 5],
            [0, 7, 8]
        ]))
    })

    it('should reset cols and rows in case of 0 NxM matrix', () => {
        expect(resetRowAndColumn([
            [1, 0, 1, 2],
            [3, 4, 5, 9],
            [6, 7, 8, 4]
        ], 3, 4)).toEqual(([
            [0, 0, 0, 0],
            [3, 0, 5, 9],
            [6, 0, 8, 4]
        ]))
    })
})