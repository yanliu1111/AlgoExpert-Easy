# Sorted Squared Array, time O(nlogn), space O(n)
# becasue sort() is O(nlogn), and we have to create a new array, so space is O(n)
# Solution 1
# def sortedSquaredArray (array):
#     sortedSquares = [0 for _ in array] #_ is a dummy variable

#     for idx in range(len(array)):
#         value = array[idx]
#         sortedSquares[idx] = value * value
    
#     sortedSquares.sort()
#     return sortedSquares

# Solution 2
# I like this
# 0(n) time, one one for loop | O(n) space
def sortedSquaredArray (array):
    sortedSquareds = [0 for _ in array]
    smallerValueIdx = 0
    largerValueIdx = len(array) - 1

    for idx in reversed(range(len(array))):
        smallerValue = array[smallerValueIdx]
        largerValue = array[largerValueIdx]

        if abs(smallerValue) > abs(largerValue):
            sortedSquareds[idx] = smallerValue * smallerValue
            smallerValueIdx += 1
        else:
            sortedSquareds[idx] = largerValue * largerValue
            largerValueIdx -= 1
    
    return sortedSquareds