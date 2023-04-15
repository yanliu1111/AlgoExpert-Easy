class Node:
    def __init__(self, name) -> None:
        self.children = []
        self.name = name
    
    def addChilde(self, name):
        self.children.append(Node(name))
    # O(v+e) time | O(v) space
    def depthFirstSearch (self, array):
        array.append(self.name)
        for child in self.children:
            child.depthFirstSearch(array)
        return array