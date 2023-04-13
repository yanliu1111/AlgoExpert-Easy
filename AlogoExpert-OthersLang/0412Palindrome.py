# O(n^2) time | O(n) space
# def isPalindrom(string):
#     revresedString = ""
#     for i in reversed(range(len(string))):
#         reversedString += string [i]
#     return string == revresedString

#same as above, O(n) time | O(n) space
# def isPalindrom(string):
#     reversedChars = []
#     for i in reversed(range(len(string))):
#         reversedChars.append(string[i])
#     return string == "".join(reversedChars)

# recursive solution/ tail recursive
# O(n) time | O(n) space
# def isPalindrome(string, index=0):
#     j = len(string) - 1 - index
#     return True if index >= j else string [index] == string [j] and isPalindrome(string, index+1)

# compilers, won't optimize sth because of tail recursion, tail recursion might not end up saving anything. It worth keeping in mind and mention in interview, you don't wanna exclusively rely on that. NEVER MAKE MISTAKE, thinking of recursive algrethom doesnt use up any space because in a lot of cases. In most cases, it will use up additional space.
# def isPalindrome (string, i=0):
#     j = len (string) -1 - i
#     if i >=j:
#         return True
#     if string[i] != string[j]:
#         return False
#     return isPalindrome(string, i+1)

# last one, iterative solution, had the base space time compplexity or the best space time complexity analysis.
# O(n)time | O(1)space , I like this one
def isPalindrome (string):
    leftIdx = 0
    rightIdx = len (string) - 1
    while leftIdx < rightIdx:
        if string[leftIdx] != string[rightIdx]:
            return False
        leftIdx += 1
        rightIdx -= 1
    return True
