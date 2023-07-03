# reverse a linked list

class Node:
    def __init__(self, data):
        self.value = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def insert(self, data):
        if self.head is None:
            self.head = Node(data)
            return

        current = self.head
        while current.next is not None:
            current = current.next

        current.next = Node(data)

    def as_list(self):
        if self.head is None:
            return []
        current = self.head
        rv = []
        while current is not None:
            rv.append(current.value)
            current = current.next
        return rv

    def reverse_list(self):
        if self.head is None:
            return

        previous = None
        current = self.head
        while current is not None:
            next_node = current.next
            current.next = previous
            previous = current
            current = next_node

        self.head = previous

def reversed_list(values):
    initial_list = LinkedList()
    for value in values:
        initial_list.insert(value)
    initial_list.reverse_list()
    return initial_list.as_list()

print(reversed_list([1, 2, 3, 4, 5]))
