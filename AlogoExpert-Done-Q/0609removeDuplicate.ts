export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}
export function removeDuplicatesFromLinkedList(linkedList: LinkedList) {
  let current: LinkedList | null = linkedList;
  let next: LinkedList | null = linkedList.next;

  while (!!current) {
    if (current.value !== next?.value) {
      current.next = next;
      current = next;
    }
    next = next?.next || null;
  }
  return linkedList;
}
