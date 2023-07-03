# O(n) time | O(1) space
# because we all have to do is look trough all of the nodes in our linked list. We only have to look at wach of them once. And we don't use any external space either.
# Other requirement is the list in ascending order always.
class LinkedList:
    def __init__(self, value):
        self.value = value
        self.next = None

def removeDuplicatesFromLinkedList(linkedList):
    currentNode = linkedList
    while currentNode is not None:
        nextDistinctNode = currentNode.next
        while nextDistinctNode is not None and nextDistinctNode.value == currentNode.value:
            nextDistinctNode = nextDistinctNode.next
        
        currentNode.next = nextDistinctNode
        currentNode = nextDistinctNode
    return linkedList