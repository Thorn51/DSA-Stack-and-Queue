import Stack from "./stack.js";
import Queue from "./queue.js";

const starTrek = new Stack();
starTrek.push("Kirk");
starTrek.push("Spock");
starTrek.push("McCoy");
starTrek.push("Scotty");

const emptyStack = new Stack();

const palindromes = new Stack();
palindromes.push("Dad");
palindromes.push("Mom");
palindromes.push("A man, a plan, a canal: Panama");
palindromes.push("1,001");
palindromes.push("Taco");

function stackClass() {
  console.log("1. Create a linked stack class");
  console.log(starTrek);
}

function peek(stack) {
  console.log("2. Useful methods for a stack");
  console.log("2a. peek()");
  if (stack.top === null) {
    return null;
  }
  let topStack = stack.top;
  //   console.log(topStack);
  return topStack;
}

function isEmpty(stack) {
  console.log("2b. isEmpty()");
  if (stack.top === null) {
    return true;
  }
  return false;
}

function display(stack) {
  console.log("2c. display()");
  if (stack.top === null) {
    return "Stack is empty";
  }
  let node = stack.top;
  let nodeValues = "";
  while (node) {
    nodeValues += node.value + " ";
    node = node.next;
  }
  return nodeValues;
}

function isPalindrome(string) {
  console.log("3. Check for palindromes using a stack");
  string = string.toLowerCase().replace(/\W/g, "");
  let palindromeCharacters = new Stack();
  let reverseString = "";
  for (let i = 0; i < string.length; i++) {
    palindromeCharacters.push(string[i]);
  }
  while (palindromeCharacters.top !== null) {
    reverseString += palindromeCharacters.top.value;
    palindromeCharacters.pop();
  }
  if (string !== reverseString) {
    console.log(
      "Original string ->",
      string,
      "Reverse string->",
      reverseString
    );
    return false;
  }
  console.log("Original string ->", string, "Reverse string->", reverseString);
  return true;
}

stackClass();
console.log("Peek starTrek ->", peek(starTrek));
console.log("isEmpty starTrek ->", isEmpty(starTrek));
console.log("isEmpty emptyStack ->", isEmpty(emptyStack));
console.log("With function on starTrek ->", display(starTrek));
console.log("With method on emptyStack ->", emptyStack.display());
console.log(isPalindrome("dad"));
console.log(isPalindrome("taco"));
console.log(isPalindrome("A man, a plan, a canal: Panama"));
