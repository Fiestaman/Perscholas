// Stack and Queues

/*
Queues - follow FIFO (first in, first out) behavior
*/

class Queue {
  constructor() {
    this.data = [];
  }

  getQueue() {
    return this.data;
  }

  // Adds to the front of the array
  enqueue(dataToQueue) {
    this.data.unshift(dataToQueue);
  }

  // Removes from the end of the array
  dequeue() {
    return this.data.pop();
  }

  // Will return the piece of data that is up next to be dequeued
  peek() {
    return this.data[this.data.length - 1];
  }

  // Checking if data array is empty, returns boolean
  isEmpty() {
    return !this.data.length;
  }
}

const myFirstQueue = new Queue();

myFirstQueue.enqueue("someItem");
// myFirstQueue.enqueue('second');
//myFirstQueue.dequeue();

console.log(myFirstQueue.isEmpty());

console.log(myFirstQueue.getQueue());

/**
 * Stacks - follow LIFO (last in, first out) behavior
 */

class Stack {
  constructor() {
    this.data = [];
  }

  push(dataToStack) {
    this.data.push(dataToStack);
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }

  // Checking if data array is empty, returns boolean
  isEmpty() {
    return !this.data.length;
  }
}

const myStack = new Stack();
myStack.push(89), myStack.push(54), myStack.push("hello");
myStack.pop();
console.log(myStack);

// Example of call stack

function a() {
  console.log("a");
  b();
}

function b() {
  console.trace("the end of the stack");
  //c(); this will cause an infinite loop and eventually reach stack overflow
}

function c() {
  a();
}

//c();

/*
Imagine that you started with an empty stack and perform the following operations:
PUSH 0
POP
PUSH 2
PUSH 4
PUSH 6
POP
PUSH 8
...What would the stack look like at the end? (Hint: It might help to sketch this out on a piece of paper!)

[2,4,8]

Imagine that you start with an empty queue and perform the following operations:
ENQUEUE 15
DEQUEUE
ENQUEUE "Popcorn"
ENQUEUE 515
ENQUEUE "GA"
DEQUEUE
ENQUEUE "Smile!"
...What would your queue end up looking like?

['Smile!','GA',515]
*/
