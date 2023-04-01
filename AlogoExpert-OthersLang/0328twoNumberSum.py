#O(n^2) time | O(1) space => I dont use hash table
# def twoNumberSum(array, targetSum):
#     for i in range (len(array)-1):
#         firstNum = array [i]
#         for j in range (i + 1, len(array)):
#             secondNum = array [j]
#             if firstNum + secondNum == targetSum:
#                 return [firstNum, secondNum]
#     return []

#O(n) time | O(n)space because nums = {} hash table set
#second hash table, dictionary in python (same as js object)
#y = target -x
#input growing
def twoNumberSum(array, targetSum):
    nums = {}
    for num in array:
        potentialMatch = targetSum - num
        if potentialMatch in nums:
            return [potentialMatch, num]
        else:
            nums[num] = True
    return []
# often hash table will make your algorithm used up a bit more space, but run faster and more efficiently. many time worth using.In complex algorithm might used up space no matter what, in which case using an additional hash table wont matter from a space point of view but help u from time point of view.

#O(nlog(n)) time | O(1) space
#quick sort merge sort, O of n log n time
def twoNumberSum(array, targetSum):
    array.sort()
    left = 0
    right = len(array) - 1
    while left < right:
        currentSum = array[left] + array[right]
        if currentSum == targetSum:
                return [array[left], array[right]]
        elif currentSum < targetSum:
                left += 1
        elif currentSum > targetSum:
                right -= 1
    return []
#summary, the space complexity here, 3rd as good as 1st with the double for loop, better than 2nd with hash table. Time complexity is better than the double fo loop but worse than the one with hash table.
# In the interview, about trade off between time and space, maybe you value space more than time, you use last solution. Otherwise, you use the second solution with hash table, if you value time more than space.

# time is important /  n(nlogn) => fast n(1) insertion sort
# larfe array nlogn -> best sort