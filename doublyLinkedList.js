class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    if (!this.head) {
      this.head = newNode;
    }
    this.size += 1;
    return newNode;
  }
  pop() {
    if (!this.size) {
      return null;
    }
    let curNode = this.head;
    let secondToLast = this.head;
    while (curNode.next) {
      secondToLast = curNode;
      curNode = curNode.next;
    }
    secondToLast.next = null;
    this.tail = secondToLast;
    this.size -= 1;
    if (!this.size) {
      this.head = null;
      this.tail = null;
    }
    return curNode;
  }
  unshift(value) {
    const newNode = new Node(value);
    if (!this.size) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.size += 1;
    return newNode;
  }
  shift() {
    if (!this.size) {
      return null;
    } else {
      const toRemove = this.head;
      this.head = this.head.next;
      this.size -= 1;
      if (!this.tail) {
        this.tail = null;
      }
      return toRemove;
    }
  }

  count() {
    return this.size;
  }

  delete(value) {
    if (this.head && this.head.value === value) {
      this.head = this.head.next;
      this.size -= 1;
    }

    let curNode = this.head;

    while (curNode.next) {
      if (curNode.next.value === value) {
        curNode.next = curNode.next.next;
        this.size -= 1;
      } else {
        curNode = curNode.next;
      }
    }

    if (this.tail.value === value) {
      this.tail = curNode;
    }
  }
}

const linkedList1 = new LinkedList();
linkedList1.push(1);
linkedList1.push(true);
linkedList1.push("item");

// console.log(linkedList1.count());
// console.log(linkedList1);
// const poped = linkedList1.pop();
// const shifted = linkedList1.shift();
// console.log(shifted);

// console.log(linkedList1);
// console.log(linkedList1.count());
