const Stack = require("./stack");
const Queue = require("./queue");

// const testStack = new Stack();

// testStack.push(10);
// testStack.push(20);
// testStack.push(30);
// testStack.push(40);
// testStack.pop();
// testStack.peek();

// console.log(testStack);

let testQueue = new Queue();

testQueue.enqueue(10);
testQueue.enqueue(20);
testQueue.enqueue(30);
testQueue.dequeue();

console.log(testQueue);
