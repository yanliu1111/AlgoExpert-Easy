export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export function removeDuplicatesFromLinkedList(
  linkedList: LinkedList
): LinkedList {
  let curr: LinkedList | null = linkedList;
  while (curr && curr.next) {
    if (curr.value === curr.next.value) {
      curr.next = curr.next.next; // Remove the duplicate node
    } else {
      curr = curr.next; // Move to the next node
    }
  }
  return linkedList;
}
