# Evaluate Expression Tree
# O(n) time | O(h) space
class BinaryTree:
    def __init__(self, value, left=None, right=None):
        self.value = value
        self.left = left 
        self.right = right

def evaluateBinaryTree(tree):
    if tree.value >= 0:
        return tree.value
    leftVal = evaluateBinaryTree(tree.left)
    rightVal = evaluateBinaryTree(tree.right)
    if tree.value == -1 :
        return leftVal + rightVal
    elif tree.value == -2:
        return leftVal - rightVal
    elif tree.value == -3:
        return int(leftVal / rightVal) 
    # why not // ? because it is not integer division, it is floor division
    return leftVal * rightVal