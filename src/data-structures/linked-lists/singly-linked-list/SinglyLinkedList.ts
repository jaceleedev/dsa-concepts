class ListNode<T> {
  data: T;
  next: ListNode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList<T> {
  head: ListNode<T> | null;
  size: number;

  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertAt(index: number, data: T): void {
    if (index < 0 || index > this.size) {
      throw new RangeError('Index out of bounds');
    }

    const newNode = new ListNode(data);

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      let previous = null;
      let count = 0;

      while (count < index) {
        current = current!.next;
        previous = current;
        ++count;
      }

      newNode.next = current;
      previous!.next = newNode;
    }

    ++this.size;
  }

  getAt(index: number): T | null {
    if (index < 0 || index >= this.size) {
      throw new RangeError('Index out of bounds');
    }

    let current = this.head;
    let count = 0;

    while (count < index) {
      current = current!.next;
      ++count;
    }

    return current!.data;
  }

  updateAt(index: number, data: T): void {
    if (index < 0 || index >= this.size) {
      throw new RangeError('Index out of bounds');
    }

    let current = this.head;
    let count = 0;

    while (count < index) {
      current = current!.next;
      ++count;
    }

    current!.data = data;
  }

  removeAt(index: number): void {
    if (index < 0 || index >= this.size) {
      throw new RangeError('Index out of bounds');
    }

    let current = this.head;
    let previous = null;
    let count = 0;

    if (index === 0) {
      this.head = current!.next;
    } else {
      while (count < index) {
        current = current!.next;
        previous = current;
        ++count;
      }

      previous!.next = current!.next;
    }

    --this.size;
  }

  prepend(data: T): void {
    this.insertAt(0, data);
  }
}
