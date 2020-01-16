
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

const arr = [1, 3, 5, 7, 8, 9];
const binarySearch = function (arr, num) {
  if (arr.length === 1 && arr[0] !== num) return 'not found';
  const len = Math.floor(arr.length / 2);
  const midEle = arr[len];
  if (num < midEle) return binarySearch(arr.slice(0, len), num);
  if (num > midEle) return binarySearch(arr.slice(len), num);
  if (num === midEle) return 'found';
}

// 15.
/* 
  Write 2 Functions.
  They receive an array of functions and notify using a promise when they are finished.
  First function doesn't care about the order, the second does.
*/

const promiseFunc1 = function (arrayOfFunctions) {
  return Promise.all(arrayOfFunctions.map(func => func()));
}

const loadScript = function (src) {
  return new Promises(function (resolve, reject) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Error with ${src}`));

    document.head.append(script);
  });
}

let promise = loadScript('http://some-source');

promise.then(
  script => alert(`${script.src} is loaded`),
  error => alert(`Error: ${error.message}`)
);

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


// 18. 
// Closure for a private counter

(function (name) {
  let counter = 9;
  return {
    'retrieve': function () {
      return `Hey ${name}, Counter is currently at ${counter}`;
    },
    'increase': function () {
      counter++;
      return this;
    }
  }
})('Fynn').increase().retrieve();

// 19.
// Build a function which returns a function to create a base on which others operations can be added

const createBase = function (inputNumber) {
  return function (anotherInputString) {
    return inputNumber + anotherInputString;
  }
}
const addSix = createBase(6);
addSix(10);


// 21.
// What is a callback function?

/* 
  A callback function is a function that is passed to another function as an argument and 
  is executed after some operation has been completed. 
  Below is an example of a simple callback function that logs to the console after some operations have been completed.
 */
function modifyArray(arr, callback) {
  // do something to arr here
  arr.push(100);
  // then execute the callback function that was passed
  callback();
}

var arr = [1, 2, 3, 4, 5];

modifyArray(arr, function () {
  console.log("array has been modified", arr);
});

// 22.
// Duplicate an array and append it

const duplicate = function (inputArray) {
  return [...inputArray, ...inputArray];
}

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

// 25. 
// Recursive binary search

const binarySearch = (inputArray, searchValue) => {
  if (inputArray.length === 1 && inputArray[0] !== searchValue) return 'not found';

  const halfLength = Math.floor(inputArray.length / 2);
  const midEle = inputArray[halfLength];

  console.log(midEle, searchValue, inputArray);

  if (midEle > searchValue) return binarySearch(inputArray.slice(0, halfLength), searchValue);
  if (midEle < searchValue) return binarySearch(inputArray.slice(halfLength, inputArray.length), searchValue);
  if (midEle === searchValue) return 'found';
}

// 25.
// Revealing Module Pattern design pattern

var Exposer = (function () {
  var privateVariable = 10;

  var privateMethod = function () {
    console.log('Inside a private method!');
    privateVariable++;
  }

  var methodToExpose = function () {
    console.log('This is a method I want to expose!');
  }

  var otherMethodIWantToExpose = function () {
    privateMethod();
  }

  return {
    first: methodToExpose,
    second: otherMethodIWantToExpose
  };
})();

Exposer.first();        // Output: This is a method I want to expose!
Exposer.second();       // Output: Inside a private method!
Exposer.methodToExpose; // undefined

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
  const arr1 = inputArray1.sort();
  const arr2 = inputArray2.sort();
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

// 30.
// Find the second occurence of a letter and return its location

const exampleString = 'Hello my name is Fynn';

const findSecondOccurence = function (inputString, inputLetter) {
  return inputString.toLowerCase().indexOf(inputLetter, inputString.toLowerCase().indexOf(inputLetter) + 1);
}


// 32.
// Check if string has duplicated letters

(function (inputString) {
  return (new Set(inputString.toLowerCase())).size === [...inputString].length;
})('This is my strIng');


// 34.
// Decide which characters have to be deleted to make two strings an anagram

const makeAnagram = function (inputString1, inputString2) {
  const dict1 = new Set(inputString1);
  const dict2 = new Set(inputString2);

  let toDelete1 = '';
  let toDelete2 = '';

  [...inputString1].forEach((letter) => {
    if (!dict2.has(letter)) toDelete1 += letter;
  });

  [...inputString2].forEach((letter) => {
    if (!dict1.has(letter)) toDelete2 += letter;
  });

  return `Delete ${[...toDelete1].join(' ')} from String1 and ${[...toDelete2].join(' ')} from String2. ${(toDelete1 + toDelete2).length}`;
}

// 35.
// Check if there is a 0 sum

const isZeroSum = function (inputArray) {
  const dict = new Set();
  let sum = 0;
  let isFound = false;

  dict.add(0);

  inputArray.forEach((num) => {
    sum += num;

    if (dict.has(sum)) isFound = true;

    dict.add(sum);
    dict.add(-sum);
  });

  return isFound;
};


// 36.
// Convert string to Jadencase

(function (inputString) {
  return inputString.split(' ').map((word => word[0].toUpperCase() + word.slice(1))).join(' ');
})('Hello my name is Fynn');


// 37. 
// Find missing letters to make a string a Panagram

(function (inputString) {
  const abc = 'abcdefghijklmnopqrstuvwxyz';
  const dict = new Set(abc);

  (new Set(inputString.toLowerCase())).forEach(letter => {
    dict.delete(letter);
  })

  return [...dict];
})('Hello my name is Fynn')

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

// 40.
// Dutch flag problem [0,1,2]

const sort = function (inputArray) {
  const tempArray = [];
  let zerosCounter = 0;

  inputArray.forEach(num => {
    if (num === 0) {
      tempArray.unshift(num);
      zerosCounter++;
    } else if (num === 1) tempArray.splice(zerosCounter, 0, num);
    else if (num === 2) tempArray.push(num);
  });

  return tempArray;
}

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

// 43.
// Selection Sort

const selectionSort = function (arr) {
  const tempArr = [...arr];

  //Loop till the second last element
  for (let i = 0; i < arr.length - 1; i++) {

    //Loop after the i till the last element
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        tempArr[i] = arr[j];
        tempArr[j] = arr[i];
      }
    };
  };
  return tempArr;
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

// 47.
// Write a function which takes two strings and returns the longest common subsequence

const findSub = function (s1, s2) {
  // Delete all unnecessary characters
  const dict1 = new Set(s1);
  const dict2 = new Set(s2);
  let as1 = [...s1];
  let as2 = [...s2];

  as2.forEach((ele, idx) => {
    if (!dict1.has(ele)) as2.splice(idx, 1);
  });

  as1.forEach((ele, idx) => {
    if (!dict2.has(ele)) as1.splice(idx, 1);
  });

  // Recursive approach to iterate over the arrays
  // If match then continue with the next
  let solution = '';
  let tempSol = '';

  const reverseCheck = function (idx1, idx2) {
    for (let i = idx1; i < as1.length; i++) {
      for (let j = idx2; j < as2.length; j++) {
        if (as1[i] === as2[j]) {
          tempSol += as1[i];
          if (idx1 !== (as1.length - 1) || idx2 !== (as2.length - 1)) reverseCheck(i + 1, j + 1);
        }
        if (tempSol.length > solution.length) solution = tempSol;
        if (j === as2.length - 1) tempSol = '';
      }
    }
    return solution;
  }
  reverseCheck(0, 0);

  return 'Substring is: ' + solution;
};
findSub('AGGTABZ', 'GXTXBYA');


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

//  51. 
// Reverse a word
(function (inputString) {
  return [...inputString].reverse().join('');
})('Fynn');


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

// 57.
// Chessboard traveling 

function ChessboardTraveling(str) {
  const tempStr = str.replace(/\(|\)| /g, '');
  const baseCoord = [...tempStr.substring(0, 2)].map(stringNum => parseInt(stringNum));
  const targetCoord = [...tempStr.substring(2)].map(stringNum => parseInt(stringNum));
  let counter = 0;

  const helperFunc = function (posX, posY) {
    if (posX == targetCoord[0] && posY == targetCoord[1]) {
      counter++;
    } else {
      if (posY < targetCoord[1]) helperFunc(posX, posY + 1);
      if (posX < targetCoord[0]) helperFunc(posX + 1, posY);
    }
  }

  helperFunc(...baseCoord);

  return counter;
}
ChessboardTraveling('(1 1)(3 3)');

// 58.
// Maximal square

function maximalSquare(inputArray) {
  let solution = 0;

  for (let i = 0; i < inputArray.length; i++) {
    let tempSeq = '';
    for (let k = 0; k < inputArray[i].length; k++) {
      if (inputArray[i][k] === '1') {
        tempSeq += k + '';
        for (let j = 1; j <= tempSeq.length; j++) {
          if ((i + j) < inputArray.length && inputArray[i + j][parseInt(tempSeq[j - 1])] === '1') {
            if (solution < (tempSeq.length - 1) * j) solution = (tempSeq.length - 1) * j;
          } else {
            if (Math.sqrt(solution) % 1 !== 0) solution = 1;
            break;
          }
        }
      }
      else tempSeq = 0;
    }
  }

  return solution;
}
maximalSquare(["0111", "1111", "1111", "1111"]);

// 59.
// Find correct path in a 5x5 matrix
function CorrectPath(str) {
  let r = 4;
  let d = 4;
  let lastChar = '';

  [...str].forEach(char => {
    switch (char) {
      case 'r':
        r--;
        break;
      case 'l':
        r++;
        break;
      case 'u':
        d++;
        break;
      case 'd':
        d--;
        break;
      default:
        break;
    }
  });

  return [...str].map(char => {
    if (char === '?') {
      if (lastChar !== 'l') {
        if (d <= 0) {
          d++;
          return 'u';
        }
        else {
          d--;
          return 'd';
        }
      }
      if (lastChar !== 'u') {
        if (r <= 0) {
          r++;
          return 'l';
        }
        else {
          r--;
          return 'r';
        }
      }
    } else return char;

  }).join('');
}
/* Input: "???rrurdr?"
Output: dddrrurdrd
Input: "drdr??rrddd?"
Output: drdruurrdddd */

// 60.
// Scale balancing

function scaleBalancing(strArr) {
  const currentWeights = JSON.parse(strArr[0]).sort();
  const availableWeights = JSON.parse(strArr[1]);

  const difference = Math.abs(currentWeights[0] - currentWeights[1]);

  if (availableWeights.find(num => num === difference)) return difference;

  const filterValuesSmall = availableWeights.filter(num => num < difference);
  const filterValuesBig = availableWeights.filter(num => num > difference);

  for (let i = 0; i < filterValuesSmall.length; i++) {
    for (let k = i + 1; k < filterValuesSmall.length; k++) {
      if (filterValuesSmall[i] + filterValuesSmall[k] === difference) return filterValuesSmall[i] + '' + filterValuesSmall[k];
    }
  }

  for (let i = 0; i < filterValuesBig.length; i++) {
    for (let k = 0; k < availableWeights.length; k++) {
      if (currentWeights[0] + filterValuesBig[i] === currentWeights[1] + availableWeights[k]) return filterValuesBig[i] + '' + filterValuesBig[1];
    }
  }

  return 'not found';

}
scaleBalancing(["[5, 9]", "[1, 2, 6, 7]"]);

// 61.
//  Questionmarks

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

// 62.
// Factorial 4 => 4 * 3 * 2 * 1 = 24

function firstFactorial(num) {
  return num === 1 ? 1 : num * firstFactorial(num - 1);
}

// 64.
// Find the closest enemy in a 2d array

function closestEnemyII(strArr) {
  const targetPos = new Map();
  const startPos = [];
  let distance = 0;

  for (let i = 0; i < strArr.length; i++) {
    for (let k = 0; k < strArr[i].length; k++) {
      if (strArr[i][k] === '1') startPos.push(i, k);
      if (strArr[i][k] === '2') targetPos.set(i, k);
    }
  }

  for (let [key, value] of targetPos) {
    let tempDistance = 0;
    let tempVar = strArr[0].length - Math.abs((value - startPos[1]));

    if (key !== startPos[0]) tempDistance += Math.abs(key - startPos[0]);
    if (tempVar > strArr[0].length / 2) tempVar = strArr[0].length - tempVar;

    tempDistance += tempVar;

    if (tempDistance < distance || distance === 0) distance = tempDistance;
  }

  return distance;
}
closestEnemyII(["0000", "1000", "0002", "0002"]);

// 65. 
// Find a square of vowels

function vowelSquare(strArr) {
  const isVowelDict = new Set('aeiou');
  let solution = 'not found';

  for (let i = 0; i < strArr.length; i++) {
    for (let k = 0; k < strArr[i].length; k++) {
      if (isVowelDict.has(strArr[i][k])) {
        if (i < (strArr.length - 1) &&
          isVowelDict.has(strArr[i + 1][k]) &&
          isVowelDict.has(strArr[i + 1][k + 1])) {
          solution = i + '-' + k;
          break;
        }
      }
    }
  }

  return solution;
}
vowelSquare(["aqrst", "ukaei", "ffooo"]);

// 66.
// Simple adding

function simpleAdding(num) {
  return num === 1 ? num : num + simpleAdding(num - 1);
}

// 67.
// Regex Selfmade

const regexFunc = function (s, p) {
  const stringArr = [...s];
  const patternArr = [...p].reduce((acc, curr) => {
    if (curr === '*') acc[acc.length - 1] += '*';
    else acc.push(curr);
    return acc;
  }, []);
  let stringArrPos = 0;

  for (let i = 0; i < patternArr.length; i++) {
    if (patternArr[i].length === 2) {
      while (stringArr[stringArrPos] === patternArr[i][0] || patternArr[i][0] === '.' && stringArrPos < stringArr.length) stringArrPos += 1;
    } else {
      if (stringArr[stringArrPos] !== patternArr[i]) return false;
      stringArrPos += 1;
    }
    if (stringArrPos === stringArr.length) return true;
  }
  return false;
}
regexFunc('aab', 'c*a*b'); // true
regexFunc('abbb', 'ab*');  // true
regexFunc('aba', 'ab'); // false
regexFunc('aaa', '.*');  // true
regexFunc('aaa', 'a*.'); // true

// 68.
// Meeting optimization

function meetingOptimization(meetings, haveHours) {
  let sortedMeetings = meetings.sort((a, b) => a.hours - b.hours);
  let usedHours = haveHours;

  sortedMeetings = meetings.reduce((acc, curr) => {
    if (usedHours > 0 && curr.hours <= usedHours) {
      usedHours -= curr.hours;
      acc.push(curr);
    }
    return acc;
  }, []);

  return sortedMeetings;
}
function allDayLongMeeting(meetings, haveHours) {
  let sortedMeetings = meetings.sort((a, b) => b.hours - a.hours);
  let solution = [];
  let maxHours = 0;

  if (sortedMeetings.length === 1) return sortedMeetings;

  const recursive = function (idx, tmpS, tmpSol) {

    let tempSum = tmpS;
    let tempSolution = [...tmpSol];
    let i = idx;

    // Break condition
    if (!(sortedMeetings.length > idx)) {
      if (tempSum === maxHours) {
        solution = [];
        solution = [...tempSolution];
      }
      return;
    }

    console.log(sortedMeetings[idx], idx, tmpS, tmpSol);
    while (sortedMeetings.length > i) {
      tempSum += sortedMeetings[i].hours;
      if (tempSum <= haveHours) {
        tempSolution.push(sortedMeetings[i]);
        if (tempSum > maxHours) {
          maxHours = tempSum;
        }
        recursive(i + 1, tempSum, tempSolution);
      } recursive(i + 1, tmpS, tmpSol)
      i += 1;
    }
  }

  recursive(0, 0, []);

  return solution;
}
meetingOptimization([
  { name: 'Meeting12', hours: 12 },
  { name: 'Meeting7', hours: 7 },
  { name: 'Meeting4', hours: 4 },
  { name: 'Meeting3', hours: 3 },
  { name: 'Meeting2', hours: 2 },
  { name: 'Meeting2', hours: 2 }
], 8);

// 69.
// Print the sorted nth element from an unsorted list

function printNthElement(inputArr, pos) {
  const sortedArr = [...inputArr].sort((a, b) => a - b);
  return pos < sortedArr.length ? sortedArr[pos - 1] : 'out of range';
}

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

// 71.
// coin change -> return the amount of coins

function coinChange(cents) {
  // available coins 50, 10, 5, 1
  // 87 = 25 * 3 + 10 * 1 + 5 * 0 + 1 * 2
  let solution = 100;
  const availableCoins = [25, 10, 5, 1];

  const recursiveCount = function (idx, inputRest, inputSolution) {
    let i = idx;
    let tempRest = inputRest;
    let tempSolution = inputSolution;

    if (availableCoins.length === idx) return

    while (tempRest / availableCoins[i] >= 1) {
      tempSolution += 1;
      tempRest -= availableCoins[i];

      if (tempRest < availableCoins[i]) {
        recursiveCount(i + 1, tempRest, tempSolution);
      }

      if (tempRest === 0 && tempSolution < solution) {
        solution = tempSolution;
      }
    }
    if (tempRest > 0) recursiveCount(i + 1, inputRest, inputSolution);
  }

  recursiveCount(0, cents, 0);

  return solution;
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

// 75.
// Recursive stairways problem: Return the number of possible ways of using the steps you can take from the step array

function numWays(inputN, steps) {
  if (inputN === 0) return 0;

  let total = 0;

  steps.forEach((step) => {
    if (inputN - step >= 0) total += numWays(inputN - step, steps);
  });

  return total;
}

function numWays_bottomUp(inputN, steps) {
  if (inputN === 0) return 1;

  const nums = [1]

  for (let i = 1; i <= inputN; i++) {
    let total = 0;
    steps.forEach((step) => {
      if (i - step >= 0) total += nums[i - step];
    });
    nums[i] = total;
  }

  return nums[inputN];
}

// 76.
// Given two arrays find the pair of number from each array which is the closes to the given number.

function findClosesPair(inputArray1, inputArray2, targetNum) {
  const dict = new Set(inputArray1);
  let solution = [];
  let highestDiff = targetNum;

  inputArray2.forEach(num1 => {
    if (dict.has(targetNum - num1)) {
      if (highestDiff !== 0) solution = [];
      solution.push();
      highestDiff = 0;
    } else if (highestDiff !== 0) {
      [...dict.keys()].forEach(num2 => {
        let tempHd = Math.abs(num1 + num2 - targetNum);
        if (highestDiff > tempHd) {
          highestDiff = tempHd;
          solution = [];
        }
        if (highestDiff === tempHd) solution.push([num1, num2]);
      });
    }
  });

  return solution;
}

// second solution

function findClosesPair2(inputArray1, inputArray2, targetNum) {
  const dict = new Set(inputArray1);
  let solution = [];
  let x = 0;

  while (true) {
    inputArray2.forEach(num1 => {
      if (dict.has((targetNum - x) - num1)) solution.push([num1, (targetNum - x) - num1]);
      if (dict.has((targetNum + x) - num1)) solution.push([num1, (targetNum + x) - num1]);
    });
    if (solution.length !== 0) break;
    x += 1;
  }

  return solution;
}
// findClosesPair2([-1,3,8,2,9,5], [4,1,2,10,5,20], 24);


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

// 78.
// merge sort

function mergeSort(arr) {
  const rightPart = arr;

  if (arr.length < 2) return arr;

  return merge(mergeSort(rightPart.splice(0, Math.floor(arr.length / 2))), mergeSort(rightPart));
}

function merge(leftArr, rightArr) {
  const tempArr = [];

  while (leftArr.length && rightArr.length) {
    if (leftArr[0] < rightArr[0]) tempArr.push(leftArr.shift());
    else tempArr.push(rightArr.shift());
  }

  return [...tempArr, ...leftArr, ...rightArr];
}

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

// 81.
// binary search

function binarySearch(inputArr, val) {
  const tempArr = [...inputArr];
  if (tempArr.length === 1) {
    return tempArr[0] === val ? true : false;
  }

  const halfLen = Math.floor(tempArr.length / 2);
  const leftPart = tempArr.splice(0, halfLen);

  return inputArr[halfLen] > val ? binarySearch(leftPart, val) : binarySearch(tempArr, val);
}

// 82.
// Remove duplicated characters from a string

function removeDuplicates(inputString) {
  return [...new Set(inputString.toLowerCase())].join('');
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

// 85.
// How many ways to decode. a = 1, b = 2, ..., z = 26;

function decodeWays(inputNumber) {
  if (!inputNumber) return 1;
  let twoFlag = false;
  return [...inputNumber + ''].reduce((acc, curr, currIdx, arr) => {
    const num = parseInt(curr);
    let tempRes = 0;
    if (num === 1 && currIdx !== arr.length - 1) tempRes = 1;
    if (twoFlag && num < 7) tempRes += 1;
    if (num === 2) twoFlag = true;
    else twoFlag = false;
    if (num === 0) return acc + tempRes;
    return acc + 1 + tempRes;
  }, 0);
}

// 86.
// Calculating the maximum distance of points to its source and return the two closes ones

function closesPoints(inputArr) {
  const dict = new Map();
  const [result1, result2] = inputArr.map(subArr => {
    const sum = Math.sqrt(Math.pow(subArr[0], 2) + Math.pow(subArr[1], 2));
    if (dict.has(sum)) dict.set(sum, [...dict.get(sum), subArr]);
    else dict.set(sum, [subArr]);
    return sum;
  }).sort((a, b) => a - b).splice(0, 2);

  if (dict.get(result1).length > 1) return dict.get(result1).splice(0, 2);
  else if (dict.get(result2).length > 1) return dict.get(result2).splice(0, 2);
  else return [dict.get(result1), dict.get(result2)];
}

// 87.
// Subarray with the highest sum
let highestSum = 0;
function longestSubarray(arr, start, end) {
  if (end === arr.length) return;

  if (start > end) return longestSubarray(arr, 0, end + 1);
  else {
    let tempSum = 0;
    for (let i = start; i < end; i++) {
      tempSum += arr[i];
    }
    if (tempSum > highestSum) highestSum = tempSum;
    return longestSubarray(arr, start + 1, end);
  }
}
longestSubarray([1, -3, 2, 1, -1], 0, 0);

// 88.
// Log all the subarrays of an array 

function logSubarrays(arr, start, end) {
  if (end === arr.length) return;
  if (start > end) return logSubarrays(arr, 0, end + 1);
  else {
    let printArr = [];
    for (let i = start; i <= end; i++) {
      printArr.push(arr[i]);
    }
    console.log(printArr);
    return logSubarrays(arr, start + 1, end);
  }
}
logSubarrays([1, 2, 3, 4], 0, 0);

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
const myObj = new obj('Fynn', 'Grandke');
const myObj2 = new obj('Marten', 'Meier');

// 91.
// Recursive approach for sub sequence

function logSubSeq(inputString, length, index, currString) {
  if (length === 0) return

  console.log(currString);

  for (let i = index; i < length; i++) {
    currString += inputString[i];
    logSubSeq(inputString, length, i + 1, currString);
    currString = currString.slice(0, -1);
  }
}
function allSubs(inputString) {
  logSubSeq(inputString, inputString.length, 0, '');
}
allSubs('abc');


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

function isHoppable(towers) {
  return hopp(towers, 0, towers[0])
}

function hopp(towers, pos, maxHoppDist) {
  let nextHoppDist = 0;
  let nextPos = 0;

  if (maxHoppDist + pos > towers.length) return true;
  if (maxHoppDist === 0) return false;

  for (let i = pos + 1; i <= pos + maxHoppDist; i++) {
    if (towers[i] > nextHoppDist) {
      nextHoppDist = towers[i];
      nextPos = i;
    }
  }

  return nextHoppDist === 0 ? false : hopp(towers, nextPos, nextHoppDist);
}

// 95.
// Fibonacci - return the nth element of the fibonacci sequence

function fibonacci(n) {
  const seq = [1, 1];
  for (let i = 1; i < n - 1; i++) {
    seq.push(seq[i - 1] + seq[i - 2]);
  }
  return seq[n - 1];
}

// 96. 
// Print all subsequences of this a string

function logSubSeq(inputString, length, index, currString) {
  if (length === 0) return

  console.log(currString);

  for (let i = index; i < length; i++) {
    currString += inputString[i];
    logSubSeq(inputString, length, i + 1, currString);
    currString = currString.slice(0, -1);
  }
}
function allSubs(inputString) {
  logSubSeq(inputString, inputString.length, 0, '');
}
allSubs('abc');

// 97.

function redundant(inputString) {
  return function () {
    return inputString;
  }
}
redundant('apple');

// 98.
function sevenBoom(arr) {
  return arr.find((num) => {
    return [...(num + '')].find(char => char === '7');
  }) ? "Boom!" : "there is no 7 in the array"
}

// 99.
// Word chain everytime only add one letter OR change one letter

function isWordChain(inputArr) {
  if (inputArr.length < 2) return true;
  return helpFunc(inputArr, 0, inputArr[0]);
}

function helpFunc(baseArr, pos, prevWord) {
  if (pos === baseArr.length - 1) return true;
  let currWord = baseArr[pos + 1];
  if (currWord.length === prevWord.length) {
    let changedLetters = 0;

    for (let i = 0; i < currWord.length; i++) {
      if (currWord[i] !== prevWord[i]) {
        changedLetters += 1;
      }
    }

    if (changedLetters === 1) return helpFunc(baseArr, pos + 1, currWord);
  } else {
    if (currWord.length === prevWord.length - 1 || currWord.length === prevWord.lenth + 1) return helpFunc(inputArr, pos + 1, currWord);
  }
  return false;
}

// 100.
// Word buckets

function bucketize(inputArray, size) {
  return inputArray.split(' ').reduce((acc, curr, idx) => {
    let temp = acc;
    if (idx === 0) temp.push(curr);
    else if (curr.length + 1 <= (size - temp[temp.length - 1].length)) temp[temp.length - 1] += ' ' + curr;
    else temp.push(curr);
    return temp;
  }, []);
}

