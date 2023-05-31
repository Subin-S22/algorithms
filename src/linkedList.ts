type TNode<T> = T extends number ? number : LinkNode<T>;

class LinkNode<T> {
  data: number;
  next: TNode<T> | null;
  constructor(data: number, next: TNode<T> | null) {
    this.data = data;
    this.next = next;
  }
}

export default class LinkedList {
  head: TNode<LinkNode<number>> | null;
  size: number;
  constructor() {
    this.head = null;
    this.size = 0;
  }

  /**
   *
   * @param data number
   */
  insertAtFirst(data: number) {
    this.head = new LinkNode<LinkNode<number>>(data, this.head);
  }

  /**
   *
   * @param data number
   * @param index number
   * @returns
   */
  insertAtIndex(data: number, index: number) {
    let node = new LinkNode<LinkNode<number>>(data, null);
    let current: TNode<LinkNode<number>> | null = this.head;
    let count = 0;
    let prev: TNode<LinkNode<number>> | null = null;

    if (index === 0) {
      this.insertAtFirst(data);
      return;
    }

    while (current && count < index) {
      prev = current;
      count++;
      current = current.next;
    }
    node.next = current;
    if (prev) prev.next = node;
  }

  deleteAtIndex(index: number) {
    let current: TNode<LinkNode<number>> | null = this.head;
    let count = 0;
    let prev: TNode<LinkNode<number>> | null = null;

    if (current && index === 0) {
      this.head = current.next;
      return;
    }

    while (current && count < index) {
      count++;
      prev = current;
      current = current.next;
    }

    if (prev && current) prev.next = current.next;
  }

  /**
   * reverse a linked list
   */
  reverse() {
    let current: TNode<LinkNode<number>> | null = this.head;
    let prev: TNode<LinkNode<number>> | null = null;
    while (current) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }

  /**
   * print all values
   */
  printNode() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}
