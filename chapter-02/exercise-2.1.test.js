import { removeDuplicatesFromLinkedList } from './exercise-2.1'
import { LinkedList } from './linknode'
describe('Exercise 2.1', () => {
    it('should return the same list in case of no duplicates', () => {
        let list = new LinkedList()
        list.add(1)
        list.add(2)
        list.add(3)
        expect(removeDuplicatesFromLinkedList(list)).toEqual(list)
    })

    it('should return list even in case of no duplicates', () => {
        let list = new LinkedList()
        list.add(3)
        list.add(2)
        list.add(1)
        expect(removeDuplicatesFromLinkedList(list)).toEqual({
            "head": {
                "element": 3,
                "next": {
                    "element": 2,
                    "next": {
                        "element": 1,
                        "next": null
                    }
                }
            }
        })
    })

    it('should return the list without duplicates', () => {
        let list = new LinkedList()
        list.add(1)
        list.add(1)
        list.add(2)
        list.add(4)
        list.add(3)
        list.add(4)
        expect(removeDuplicatesFromLinkedList(list)).toEqual({
            "head": {
                "element": 1,
                "next": {
                    "element": 2,
                    "next": {
                        "element": 4,
                        "next": {
                            "element": 3,
                            "next": null
                        }
                    }
                }
            }
        })
    })
})