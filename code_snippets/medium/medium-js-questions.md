<ol>
<li>

<!--- question, input, output goes here; line-break is possible with '\' -->
Return the entry of the fibonacci sequence for the provided number.\
input: `10`\
output: `34`
<details>
<summary>
<!--- collapsible text header goes here -->
solution:
</summary>
<!--- collapsible text goes here -->

```
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
```
or
```
const fibfib = function (num) {
  if (num < 2) return num;
  return fibfib(num - 2) + fibfib(num - 1)
}
```
</details>
</br>
</li>

<li>

<!--- question, input, output goes here; line-break is possible with '\' -->
Implement a binary search to find a number in a array of numbers.\
input: `[1,3,4,6,8,9], 3`\
output: `found`
<details>
<summary>
<!--- collapsible text header goes here -->
solution:
</summary>
<!--- collapsible text goes here -->

```
const binarySearch = function (arr, num) {
  if (arr.length === 1 && arr[0] !== num) return 'not found';
  const len = Math.floor(arr.length / 2);
  const midEle = arr[len];
  if (num < midEle) return binarySearch(arr.slice(0, len), num);
  if (num > midEle) return binarySearch(arr.slice(len), num);
  if (num === midEle) return 'found';
}
```
</details>
</br>
</li>

<li>

<!--- question, input, output goes here; line-break is possible with '\' -->
Reverse each word in a string.\
input: `Hello my name is Fynn`\
output: `olleH ym eman si nnyF`
<details>
<summary>
<!--- collapsible text header goes here -->
solution:
</summary>
<!--- collapsible text goes here -->

```
const wordReverse = function (inputString) {
  return inputString.split(' ').map(word => [...word].reverse().join('').toString()).join(' ');
}
```
</details>
</br>
</li>

<li>

<!--- question, input, output goes here; line-break is possible with '\' -->
Create a function which multiplies 3 values like this:\
`mul(2)(3)(4)`
<details>
<summary>
<!--- collapsible text header goes here -->
solution:
</summary>
<!--- collapsible text goes here -->

```
const mul = function (number1) {
  return function (number2) {
    return function (number3) {
      return number1 * number2 * number3;
    }
  }
}
```
</details>
</br>
</li>

<li>

<!--- question, input, output goes here; line-break is possible with '\' -->
Build a function which returns a function to create a base on which others operations can be added.\
input: `const addSix = createBase(6); addSix(10);`
output: `16`
<details>
<summary>
<!--- collapsible text header goes here -->
solution:
</summary>
<!--- collapsible text goes here -->

```
const createBase = function (inputNumber) {
  return function (anotherInputString) {
    return inputNumber + anotherInputString;
  }
}
```
</details>
</br>
</li>

<li>

<!--- question, input, output goes here; line-break is possible with '\' -->
Create a function which prints 'beep' to the console after a delay.\
input: `customDelay(3)`\
output: `beep (after 3 seconds)`
<details>
<summary>
<!--- collapsible text header goes here -->
solution:
</summary>
<!--- collapsible text goes here -->

```
const customDelay = function (delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), delay * 1000);
  })
}
customDelay(3).then(() => console.log('beep'));
```
</details>
</br>
</li>

<li>

<!--- question, input, output goes here; line-break is possible with '\' -->
Insert an number into an array at the right postion.\
input: `[1,2,4,6], 3`\
output: `[1,2,3,4,6]`
<details>
<summary>
<!--- collapsible text header goes here -->
solution:
</summary>
<!--- collapsible text goes here -->

```
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
  return inputArray;
}
```
</details>
</br>
</li>

<li>

<!--- question, input, output goes here; line-break is possible with '\' -->
Find the maximum sum of products in two arrays.\
input: `[3, 4, 1, 2], [9, 4, 8, 2]`\
output: `70 = 4 * 9 + 3 * 8 + 2 * 4 + 1 * 2`
<details>
<summary>
<!--- collapsible text header goes here -->
solution:
</summary>
<!--- collapsible text goes here -->

```
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
```
</details>
</br>
</li>

<li>

<!--- question, input, output goes here; line-break is possible with '\' -->
Rotate an array to the left a certain amount of steps.\
input: `[1,2,3,4], 2`\
output: `[3,4,1,2]`
<details>
<summary>
<!--- collapsible text header goes here -->
solution:
</summary>
<!--- collapsible text goes here -->

```
const leftCirc = function (inputArray, step) {
  const newArr = [...inputArray];
  for (let i = 0; i < step; i++) {
    newArr.push(newArr[0]);
    newArr.splice(0, 1);
  }
  return newArr;
}
```
or
```
function circularArrayRotation(arr, k) {
  //Perform the operations k times
  for (let i = 0; i < k; i++) {
    arr.push(arr.shift());
  }
  return arr;
}
```
</details>
</br>
</li>

<li>

<!--- question, input, output goes here; line-break is possible with '\' -->
Rotate an array to the right a certain amount of steps.\
input: `[1,2,3,4], 3`\
output: `[2,3,4,1]`
<details>
<summary>
<!--- collapsible text header goes here -->
solution:
</summary>
<!--- collapsible text goes here -->

```
const rightCirc = function (inputArray, step) {
  const newArr = [...inputArray];
  for (let i = 0; i < step; i++) {
    newArr.splice(0, 0, newArr[newArr.length - 1]);
    newArr.pop();
  }
  return newArr;
}
```
or
```
function circularArrayRotation(arr, k) {
  //Perform the operations k times
  for (let i = 0; i < k; i++) {
    arr.unshift(arr.pop());
  }
  return arr;
}
```
</details>
</br>
</li>

<li>

<!--- question, input, output goes here; line-break is possible with '\' -->
Convert a string to jadencase./
input: `Hello my name is Fynn`\
output: `Hello My Name Is Fynn`
<details>
<summary>
<!--- collapsible text header goes here -->
solution:
</summary>
<!--- collapsible text goes here -->

```
(function (inputString) {
  return inputString.split(' ').map((word => word[0].toUpperCase() + word.slice(1))).join(' ');
})('Hello my name is Fynn');
```
</details>
</br>
</li>

<li>

<!--- question, input, output goes here; line-break is possible with '\' -->
Return the value of the previous sum.\
input: `sum(6); sum(10);`\
output: `6; 16;`
<details>
<summary>
<!--- collapsible text header goes here -->
solution:
</summary>
<!--- collapsible text goes here -->

```
const innerFunc = function () {
  let sum = 0;

  return function (inputNumber = 0) {
    sum += inputNumber;
    return sum;
  }
}
const sum = innerFunc();
```
</details>
</br>
</li>

<li>

<!--- question, input, output goes here; line-break is possible with '\' -->
Write a Stack class and write a function to reverse the stack via recursion.\
<details>
<summary>
<!--- collapsible text header goes here -->
solution:
</summary>
<!--- collapsible text goes here -->

```
class Stack {
  items = [];

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
```
</details>
</br>
</li>


<li>

<!--- question, input, output goes here; line-break is possible with '\' -->
Write a function to add two binary numbers.\
input: `'1010', '1110'`\
output: `'11000'`
<details>
<summary>
<!--- collapsible text header goes here -->
solution:
</summary>
<!--- collapsible text goes here -->

```
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
```
</details>
</br>
</li>


<li>

<!--- question, input, output goes here; line-break is possible with '\' -->
Swap two numbers without temporary variables.\
input: `9, 6`\
output: `6, 9`
<details>
<summary>
<!--- collapsible text header goes here -->
solution:
</summary>
<!--- collapsible text goes here -->

```
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
```
</details>
</br>
</li>


<li>

<!--- question, input, output goes here; line-break is possible with '\' -->
Write a queue class and a function to reverse the queue.\
<details>
<summary>
<!--- collapsible text header goes here -->
solution:
</summary>
<!--- collapsible text goes here -->

```
class Queue {
  items = [];

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
```
</details>
</br>
</li>


<li>

<!--- question, input, output goes here; line-break is possible with '\' -->
Check if the parenthesis are balanced.\
input: `(({}){})`\
output: `true`
<details>
<summary>
<!--- collapsible text header goes here -->
solution:
</summary>
<!--- collapsible text goes here -->

```
const parenthesisCheck = function (inputString) {
  const tempObj = { '(': 0, ')': 0, '{': 0, '}': 0 };

  [...inputString].forEach(symbol => {
    tempObj[symbol]++;
  });

  if (tempObj['('] !== tempObj[')']) return false;
  if (tempObj['{'] !== tempObj['}']) return false;
  return true;
}
```
or
```
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
```
</details>
</br>
</li>


<li>

<!--- question, input, output goes here; line-break is possible with '\' -->
Find the most common letter in a string.\
input: `Not everyone naps, Fynn`\
output: `n`
<details>
<summary>
<!--- collapsible text header goes here -->
solution:
</summary>
<!--- collapsible text goes here -->

```
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
```
</details>
</br>
</li>

<li>

<!--- question, input, output goes here; line-break is possible with '\' -->
Divide an array in chunks of a certain length.\
input: ``\
output: `[[1,2],[3,4],[5,6]]`
<details>
<summary>
<!--- collapsible text header goes here -->
solution:
</summary>
<!--- collapsible text goes here -->

```
const chunkArray = function (inputArr, len) {
  const chunkedArr = [];

  for (let i = 0; i <= Math.floor(inputArr.length / len); i++) {
    chunkedArr.push(inputArr.slice(i * len, (i + 1) * len));
  }

  return chunkedArr;
}
```
</details>
</br>
</li>

<li>

<!--- question, input, output goes here; line-break is possible with '\' -->
Create a function to return how many steps you need to reach the Kaprekars constant from a four digit number.\
input: `1313`\
output: `6`
<details>
<summary>
<!--- collapsible text header goes here -->
solution:
</summary>
<!--- collapsible text goes here -->

```
function KaprekarsConstant(num) {
  let steps = 0;
  let solution = num;

  const helperFunc = (num) => {
    // @ts-ignore TODO: Think about it later
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
```
</details>
</br>
</li>

<li>

<!--- question, input, output goes here; line-break is possible with '\' -->
Check if two integers divided by three question marks add up to a value of ten.\
input: `arrb6???4xxbl5???eee5`\
output: `true`
<details>
<summary>
<!--- collapsible text header goes here -->
solution:
</summary>
<!--- collapsible text goes here -->

```
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
```
</details>
</br>
</li>

<li>

<!--- question, input, output goes here; line-break is possible with '\' -->
Find the most frequent number in an array.\
input: `[1,1,1,2,3,8,7,7,7,2,2,7,8,3], 3`\
output: `[1,7,2]`
<details>
<summary>
<!--- collapsible text header goes here -->
solution:
</summary>
<!--- collapsible text goes here -->

```
function mostFrequentNumbers(inputArr, k) {
  const dict = new Map();

  for (let i = 0; i < inputArr.length; i++) {
    if (dict.has(inputArr[i] + '')) dict.set(inputArr[i] + '', dict.get(inputArr[i] + '') + 1);
    else dict.set(inputArr[i], 0)
  }

  // @ts-ignore TODO: Think about it later
  return [...dict].sort((a, b) => b[1] - a[1]).splice(0, k).map(ele => ele[0]);
}
```
</details>
</br>
</li>
<li>

<!--- question, input, output goes here; line-break is possible with '\' -->
Matching pairs: Given a list of numbers, find the pair which sums up to a given value.\
input: `[1,4,5,7,8], 13`\
output: `8 and 5`
<details>
<summary>
<!--- collapsible text header goes here -->
solution:
</summary>
<!--- collapsible text goes here -->

```
function matchingPairs(inputArr, inputSum) {
  // To eleminate duplicates:
  // @ts-ignore TODO: Think about it later
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
```
</details>
</br>
</li>
<li>

<!--- question, input, output goes here; line-break is possible with '\' -->
 Find the longest sequence of a number in a given array.\
input: `[5,6,3,2,8,12,7,8,8]`\
output: `5,6,7,8`
<details>
<summary>
<!--- collapsible text header goes here -->
solution:
</summary>
<!--- collapsible text goes here -->

```
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
```
</details>
</br>
</li>
<li>

<!--- question, input, output goes here; line-break is possible with '\' -->
Shuffle a string.\
input: `Fynn`\
output: `nynF`
<details>
<summary>
<!--- collapsible text header goes here -->
solution:
</summary>
<!--- collapsible text goes here -->

```
function shuffleString(inputString) {
  return [...inputString].sort(() => Math.round(Math.random() - 1));
}
```
</details>
</br>
</li>
<li>

<!--- question, input, output goes here; line-break is possible with '\' -->
Filter all strings which are anagrams.\
input: `["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"]`\
output: `['PAN', 'hectares', 'era']`
<details>
<summary>
<!--- collapsible text header goes here -->
solution:
</summary>
<!--- collapsible text goes here -->

```
function aclean(arr) {
  const dict = new Map();

  arr.forEach(ele => {
    dict.set([...ele.toLowerCase()].sort().join(''), ele);
  });

  // @ts-ignore TODO: Think about it later
  return [...dict.values()];
}
```
</details>
</br>
</li>

<!--- question, input, output goes here; line-break is possible with '\' -->
Return the first not repeated character in a string.\
input: `hhheejekjlp`\
output: `k`
<details>
<summary>
<!--- collapsible text header goes here -->
solution:
</summary>
<!--- collapsible text goes here -->

```
function nonRepeat(inputString) {
  const tempArr = [...inputString.toLowerCase()];
  const dict = new Map();
  let solution = '';

  tempArr.forEach(char => {
    if (dict.has(char)) dict.set(char, dict.get(char) + 1);
    else dict.set(char, 1);
  });

  // @ts-ignore TODO: Think about it later
  for (let [key, value] of dict.entries()) {
    if (value === 1) {
      solution = key
      break;
    }
  }

  return solution;
}
```
</details>
</br>
</li>

<!--- question, input, output goes here; line-break is possible with '\' -->
Find the missing number in an array(100).\
<details>
<summary>
<!--- collapsible text header goes here -->
solution:
</summary>
<!--- collapsible text goes here -->

```
function findMissing(inputArr) {
  // const dict = new Set([...Array(100).keys()]);
  const dict = new Set(inputArr);

  for (let i = 0; i < 100; i++) {
    if (!dict.has(i)) return i;
  };
}
```
or
```
function findMissing2(inputArr) {
  return 4950 - inputArr.reduce((acc, cur) => acc + cur, 0);
}
```
</details>
</br>
</li>

<!--- question, input, output goes here; line-break is possible with '\' -->
Find longest substring without repeating characters.\
input: `abcabcd`\
output: `abcd`
<details>
<summary>
<!--- collapsible text header goes here -->
solution:
</summary>
<!--- collapsible text goes here -->

```
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
```
</details>
</br>
</li>

<!--- question, input, output goes here; line-break is possible with '\' -->
An array represents a number, write a function which adds 1 to it.\
input: `[2,3,9]`\
output: `[2,4,0]`
<details>
<summary>
<!--- collapsible text header goes here -->
solution:
</summary>
<!--- collapsible text goes here -->

```
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
```
</details>
</br>
</li>

<!--- question, input, output goes here; line-break is possible with '\' -->
Create an object with an first and last name and a private variable money which is incrementable.\
<details>
<summary>
<!--- collapsible text header goes here -->
solution:
</summary>
<!--- collapsible text goes here -->

```
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
```
</details>
</br>
</li>

<!--- question, input, output goes here; line-break is possible with '\' -->
Randomly reorder an integer array only with rand() and floor().\
input: `[1,2,3,4]`\
output: `[2,4,3,1]`
<details>
<summary>
<!--- collapsible text header goes here -->
solution:
</summary>
<!--- collapsible text goes here -->

```
function randomlyReorder(inputArray) {
  return inputArray.sort((a, b) => Math.random() > 0.5 ? 1 : -1);
}
```
or
```
function randomlyReorderII(inputArray) {
  for (let i = inputArray.length - 1; i >= 1; i--) {
    let randPos = Math.floor((i + 1) * Math.random());
    let temp = inputArray[i];
    inputArray[i] = inputArray[randPos];
    inputArray[randPos] = temp;
  }
  return inputArray;
}
```
</details>
</br>
</li>

<!--- question, input, output goes here; line-break is possible with '\' -->
Find the longest consecutive character in a string.\
input: `aaabbcccceeddaa`\
output: `c: 4`
<details>
<summary>
<!--- collapsible text header goes here -->
solution:
</summary>
<!--- collapsible text goes here -->

```
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
```
</details>
</br>
</li>

</ol>