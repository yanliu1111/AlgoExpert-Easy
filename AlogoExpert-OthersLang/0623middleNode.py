# O(N) time | O(1) space
# def middleNode(linkedList):
#     count =0
#     currentNode = linkedList
#     while currentNode is not None:
#         currentNode = currentNode.next
#         count+=1
# middleNode moving with the currentNode moving    
#     middleNode = linkedList
#     for i in range(count//2):
#         middleNode = middleNode.next
#     return middleNode

# second solution
# O(N) time | O(1) space
def middleNode(linkedList):
    slowNode = linkedList
    fastNode = linkedList
    while fastNode is not None and fastNode.next is not None:
        slowNode = slowNode.next
        fastNode = fastNode.next.next # we do know it won't throw an error, we know that fast node.next is not None. So fastNode.next.next is could potentially be None, but it won't throw an error.
    return slowNode # when I reach the end with the fast node, the slow node will be at the middle node.