/**
 * Linked Lists
 */

// Example of O(N^2), Nested for loops
// In total, this will run 25 times (5x5)
// for (let i = 0; i < 5; i++) {
//   console.log('outer loop: ' + i);
//   for (let j = 0; j < 5; j++) {
//     console.log('innner loop: ' + j);
//   }
// }

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

const n = new Node("someData");
const n2 = new Node("hii", n);

// console.log(n2);

/**
 * Methods
 * - insertFirst()
 * - getSize()
 * - getFirst()
 * - getLast()
 * - clear()
 * - removeFirst()
 * - removeLast()
 * - insertLast()
 * - getAt()
 * - removeAt()
 * - insertAt()
 */

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //O(1)
  insertFirst(data) {
    const newNode = new Node(data, this.head);
    this.head = newNode;
    this.size++;
  }

  //O(1)
  getSize() {
    return this.size;
  }

  //O(1)
  getFirst() {
    return this.head;
  }

  //O(n)
  getLast() {
    if (!this.head) {
      return null;
    }
    let walker = this.head;
    while (walker.next) {
      walker = walker.next;
    }
    return walker;
  }

  //O(1)
  clear() {
    this.head = null;
    this.size = 0;
  }

  // O(1)
  removeFirst() {
    this.head = this.head.next;
    this.size--;
  }

  //
  removeLast() {
    if (!this.head) {
      return null;
    }

    if (!this.head.next) {
      this.head = null;
      this.size--;
      return null;
    }

    // let previous = this.head
    // let walker = this.head.next
    // while (walker.next) {
    //     previous = walker
    //     walker - walker.next
    // }
    // previous.next = null

    let walker = this.head;
    while (walker.next.next) {
      walker = walker.next;
    }
    walker.next = null;
    this.size--;
  }

  //
  insertLast(data) {
    const last = this.getLast();

    if (last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
    this.size++;
  }

  getAt(index) {
    let counter = 0;
    let walker = this.head;
    while (walker) {
      if (counter === index) {
        return walker;
      }

      counter++;
      walker = walker.next;
    }
    return null;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }
    if (index === 0) {
      this.removeFirst();
      return;
    }

    const previous = this.getAt(index - 1);
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
    this.size--;
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      this.size++;
      return;
    }

    if (index === 0) {
      this.insertFirst(data);
      this.size++;
      return;
    }

    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;
    this.size++;
  }
}

const linkedList = new LinkedList();

// Insert First
linkedList.insertFirst("someData");
linkedList.insertFirst("node");
linkedList.insertFirst("node1");

// getSize Method
// console.log(linkedList.getSize());

// getFirst
// console.log(linkedList.getFirst());

// getLast
// console.log(linkedList.getLast());

// clear
// linkedList.clear();

// removeFirst
// linkedList.removeFirst();

// removeLast
// linkedList.removeLast();

// insertLast
// linkedList.insertLast("lastData");

// getAt
// console.log(linkedList.getAt(2));

console.log("==========linkedList Below========");

console.log(linkedList);
