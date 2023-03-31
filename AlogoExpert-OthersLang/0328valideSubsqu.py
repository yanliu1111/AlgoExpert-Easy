# O(n) time, n is length of main array | O(1) space, two empty varible, nothing increases with the size of the inputs. As far as time complexity, the most accurate way to descibe this, is O of N is the length of the array. 
# while loop solution:
# def validateSubsequence (arrary, sequence):
#     arrIdx = 0
#     seqIdx = 0
#     while  arrIdx < len(arrary) and seqIdx < len(sequence):
#         if arrary[arrIdx] == sequence [seqIdx]
#             seqIdx += 1
#         arrIdx +=1
#     return seqIdx == len(sequence)

# for loop solution:
# O(n) time | O(1) same logic, only use one varible 
# time complex, only for loop in array, O(n) time
def validateSubsequence (arrary, sequence):
    seqIdx = 0
    for value in arrary:
        if seqIdx == len (sequence):
            break
        if sequence[seqIdx] == value:
            seqIdx +=1
    return seqIdx == len(sequence)