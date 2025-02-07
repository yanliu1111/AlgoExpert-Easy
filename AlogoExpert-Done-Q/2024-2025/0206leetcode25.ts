//leetcode 25 k个一组翻转链表
class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val = 0, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  if (!head || k === 1) return head;

  const dummy = new ListNode(0);
  dummy.next = head;
  let start: ListNode = dummy;
  let end: ListNode | null = head;
  let count = 0;

  while (end) {
    count++;
    if (count % k === 0) {
      start = reverse(start, end.next);
      end = start.next;
    } else {
      end = end.next;
    }
  }
  return dummy.next;
}

function reverse(start: ListNode, end: ListNode | null): ListNode {
  let prev: ListNode = start;
  let curr: ListNode | null = start.next;
  let first: ListNode | null = curr;

  while (curr !== end) {
    let temp: ListNode | null = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  start.next = prev;
  if (first) first.next = curr;
  return first!;
}
