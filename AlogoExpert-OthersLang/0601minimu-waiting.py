#if sort always O(nlogn)+n = O(nlogn), add n because after sort, we need to iterate the sort of order and come up these total
#time complexity is O(nlogn)+n = O(nlogn), space complexity is O(1) constant space
def minimumWaitingTime(queries):
    queries.sort()
    totalWaitingTime = 0
    for idx, duration in enumerate(queries): 
        # enumerate is a function that return index and value of the list
        queriesLeft = len(queries) - (idx + 1)
        totalWaitingTime += duration * queriesLeft
    return totalWaitingTime
