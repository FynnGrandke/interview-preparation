## JavaScript (easy)

<ol>
<li>

<!--- question, input, output goes here -->
Write code to convert an array of strings to an array of the lengths of those strings\
input: `["this", "is", "an", "array"]`\
output: `[4, 2, 2, 5]`
<details>
<summary>
<!--- collapsible text header goes here -->
solution:
</summary>

<!--- collapsible text goes here -->
`inputArr => inputArr.map(element => element.length)`
</details>
</br>
</li>

<li>

<!--- question, input, output goes here -->
Write code to sum an array of numbers\
input: `[1, 2, 3, 4, 5]`\
output: `15`
<details>
<summary>
<!--- collapsible text header goes here -->
solution:
</summary>

<!--- collapsible text goes here -->
`numsArr => numsArr.reduce((acc, currentValue) => acc + currentValue, 0)`
</details>
</br>
</li>


<li>

<!--- question, input, output goes here; line-break is possible with '\' -->
Write a function that can be called like this: `greeter("Hello")("Candidate");`\
output: `Hello, Candidate!`
<details>
<summary>
<!--- collapsible text header goes here -->
solution:
</summary>
<!--- collapsible text goes here -->

```
function greeter(str) {
    return function who(str2) {
        return `${str}, ${str2}!`;
    }
}
```
</details>
<details>
<summary>
explanation:
</summary>
The used the so-called 'currying'. Currying is a function which is accepts fewer arguments than the total number of arguments.
It is a higher order function, since it is implemented as a function returning another function.
Currying is achieved by returning functions from functions.
</details>
</br>
</li>

<li>

<!--- question, input, output goes here -->
What is the output for the following:
```
(function () {
    var a = b = 42;
})();
console.log('a = ', typeof a);
console.log('b = ', typeof b);
```
<details>
<summary>
<!--- collapsible text header goes here -->
solution:
</summary>

<!--- collapsible text goes here -->
```
a = undefined, b = number;
Variable a is undefined because it goes out of scope when the function completes.
b is in the global scope because the keyword var only applies to a.
So, because of hoisting b will be declared in the global scope and thus be available to be logged.
```
</details>
</br>
</li>


<li>

<!--- question, input, output goes here -->
Write a function that returns whether or not a string is a palindrome./
Less than 160 characters is preferred.
input: `abccba`\
output: `true`
<details>
<summary>
<!--- collapsible text header goes here -->
solution:
</summary>

<!--- collapsible text goes here -->
```
let f = s => {
    s = s.replace(/\W/g, '').toLowerCase()
    return [...s].toString() == [...s].reverse().toString()
}
```
</details>
</br>
</li>

<li>

<!--- question, input, output goes here; line-break is possible with '\' -->
Write a sum method which will work properly with these syntaxes:
```
    sum2(2, 3)
    sum2(2)(3)
```
<details>
<summary>
<!--- collapsible text header goes here -->
solution:
</summary>
<!--- collapsible text goes here -->

```
const sum2 = function (a, b?) {
    if (b) {
      return a + b;
    }
    return function (b) {
      return a + b;
    }
}
```
</details>
</br>
</li>

<li>

<!--- question, input, output goes here; line-break is possible with '\' -->
What is the output of the following?
```
var arr1 = "john".split('');
var arr2 = arr1.reverse();
var arr3 = "jones".split('');
arr2.push(arr3);
console.log(arr1.length, arr1.slice(-1));
console.log(arr2.length, arr2.slice(-1));
```
<details>
<summary>
<!--- collapsible text header goes here -->
solution:
</summary>
<!--- collapsible text goes here -->

```
Output will be:
5 j,o,n,e,s
5 j,o,n,e,s

arr1 and arr2 are the same array. (['n','h','o','j',['j','o','n','e','s']])
Because:
  reverse doesnt only returns,
  it returns a refernece as well,
  the array will be pushed as array (and not concatenate)
```
</details>
</br>
</li>

<li>

<!--- question, input, output goes here; line-break is possible with '\' -->
console.log the numbers from 1 to n.\
if 3*x log fizz\
if 5*x log buzz\
if 3*x and 5*x log fizzbuzz\
input: `fizzbuzz(15)`\
output: `fizz buzz fizz buzz fizz fizzbuzz`
<details>
<summary>
<!--- collapsible text header goes here -->

</summary>
<!--- collapsible text goes here -->

```
const fizzbuzz = function(num) {
if (isNaN(num)) return "Parameter is not a number";
    for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log('fizzbuzz');
    else if (i % 3 === 0) console.log('fizz');
    else if (i % 5 === 0) console.log('buzz');
    else console.log(i);
    }
}
```
or
```
for (let i = 1; i <= 100; i++) {
    let f = i % 3 == 0,
        b = i % 5 == 0;
    console.log(f ? (b ? 'FizzBuzz' : 'Fizz') : b ? 'Buzz' : i);
}
```
</details>
</br>
</li>


<li>

<!--- question, input, output goes here; line-break is possible with '\' -->
Anagram functions which checks whether or not two provided strings are the same.\
input: `anagram('fynn', 'nyfn')`\
output: `true`
<details>
<summary>
<!--- collapsible text header goes here -->
solution:
</summary>
<!--- collapsible text goes here -->

```
const anagram = function (str1, str2) {
    return [...str1.replace(/\W/).toLowerCase()].sort().toString() === [...str2.replace(/\W/).toLowerCase()].sort().toString();
}
```
</details>
</br>
</li>

<li>

<!--- question, input, output goes here; line-break is possible with '\' -->
Count the vowels in a given string.\
input: `Aloha! My name is Fynn.`\
Output: `6`
<details>
<summary>
<!--- collapsible text header goes here -->
solution:
</summary>
<!--- collapsible text goes here -->

```
function countVowels(inputString) {
    const dict = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let counter = 0;

    [...inputString].forEach(char => {
        if (dict.has(char)) counter += 1;
    });

    return counter
}
```
</details>
</br>
</li>

<li>

<!--- question, input, output goes here; line-break is possible with '\' -->
Check whether or not a unsorted list contains a given word.\
unsorted list: `const unsortedWords = ["my", "hello", "fynn", "name", "is"]`\
input: `hasWord('Fynn')`\
output: `true`
<details>
<summary>
<!--- collapsible text header goes here -->
solution
</summary>
<!--- collapsible text goes here -->

```
const hasWord = function (word) {
    const dict = [];
    const code = (str) => str.split('').map(char => char.charCodeAt(0)).join('');
    unsortedWords.forEach(ele => {
    dict[code(ele)] = 1;
    });
    return !!dict[code(word)];
}
```
or
```
const hasWord = function (word) {
  return unsortedWords.includes(word);
}
hasWord(unsortedWords);
```
</details>
</br>
</li>

<li>

<!--- question, input, output goes here; line-break is possible with '\' -->
Return the most common word in a given string.\
input: `'hello my name is fynn and this is kind of funny. Is this real?'`\
output: `is`
<details>
<summary>
<!--- collapsible text header goes here -->
solution:
</summary>
<!--- collapsible text goes here -->

```
const findWord = function (inputString) {
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
```
or 
```
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
```
</details>
</br>
</li>

<li>

<!--- question, input, output goes here; line-break is possible with '\' -->
Check if a number is an integer.\
input: `13`\
output: `true`
<details>
<summary>
<!--- collapsible text header goes here -->
solution:
</summary>
<!--- collapsible text goes here -->

```
const checkForInteger = function (inputNumber) {
    return inputNumber % 1 === 0;
}
```
</details>
</br>
</li>

<li>

<!--- question, input, output goes here; line-break is possible with '\' -->
Filter values in an array, so that only unique values remain.\
input: `[1,2,2,3,4,3,2]`\
output: `[1,2,3,4]`
<details>
<summary>
<!--- collapsible text header goes here -->
solution:
</summary>
<!--- collapsible text goes here -->

```
const uniquator = function (inputArray: number[]) {
  return [...new Set(inputArray)];
}
```
</details>
</br>
</li>


<li>

<!--- question, input, output goes here; line-break is possible with '\' -->
Create a function which multiplies all given parameters. The length of the parameters can be anything between 1 to n.\
input: `multiplyAll(2, 3, 4)`\
output: `24`
<details>
<summary>
<!--- collapsible text header goes here -->
solution:
</summary>
<!--- collapsible text goes here -->

```
multiplyAll() {
    return [...arguments].reduce((acc, curr) => acc * curr, 1);
}
```
</details>
</br>
</li>


<li>

<!--- question, input, output goes here; line-break is possible with '\' -->
Return the longest word in a given string.\
input: `Hello my name is Fynn!!`\
output: `Hello`
<details>
<summary>
<!--- collapsible text header goes here -->
solution:
</summary>
<!--- collapsible text goes here -->

```
const longestWord = (inputString) => {
    let longest = [''];
    const tempArr = inputString.split(' ');
    tempArr.forEach(word => {
        if (word.length > longest[0].length) {
            longest = [word];
        }
        else if (word.length === longest[0].length) longest.push(word);
    });
    return longest;
```
or
```
const lw = longestWord(sen) => {
    return sen.replace(/[&!?.,]/g, '').split(' ').sort((a, b) => b.length - a.length)[0];
}
```
</details>
</br>
</li>


<li>

<!--- question, input, output goes here; line-break is possible with '\' -->
Write a function that accepts a number N as argument and adds all values from N to 1 and returns the solution.\
input: `4`\
output: `10`\
(N = 4; 4 + 3 + 2 + 1 = 10)
<details>
<summary>
<!--- collapsible text header goes here -->
solution:
</summary>
<!--- collapsible text goes here -->

```
function simpleAdding(num) {
    return num === 1 ? num : num + simpleAdding(num - 1);
}
```
</details>
</br>
</li>

<li>

<!--- question, input, output goes here; line-break is possible with '\' -->
Remove duplicated characters from a string.\
input: `Hello my name is Fynn`\
output: `helo mynaisf`
<details>
<summary>
<!--- collapsible text header goes here -->
solution:
</summary>
<!--- collapsible text goes here -->

```
function removeDuplicates(inputString) {
    return [...new Set(inputString.toLowerCase())].join('');
}
```
</details>
</br>
</li>

<li>

<!--- question, input, output goes here; line-break is possible with '\' -->
Explain what a callback function is.
<details>
<summary>
<!--- collapsible text header goes here -->
solution:
</summary>
<!--- collapsible text goes here -->
A callback function is a function that is passed to another function as an argument and is executed after some operation has been completed. Below is an example of a simple callback function that logs to the console after some operations have been completed.

```
const modifyArray = (arr, callback) => {
  // do something to arr here
  arr.push(100);
  // then execute the callback function that was passed
  callback();
}
const arr = [1, 2, 3, 4, 5];

modifyArray(arr, () => {
  console.log("array has been modified", arr);
});

```
</details>
</br>
</li>

<li>

<!--- question, input, output goes here; line-break is possible with '\' -->
Duplicate an array and append it.
<details>
<summary>
<!--- collapsible text header goes here -->
solution:
</summary>
<!--- collapsible text goes here -->

```
const duplicate = function (inputArray) {
  return [...inputArray, ...inputArray];
}
duplicate([1,2,3]);
```
</details>
</br>
</li>

<li>

<!--- question, input, output goes here; line-break is possible with '\' -->
Reverse a string.\
Input: reverse('Fynn')\
Output: 'nnyF'
<details>
<summary>
<!--- collapsible text header goes here -->
solution:
</summary>
<!--- collapsible text goes here -->

```
const reverse = (inputString) => {
    return [...inputString].reverse().join('')
}
```
</details>
</br>
</li>

<li>

<!--- question, input, output goes here; line-break is possible with '\' -->
Write a factorial function:\
A factorial is function which multiplies the values from N to 1 (4 => 4 * 3 * 2 * 1 = 24).
<details>
<summary>
<!--- collapsible text header goes here -->
solution:
</summary>
<!--- collapsible text goes here -->

```
const firstFactorial = (num) => {
  return num === 1 ? 1 : num * firstFactorial(num - 1);
}
```
</details>
</br>
</li>

<li>

<!--- question, input, output goes here; line-break is possible with '\' -->
Print the sorted nth element from an unsorted list.
<details>
<summary>
<!--- collapsible text header goes here -->
solution:
</summary>
<!--- collapsible text goes here -->

```
const printNthElement = (inputArr, pos) => {
  const sortedArr = [...inputArr].sort((a, b) => a - b);
  return pos < sortedArr.length ? sortedArr[pos - 1] : 'out of range';
}
```
</details>
</br>
</li>

</ol>