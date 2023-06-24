# O(N) time | O(1) space
# def middleNode(linkedList):
#     count =0
#     currentNode = linkedList
#     while currentNode is not None:
#         currentNode = currentNode.next
#         count+=1
    
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
        fastNode = fastNode.next.next
    return slowNode