export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

// export function middleNode(linkedList: LinkedList) {
//   let slow: LinkedList | null = linkedList;
//   let fast: LinkedList | null = linkedList;
//   while (fast !== null && fast.next !== null) {
//     slow = slow!.next;
//     fast = fast.next.next;
//   }
//   return slow;
// }

// O(n) time | O(1) space
//second solution

export function middleNode(linkedList: LinkedList) {
  const length = getLength(linkedList);
  let i = 0;
  const middleNode = Math.floor(length / 2);
  let currentNode: LinkedList | null = linkedList;
  while (i < middleNode) {
    currentNode = currentNode!.next;
    i++;
  }
  return currentNode;
}

function getLength(linkedList: LinkedList) {
  let length = 0;
  let currentNode: LinkedList | null = linkedList;
  while (currentNode !== null) {
    length++;
    currentNode = currentNode!.next;
  }
  return length;
}
