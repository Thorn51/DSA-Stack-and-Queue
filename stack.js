// Node Class -> Private calss for stack to create nodes
class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

// Sack Class -> Creates stacks to add and remove nodes, LIFO
class Stack {
  constructor() {
    // Track the node on top of the stack
    this.top = null;
    // Track the number of nodes in the stack
    this.size = 0;
  }

  // Insert a node on the top of the stack
  push(value) {
    // If the stack is empty
    if (this.last === null) {
      this.top = new _Node(value, null);
      this.size++;
      return this.top;
    }
    // If the stack already has nodes
    let node = new _Node(value, this.top);
    this.top = node;
    this.size++;
  }

  // Remove a node from the stack
  pop() {
    // Check if the stack is empty
    if (this.top === null) {
      return null;
    }

    // Change top of the stack to the next node
    let node = this.top;
    this.top = node.next;
    this.size--;
    return node.value;
  }

  // Look at the top node
  peek() {
    // Check if the stack is empty
    if (this.top === null) {
      return null;
    }
    // Return the top of the stack
    return this.top;
  }

  // Check if the stack is empty
  isEmpty() {
    if (this.top === null) {
      return true;
    }
    return false;
  }

  // Look at all the values in the stack
  display() {
    if (this.top === null) {
      return "Stack is empty";
    }
    let node = this.top;
    let nodeValues = "";
    while (node) {
      nodeValues += node.value + " ";
      node = node.next;
    }
    return nodeValues;
  }
}

export default Stack;
