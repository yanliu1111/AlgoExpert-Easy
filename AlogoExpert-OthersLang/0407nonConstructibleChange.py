# I like this video explanation in algoexpert
# time O(nlogn), space O(1)
# for time, 0(nlogn)+n, n is begining sort, but nlogn is larger than n, so we can ignore n
# for space, we are not creating a new array, so space is O(1), BUT you should ask interviewer if you cannot modify and sort the input array, you havet to create a new array, so space is O(n)

def nonConstructibleChange(coins):
    # Write your code here.
    coins.sort()
    currentChangeCreated = 0
    for coin in coins:
        if coin > currentChangeCreated+1:
            return currentChangeCreated+1
        currentChangeCreated += coin
    return currentChangeCreated+1