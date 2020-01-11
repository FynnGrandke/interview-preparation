// 1.
/* Write code to convert an array of strings to an array of the lengths of those strings */
var wordsArray = ["this", "is", "an", "array"];
var lengthArray = wordsArray.map(element => element.length);

console.log(`The length for each words in the array is: ${lengthArray}`);

// 2.
/* Write code to sum an array of numbers */
const nums = [1, 2, 3, 4, 5];
const sum = nums.reduce((acc, currentValue) => acc + currentValue, 0);

console.log(`The sum of the array is ${sum}`);

/* 
  Note: The arrow function is the so-called reducer function. 
  It is called for each element in the array. 
  The first argument is the accumulator, the second argument is the current value, the third one is the current index and the fourth is the source array.
  The return value is assigned to the accumulator and so remembered over each iteration.
  The reduce function additionally takes a second argument which is the initial value for the accumulator.
  If no value is passed, the first element of the array will be the initial value.
  If no initial value is given and the array is empty, an error will be thrown. 
  So, there should be always and initial value or otherwise the code should ensure that the array is not empty.
*/

// 3.
/* 
  Write a function that can be called like so: 
  greeter("Hello")("Candidate");
  And will log "Hello, Candidate!" to the console.
*/

function greeter(str) {
  return function who(str2) {
    return `${str}, ${str2}!`;
  }
}

/* 
  The so-called 'currying'. => A function is able to accept fewer than the total number of arguments. (?)
  It is a higher order function, since it is implemented as a function returning another function.
  Currying is achieved by returning functions from functions.
*/

// 4.
/* What is the output for the following:  */
(function () {
  var a = b = 42;
})();

console.log(typeof a);
console.log(typeof b);


/* 
  Answer: a = undefined, b = number;
  Variable is undefined because it goes out of scope when the function completes.
  b is in the global scope because the keyword var only applies to a. 
  So, because of hoisting b will be declared in the global scope and thus be available to be logged.
*/

// 5.
/* 
  Write a function that returns whether or not a string is a palindrome.
  Less than 160 characters is preferred.
*/

const str1 = 'abccba';
const str2 = 'asd';

let f = (s) => {
  s = s.replace(/\W/g, '').toLowerCase()
  return [...s].toString() == [...s].reverse().toString()
}

// 6.
/* 
  Write a sum method which will work properly with these syntaxes:
*/
console.log(sum(2, 3)); // Outputs: 5
console.log(sum(2)(3)); // Outputs: 5

const sum = function (a, b) {
  if (b) {
    return a + b;
  }
  return function (b) {
    return a + b;
  }
}

// 7.
/* 
  What is the output?
*/

var arr1 = "john".split('');
var arr2 = arr1.reverse();
var arr3 = "jones".split('');
arr2.push(arr3);
console.log(arr1.length, arr1.slice(-1));
console.log(arr2.length, arr2.slice(-1));

/* 
Output will be:
5 j,o,n,e,s
5 j,o,n,e,s

arr1 and arr2 are the same array. (['n','h','o','j',['j','o','n','e','s']])
Because:
  reverse doesnt only returns,
  it returns a a refernece as well,
  the array will be pushed as array (and not concatenate)
*/


// 8.
/* 
  console.log the numbers from 1 to n.
  if 3*x log fizz
  if 5*x log buzz
  if 3*x and 5*x log fizzbuzz
*/

const fizzbuzz = function (num) {
  if (isNaN(num)) return "Parameter is not a number";
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log('fizzbuzz');
    else if (i % 3 === 0) console.log('fizz');
    else if (i % 5 === 0) console.log('buzz');
    else console.log(i);
  }
}

// 9. 
/* 
  Anagram functions which checks whether or not two provided strings are the same.
*/

const anagram = function (str1, str2) {
  return [...str1.replace(/\W/).toLowerCase()].sort().toString() === [...str2.replace(/\W/).toLowerCase()].sort().toString();
}

// 10.
// Find the vowels

const countVowels = function (str) {
  let vowelCounter = 0;
  [...str.toLowerCase()].forEach((ele) => {
    if (ele === 'a' || ele === 'e' || ele === 'i' || ele === 'o' || ele === 'u') vowelCounter++;
  });
  return vowelCounter;
}

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

// 13.
// Word search

const unsortedWords = ["my", "hello", "fynn", "name", "is"];

const hasWord = function (word) {
  return unsortedWords.includes(word);
}

const hasWord2 = function (word) {
  const dict = [];
  const code = (str) => str.split('').map(char => char.charCodeAt(0)).join('');
  unsortedWords.forEach(ele => {
    dict[code(ele)] = 1;
  });
  return !!dict[code(word)];
}

class hasWord {
  dict = [];
  constructor(arr) {
    arr.forEach(ele => {
      dict[this.encode(ele)] = 1;
    });
  }

  encode(str) {
    return str.split('').map(char => char.charCodeAt(0)).join('');
  }

  hasWord(word) {
    return !!dict[this.encode(word)];
  }
}

// 14.
// Most common word in a string

const words = 'hello my name is fynn and this is kind of funny. Is this real?';

const findWord = function (str) {
  const wordsArr = str.toLowerCase().split(' ');

  const wordObj = wordsArr.reduce((acc, curr) =>
    (acc.hasOwnProperty(curr) ? { ...acc, [curr]: acc[curr] + 1 } : { ...acc, [curr]: 1 }),
    {}
  );

  let commWord = '';
  let counter = 0;

  for (const property in wordObj) {
    if (wordObj[property] > counter) {
      commWord = property;
      counter = wordObj[property];
    }
  }

  return commWord;
}

const findWord2 = function (inputString) {
  const wordsCounter = {};
  let mostCommonCounter = 0;
  let mostCommonWord = '';
  inputString.split(' ').forEach(word => {
    wordsCounter[word] = wordsCounter[word] || 0;
    wordsCounter[word]++;
  })

  Object.keys(wordsCounter).forEach(word => {
    if (wordsCounter[word] > mostCommonCounter) {
      mostCommonWord = word;
      mostCommonCounter = wordsCounter[word];
    }
    return mostCommonWord;
  })
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

// 20. 
// Check if a number is an integer

const checkForInteger = function (inputNumber) {
  return inputNumber % 1 === 0;
}

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

// 21.
// FizzBuzz

(function () {
  for (let i = 0; i < 100; i++) {
    i % 5 === 0 && i % 3 === 0 ? console.log('FizzBuzz') :
      i % 5 === 0 ? console.log('Buzz') :
        i % 3 === 0 ? console.log('Fizz') :
          console.log(i);
  }
})();

(function () {
  for (let i = 0; i < 100; i++) {
    let output = '';
    if (i % 3 === 0) output += 'Fizz';
    if (i % 5 === 0) output += 'Buzz';
    if (output) console.log(output)
  }
})();

/* for (let i = 1; i <= 100; i++) {
  let f = i % 3 == 0,
    b = i % 5 == 0;
  console.log(f ? (b ? 'FizzBuzz' : 'Fizz') : b ? 'Buzz' : i);
} */

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

// 31.
// Filter unique items from array

const uniquator = function (inputArray) {
  return [...new Set(inputArray)];
}

  // 32.
  // Check if string has duplicated letters

  (function (inputString) {
    return (new Set(inputString.toLowerCase())).size === [...inputString].length;
  })('This is my strIng');

// 33.
// Ceasar Algorithm (encryption)

const ceasar = function (inputString, inputNumber) {

}

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
  console.log(input1, input2);


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

// 48.
// FizzBuzz AGAIN

const fizzBuzz = function () {
  for (let i = 1; i <= 100; i++) {
    let output = '';
    if (i % 3 === 0) output += 'Fizz';
    if (i % 5 === 0) output += 'Buzz';
    if (output === '') console.log(i);
    else console.log(output);
  }
}
fizzBuzz();

// 49.
// Most common letter in a string

const mostCommonLetter = function (inputString) {
  const tempArr = [...inputString.replace(new RegExp(' ', 'g'), '').toLowerCase()];
  const dictMap = new Map(tempArr.map(letter => [letter, 0]));
  let mostCommon = '';
  let highestCounter = 0;

  console.log(tempArr);


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

// 51.
// Longest words in a string
(function (inputString) {
  let longest = [''];
  const tempArr = inputString.split(' ');
  tempArr.forEach(word => {
    if (word.length > longest[0].length) {
      longest = [word];
    }
    else if (word.length === longest[0].length) longest.push(word);
  });
  return longest;
})('Hello my name is fynni');

(function (inputString) {
  let myArr = inputString.split(' ').sort((a, b) => b.length - a.length)
  myArr = myArr.filter((ele) => ele.length === myArr[0].length);

  return myArr;
})('Hello my name is fynni');

// 52.
// Array Chunking

const chunkArray = function (inputArr, len) {
  const chunkedArr = [];

  for (let i = 0; i <= Math.floor(inputArr.length / len); i++) {
    chunkedArr.push(inputArr.slice(i * len, (i + 1) * len));
  }

  return chunkedArr;
}

  // 53.
  // Add all function

  (function () {
    return [...arguments].reduce((acc, curr) => acc * curr, 1);
  })(2, 3, 4);

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

  // code goes here  
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
//  Questions marks
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

// 63. 
// Longest word in a string
function longestWord(sen) {
  return sen.replace(/[&!?.,]/g, '').split(' ').sort((a, b) => b.length - a.length)[0];
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

  for (let i = 0; i < sortedMeetings.length; i++) {
    recursive(i, 0, []);
  }

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
