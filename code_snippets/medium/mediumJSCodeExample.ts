
// 11.
/* 
  Return the entry of the fibonacci sequence for the provided number. 
  0,1,2,3,4,5,6,7,8
  0,1,1,2,3,5,8,13,21,34,55,89,144
*/

const fibona = function (num) {
  let seq = [];
  let fibo = 0;
  for (let i = 0; i < num + 1; i++) {
    if (i === 1) fibo = 1;
    else if (i !== 0) fibo = fibo + seq[seq.length - 2];
    seq.push(fibo);
  }
  return seq[num];
};

const fibfib = function (num) {
  if (num < 2) return num;
  return fibfib(num - 2) + fibfib(num - 1)
}

// 12. 
// Binary Search

// const arr = [1, 3, 5, 7, 8, 9];
// const binarySearch = function (arr, num) {
//   if (arr.length === 1 && arr[0] !== num) return 'not found';
//   const len = Math.floor(arr.length / 2);
//   const midEle = arr[len];
//   if (num < midEle) return binarySearch(arr.slice(0, len), num);
//   if (num > midEle) return binarySearch(arr.slice(len), num);
//   if (num === midEle) return 'found';
// }

// const binarySearch = (inputArray, searchValue) => {
//   if (inputArray.length === 1 && inputArray[0] !== searchValue) return 'not found';

//   const halfLength = Math.floor(inputArray.length / 2);
//   const midEle = inputArray[halfLength];

//   if (midEle > searchValue) return binarySearch(inputArray.slice(0, halfLength), searchValue);
//   if (midEle < searchValue) return binarySearch(inputArray.slice(halfLength, inputArray.length), searchValue);
//   if (midEle === searchValue) return 'found';
// }


// 16. 
// Reverse each word in a string

const theString = 'Hello my name is fynn';

const wordReverse = function (inputString) {
  return inputString.split(' ').map(word => [...word].reverse().join('').toString()).join(' ');
}

// 17.
// Mul function

const mul = function (number1) {
  return function (number2) {
    return function (number3) {
      return number1 * number2 * number3;
    }
  }
}
console.log(mul(2)(3)(4));


// 19.
// Build a function which returns a function to create a base on which others operations can be added

const createBase = function (inputNumber) {
  return function (anotherInputString) {
    return inputNumber + anotherInputString;
  }
}
const addSix = createBase(6);
addSix(10);



// 23.
// Promise which should resolve after a delay

const customDelay = function (delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), delay * 1000);
  })
}
customDelay(3).then(() => console.log('beep'));

// 24.
// Function to check if two strings are anagrams of each other

const isAnagram = (inputString1, inputString2) => {
  return [...inputString1.toLowerCase().replace(' ', '')].sort().join('').toString() === [...inputString2.toLowerCase().replace(' ', '')].sort().join('').toString();
}

// 26.
// Insert into an array at the right postion

const insertInArray = function (inputArray, inputNumber) {
  for (let i = 0; i < inputArray.length; i++) {
    if (inputNumber === inputArray[i]) return i;
    if (inputNumber < inputArray[i]) {
      inputArray.splice(i, 0, inputNumber);
      return i;
    }
    if (inputArray.length - 1 === i) {
      inputArray.push(inputNumber);
      return i + 1;
    }
  }
}

// 27. 
// Find the maximum sum of products in two arrays

const array1 = [3, 4, 1, 2];
const array2 = [9, 4, 8, 2];

const findMax = function (inputArray1, inputArray2) {
  const arr1 = inputArray1.sort((a, b) => a - b);
  const arr2 = inputArray2.sort((a, b) => a - b);
  let sum = 0;
  let sumString = '';

  for (let i = arr1.length - 1; i >= 0; i--) {
    sum += arr1[i] * arr2[i];
    sumString += arr1[i] + ' * ' + arr2[i] + (i === 0 ? '' : ' + ');
  }

  console.log(`${sum} = ${sumString}`);
};

// 28.
// Array left circulation

const leftCirc = function (inputArray, step) {
  const newArr = [...inputArray];
  for (let i = 0; i < step; i++) {
    newArr.push(newArr[0]);
    newArr.splice(0, 1);
  }
  return newArr;
}

function circularArrayRotation(arr, k) {
  //Perform the operations k times
  for (let i = 0; i < k; i++) {
    arr.push(arr.shift());
  }
  return arr;
}

// 29.
// Array right circulation

const rightCirc = function (inputArray, step) {
  const newArr = [...inputArray];
  for (let i = 0; i < step; i++) {
    newArr.splice(0, 0, newArr[newArr.length - 1]);
    newArr.pop();
  }
  return newArr;
}

function circularArrayRotation(arr, k) {
  //Perform the operations k times
  for (let i = 0; i < k; i++) {
    arr.unshift(arr.pop());
  }
  return arr;
}

// 36.
// Convert string to Jadencase

(function (inputString) {
  return inputString.split(' ').map((word => word[0].toUpperCase() + word.slice(1))).join(' ');
})('Hello my name is Fynn');


// 38.
// Return the value of the previous sum

const innerFunc = function () {
  let sum = 0;

  return function (inputNumber = 0) {
    sum += inputNumber;
    return sum;
  }
}
const sum = innerFunc();

// 39.
// Stack example

class Stack {
  constructor() {
    this.items = [];
  }

  push = function (item) {
    return this.items.push(item);
  }

  pop = function () {
    return this.items.pop();
  }

  peek = function () {
    return this.items[this.items.length - 1];
  }

  isEmpty = function () {
    return this.items.length === 0;
  }

  clear = function () {
    this.items = [];
  }

  size = function () {
    return this.items.length;
  }

  get = function () {
    const copy = [...this.items];
    return copy;
  }
}

// Reverse the stack via recursion
const myStack1 = new Stack();
myStack1.push(1);
myStack1.push(2);
myStack1.push(3);

const reverseFunction = function () {
  let tempStorage = [];
  let lock = false;

  return function (inputStack) {

    if (!inputStack.isEmpty() && !lock) {
      tempStorage.push(inputStack.pop());
      reverseStack(inputStack);
    }
    if (inputStack.isEmpty()) lock = true;

    if (lock && tempStorage.length === 0) {
      return inputStack.get();
    }

    if (lock) {
      inputStack.push(tempStorage.splice(0, 1)[0]);
      reverseStack(inputStack);
    }
  }
}
const reverseStack = reverseFunction();

// 41.
// Add to binary numbers

const bitwiseSum = function (inputString1, inputString2) {
  let carry = 0;
  const input1 = [...inputString1].reverse();
  const input2 = [...inputString2].reverse();

  let solution = input1.map((binary, index) => {
    console.log(binary, input2[index], index, carry);

    if (binary & input2[index]) {
      if (carry === 1) {
        return 1;
      }
      carry = 1;
      return 0;
    }
    if (binary ^ input2[index]) {
      if (carry === 1) {
        return 0;
      }
      return 1;
    }
    if (carry === 1) {
      carry = 0;
      return 1;
    }
    return 0;
  }).reverse();

  return carry === 1 ? '1' + solution.join('') : solution.join('');
}

// 42.
// Swap two numbers without temp variables

const swapNum = function (inputNum1, inputNum2) {
  console.log(`a: ${inputNum1} b: ${inputNum2}`);
  [inputNum1, inputNum2] = [inputNum2, inputNum1];
  console.log(`a: ${inputNum1} b: ${inputNum2}`);
}

const swapNum2 = function (a, b) {
  console.log(`a: ${a} b: ${b}`);
  a = a + b;
  b = a - b;
  a = a - b;
  console.log(`a: ${a} b: ${b}`);
}

// 44.
// Creating a Queue
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue = function (item) {
    this.items.unshift(item);
    return item + ' added to queue!';
  }
  dequeue = function () {
    return this.items.pop();
  }
  front = function () {
    return this.items[0];
  }
  rear = function () {
    return this.items[this.items.length - 1];
  }
  size = function () {
    return this.items.length;
  }
  isEmpty = function () {
    return this.items.length === 0;
  }
}

const reverseQueue = function (inputQueue) {
  const tempArr = [];

  while (!inputQueue.isEmpty()) {
    tempArr.push(inputQueue.dequeue());
  }

  while (tempArr.length > 0) {
    inputQueue.Queue(tempArr.pop());
  }

  return inputQueue;
}

// 45.
// Check for parenthesises

const parenthesisCheck = function (inputString) {
  const tempObj = { '(': 0, ')': 0, '{': 0, '}': 0 };

  [...inputString].forEach(symbol => {
    tempObj[symbol]++;
  });

  if (tempObj['('] !== tempObj[')']) return false;
  if (tempObj['{'] !== tempObj['}']) return false;
  return true;
}

// 46.
// Balanced parenthesis

const balancedParenthesis = function (inputString) {
  const tempArr = [];

  if (inputString.length % 2 === 1) return false;

  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] === '(') tempArr.push('(');
    else if (inputString[i] === '{') tempArr.push('{');
    else if (inputString[i] === ')') {
      if (tempArr[tempArr.length - 1] !== '(') return false;
      else tempArr.pop();
    }
    else if (inputString[i] === '}') {
      if (tempArr[tempArr.length - 1] !== '{') return false;
      else tempArr.pop();
    }
  }

  return true;
}

// 49.
// Most common letter in a string

const mostCommonLetter = function (inputString) {
  const tempArr = [...inputString.replace(new RegExp(' ', 'g'), '').toLowerCase()];
  const dictMap = new Map(tempArr.map(letter => [letter, 0]));
  let mostCommon = '';
  let highestCounter = 0;

  tempArr.forEach(letter => {
    if (dictMap.has(letter)) {
      dictMap.set(letter, dictMap.get(letter) + 1);
      if (highestCounter < dictMap.get(letter)) {
        highestCounter = dictMap.get(letter);
        mostCommon = letter;
      }
    }
  });
  return mostCommon;
}

  // 50.
  // Capitalize each first character in a string

  (function (inputString) {
    const tempArr = inputString.split(' ');
    for (let i = 0; i < tempArr.length; i++) {
      tempArr[i] = tempArr[i][0].toUpperCase() + tempArr[i].slice(1, tempArr[i].length);
    }
    return tempArr.join(' ');
  })('Hello my name is Fynn');


// 52.
// Array Chunking

const chunkArray = function (inputArr, len) {
  const chunkedArr = [];

  for (let i = 0; i <= Math.floor(inputArr.length / len); i++) {
    chunkedArr.push(inputArr.slice(i * len, (i + 1) * len));
  }

  return chunkedArr;
}

// 54.
// Find intersections
function FindIntersection(strArr) {

  const tempArr = strArr[0].replace(new RegExp(' ', 'g'), '').split(',');
  const dict = new Set(tempArr);

  const solution = strArr[1].replace(new RegExp(' ', 'g'), '').split(',').filter((num) => {
    if (dict.has(num)) return true;
  })

  return solution.map(ele => parseInt(ele)).join(',');
}

// 55.
// Equivalent keypresses
function EquivalentKeypresses(strArr) {
  let tmpArr1 = [];
  let tmpArr2 = [];

  const helperFunc = (strArrPart, tmpArr) => {
    strArrPart.split(',').forEach(char => {
      if (char === '-B') tmpArr.pop();
      else tmpArr.push(char);
    });
  };
  helperFunc(strArr[0], tmpArr1);
  helperFunc(strArr[1], tmpArr2);

  return tmpArr1.toString() === tmpArr2.toString();
}

// 56.
// KaprekarsConstant (its always equal 6174)

function KaprekarsConstant(num) {
  let steps = 0;
  let solution = num;

  const helperFunc = (num) => {
    num = [...num + ''];
    while (num.length < 4) num.push('0');
    const tempNum1 = parseInt(num.sort().join(''));
    const tempNum2 = parseInt(num.sort().reverse().join(''));

    if (tempNum1 < tempNum2) return tempNum2 - tempNum1;
    else return tempNum1 - tempNum2;
  }

  while (solution !== 6174) {
    solution = helperFunc(solution);
    steps++;
  }

  return steps;
}

// 61.
//  Questionmarks
/* 
  Check if two integers divided by three question marks add up to a value of ten.
*/

function questionMarks(str) {
  const tempArr = str.replace(/[a-z]/gi, '').split('???').join('').replace(/\\?/g, '');
  let solution = false;

  if (tempArr.length % 2 !== 1) {
    let tempSolution = 0;
    for (let i = 0; i < tempArr.length; i += 2) {
      if (parseInt(tempArr[i]) + parseInt(tempArr[i + 1]) === 10) tempSolution += 1;
    }
    if (tempSolution === tempArr.length / 2) solution = true;
  }

  return solution;
}
questionMarks("arrb6???4xxbl5???eee5");



// 70.
// mostFrequentNumbers
function mostFrequentNumbers(inputArr, k) {
  const dict = new Map();

  for (let i = 0; i < inputArr.length; i++) {
    if (dict.has(inputArr[i] + '')) dict.set(inputArr[i] + '', dict.get(inputArr[i] + '') + 1);
    else dict.set(inputArr[i], 0)
  }

  return [...dict].sort((a, b) => b[1] - a[1]).splice(0, k).map(ele => ele[0]);
}

// 72.
// Matching pairs: Given a list of numbers, find the pair which sums up to a given value

function matchingPairs(inputArr, inputSum) {
  // To eleminate duplicates:
  const tempArr = [...new Set(inputArr)];
  const dict = new Set();
  let solution = 'no solution';

  for (let i = 0; i < tempArr.length; i++) {
    if (dict.has(tempArr[i])) {
      solution = `${tempArr[i]} and ${inputSum - tempArr[i]}`
      break;
    }
    else dict.add(inputSum - tempArr[i]);
  }

  return solution;
}

// 73.
// Consecutive counter: Find the longest sequence of a number in a given array.

function consecutiveCounter(inputArr) {
  const tempSortedArr = inputArr.sort((a, b) => a - b);
  let conNum = tempSortedArr[0];
  let counter = 1;
  let max = 0;

  for (let i = 1; i < tempSortedArr.length; i++) {
    if (conNum + 1 === tempSortedArr[i]) {
      counter += 1;
      if (max < counter) {
        max = counter;
      }
    } else {
      counter = 0;
    }
    conNum = tempSortedArr[i];
  }

  return max;
}

// 74.
// Shuffle a string

function shuffleString(inputString) {
  return [...inputString].sort(() => Math.round(Math.random() - 1));
}

// 77.
// Filter anagrams

function aclean(arr) {
  const dict = new Map();

  arr.forEach(ele => {
    dict.set([...ele.toLowerCase()].sort().join(''), ele);
  });

  return [...dict.values()];
}
// aclean(["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"]);

// 79.
// First non repeated character in a string

function nonRepeat(inputString) {
  const tempArr = [...inputString.toLowerCase()];
  const dict = new Map();
  let solution = '';

  tempArr.forEach(char => {
    if (dict.has(char)) dict.set(char, dict.get(char) + 1);
    else dict.set(char, 1);
  });

  for (let [key, value] of dict.entries()) {
    if (value === 1) {
      solution = key
      break;
    }
  }

  return solution;
}

// 80.
// Find the missing number

function findMissing(inputArr) {
  // const dict = new Set([...Array(100).keys()]);
  const dict = new Set(inputArr);

  for (let i = 0; i < 100; i++) {
    if (!dict.has(i)) return i;
  };
}

function findMissing2(inputArr) {
  return 4950 - inputArr.reduce((acc, cur) => acc + cur, 0);
}

// 83.
// Find longest substring without repeating characters
// Example: abcabcd -> abcd, abdefgf -> abdefg, aaaa -> a, abcadcda -> abc, abcbbcabcd -> abcd

function findSubString(inputString) {
  let tempArr = [];
  let solution = [];
  const dict = new Set();

  for (let i = 0; i < inputString.length; i++) {
    let curr = inputString[i];
    if (!dict.has(curr)) {
      tempArr.push(curr);
      if (tempArr.length > solution.length) solution = [...tempArr];
      dict.add(curr);
    } else {
      tempArr.splice(tempArr.indexOf(curr) + 1).forEach(char => dict.delete(char));
    }
  }

  return solution;
}

// 84. 
// An array represents a number, write a function which adds 1 to it
// Example: [1,7,3] + 1 => [1,7,4], [2,3,9] => [2,4,0], [9,9] => [1,0,0]

function addOne(inputArr) {
  return [...parseInt(inputArr.join('')) + 1 + ''].map(char => parseInt(char));
}

function addOne(inputArr) {
  let solution = [];
  const tempArr = [...inputArr].reverse();
  let carry = 0;

  solution = tempArr.reduce((acc, curr) => {
    if (acc.length === 0) carry = 1;
    if (curr < 9) {
      acc.push(curr + carry);
      carry = 0;
      return acc;
    } else {
      acc.push(0);
      carry = 1;
      return acc;
    }
  }, [])

  if (carry === 1) solution.push(1);

  return solution.reverse();
}

// 89.
// Simple async await promise

function delay3Secs() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('...');
    }, 3000);
  });
}

async function waitForIt() {
  let result = 'What is hiding in the dark?';
  console.log(result);
  result = await delay3Secs();
  console.log(result);
  delay3Secs().then((value) => {
    setTimeout(() => {
      console.log(`${value} 🤡 IT'S HIM!`);
    }, 0);
  });
}

// 90.
// Object with private variable

function obj(first, last) {
  this.name = {
    first,
    last
  }
  this.money = 100;

  return {
    getName: () => this.name.first + ' ' + this.name.last,
    greet: () => `Hi, I'm ${this.name.first}!`,
    incrementMoney: (amount) => this.money += amount,
    getMoney: () => this.money
  }
}
// const myObj = new obj('Fynn', 'Grandke');
// const myObj2 = new obj('Marten', 'Meier');


// 92.
// Randomly reorder an integer array only with rand() and floor()

function randomlyReorder(inputArray) {
  return inputArray.sort((a, b) => Math.random() > 0.5 ? 1 : -1);
}
function randomlyReorderII(inputArray) {
  for (let i = inputArray.length - 1; i >= 1; i--) {
    let randPos = Math.floor((i + 1) * Math.random());
    let temp = inputArray[i];
    inputArray[i] = inputArray[randPos];
    inputArray[randPos] = temp;
  }
  return inputArray;
}

// 93.
// Longest consecutive character

function longestConsec(inputString) {
  let lastChar = null;
  let maxChar = null;
  let max = 0;
  let currCounter = 0;

  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] === lastChar) {
      currCounter += 1;
      if (currCounter > max) {
        max = currCounter;
        maxChar = inputString[i]
      }
    } else {
      currCounter = 1;
      lastChar = inputString[i];
    }
  }

  return {
    [maxChar]: max
  }
}

// 94.
// cons() constructs a pair and car() and cdr() return the first and last element.
/* 
  car(cons(3,4)) = 3
  cdr(cons(3,4)) = 4
*/

const cons = (a, b) => [a, b];
const car = ([x]) => x;
const cdr = ([, ...xs]) => car(xs);