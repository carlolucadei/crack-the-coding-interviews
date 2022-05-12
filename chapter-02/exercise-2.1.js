export const removeDuplicatesFromLinkedList = (linkedList) => {
    if (!linkedList) return linkedList
    if (!linkedList.head) return linkedList

    let currentNode = linkedList.head
    let next = null
    while (currentNode != null && currentNode.next != null) {
        next = currentNode
        while (next.next != null) {
            if (currentNode.element == next.next.element) {
                const dup = next.next
                next.next = next.next.next

            } else {
                next = next.next
            }
        }
        currentNode = currentNode.next
    }
    return linkedList
}
