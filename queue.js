// Create node class
class _Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

//Create queue class
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
  dequeue() {
    if (this.first === null) {
      console.log("Queue is empty");
    }
    let node = this.first;
    this.first = this.first.next;

    //If last item in queue
    if (node === this.last) {
      this.last = null;
    }
    this.size--;
    return node.value;
  }
}

module.exports = Queue;
