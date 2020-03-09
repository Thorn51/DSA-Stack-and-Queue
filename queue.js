class _Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  //Add items to the queue
  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }
    this.last = node;
    this.size++;
  }

  //Remove items from the queue
  dequeue() {}
}

let testQueue = new Queue();

testQueue.enqueue(10);
testQueue.enqueue(20);

console.log(testQueue);
