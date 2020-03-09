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

  //Add item to the top of stack
  push(data) {
    // Given empty stack place data at top
    if (this.top === null) {
      this.top = new _Node(data, null);
      this.size++;
      return this.top;
    }
    // Given there is data already in stack
    const node = new _Node(data, this.top);
    this.top = node;
    this.size++;
  }

  //Remove last item added to stack
  pop() {
    if (this.top === null) {
      console.log("Pop -> The stack is empty");
      return;
    }
    const node = this.top;
    this.top = node.next;
    this.size--;
    return node.data;
  }

  //Look at the data in the stack
  peek() {
    if (this.top === null) {
      console.log("Peek -> The stack is empty");
      return;
    } else {
      let node = this.top;

      while (node) {
        console.log(node.data);
        node = node.next;
      }
    }
  }
}

const testStack = new Stack();

testStack.push(10);
testStack.push(20);
testStack.push(30);
testStack.push(40);
testStack.pop();
testStack.peek();

console.log(testStack);
