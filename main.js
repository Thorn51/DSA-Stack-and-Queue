const Stack = require("./stack");

const testStack = new Stack();

testStack.push(10);
testStack.push(20);
testStack.push(30);
testStack.push(40);
testStack.pop();
testStack.peek();

console.log(testStack);
