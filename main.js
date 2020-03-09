// Node Class -> creates the nodes for the stack or for the queue
class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

// Sack Class -> Creates stacks to add and remove nodes, LIFO
class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }
}
