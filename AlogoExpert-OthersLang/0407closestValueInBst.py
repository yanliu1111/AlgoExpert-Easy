def findClosestValueInBst (tree, target):
    # build a helper function, float("inf") is the max value
    return findClosestValueInBstHelper(tree, target, float("inf"))

# recursive solution
def findClosestValueInBstHelper (tree, target, closest):
    if tree is None:
        return closest
    if abs(target - closest) > abs (target - tree.value):
        closest = tree.value
    if target < tree.value:
        return findClosestValueInBst ( tree.left, target, closest)
    elif target > tree.value:
        return findClosestValueInBst (tree.right, target, closest)
    else:
        return closest