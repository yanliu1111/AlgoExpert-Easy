#Optimal Freelancing
#time complexity: O(nlogn), space complexity: O(1)
def optimalFreelancing(jobs):
    LENGTH_OF_WEEK = 7
    profit = 0
    #lambda function, sort by payment, reverse order
    jobs.sort(key=lambda job: job["payment"], reverse=True)
    timeline = [False] * LENGTH_OF_WEEK
    for job in jobs:
        maxTime = min(job["deadline"], LENGTH_OF_WEEK)
        for time in reversed(range(maxTime)):
            if timeline [time] == False:
                timeline[time] = True
                profit += job["payment"]
                break
    return profit