// Create node class
class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//Create queue class
class Queue {
  constructor() {
    // Track the first item in the queue
    this.first = null;
    // Track the last item in the queue
    this.last = null;
    // Track the size of the queue
    this.size = 0;
  }

  // Add nodes to the queue
  enqueue(value) {
    // Create a new node to store the value
    let node = new _Node(value);

    // If the node is the first to be added
    if (this.first === null) {
      this.first = node;
      this.size++;
    }

    // Shift existing node in last to the next position in queue
    if (this.last) {
      this.last.next = node;
    }

    // Make the new node last
    this.last = node;
    this.size++;
  }

  // Remove an item from the queue
  dequeue() {
    // Check if queue is empty
    if (this.first === null) {
      return null;
    }

    // Get the first node in the list
    let node = this.first;

    // Shift the next node in the queue to first
    this.first = this.first.next;

    // If the node is in the last position of the queue
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }
}

//Add items to the queue

//Remove items from the queue

export default Queue;
