export class Node {
    constructor(element) {
        this.element = element;
        this.next = null
    }
}

export class LinkedList {

    constructor() {
        this.head = null
    }

    add(element) {
        let node = new Node(element)
        let current
        if (this.head == null)
            this.head = node
        else {
            current = this.head
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
    }

    sort() {
        let currentNode = this.head
        let next = null
        while (currentNode !== null) {
            next = currentNode.next
            while (next !== null) {
                if (currentNode.element >= next.element) {
                    const swapNode = currentNode.element
                    currentNode.element = next.element
                    next.element = swapNode
                }
                next = next.next
            }
            currentNode = currentNode.next
        }
    }
}