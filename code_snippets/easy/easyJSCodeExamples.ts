// 1.
easyCode.set(1,
  {
    task: 'Write code to convert an array of strings to an array of the lengths of those strings',
    tests: [
      {
        input: ["this", "is", "an", "array"],
        expect: [4, 2, 2, 5],
        errormsg: 'Values do not equal their respective length'
      }
    ],
    code: inputArr => inputArr.map(element => element.length),
    type: 'Array'
  }
);

// 2.
easyCode.set(2,
  {
    task: 'Write code to sum an array of numbers',
    tests: [
      {
        input: [1, 2, 3, 4, 5],
        expect: 15,
        errormsg: 'Sum is not correct'
      }
    ],
    code: numsArr => numsArr.reduce((acc, currentValue) => acc + currentValue, 0),
    type: 'number'
  }
);


// /* 
//   Note: The arrow function is the so-called reducer function. 
//   It is called for each element in the array. 
//   The first argument is the accumulator, the second argument is the current value, the third one is the current index and the fourth is the source array.
//   The return value is assigned to the accumulator and so remembered over each iteration.
//   The reduce function additionally takes a second argument which is the initial value for the accumulator.
//   If no value is passed, the first element of the array will be the initial value.
//   If no initial value is given and the array is empty, an error will be thrown. 
//   So, there should be always and initial value or otherwise the code should ensure that the array is not empty.
//   I personally value the reducer function as one of the most important built-in functions in whole JS!
// */


// // 3.
// /* 
//   Write a function that can be called like so: 
//   greeter("Hello")("Candidate");
//   And will log  to the console.
// */


// easyCode.set(3,
//   {
//     task: 'Describtive text',
//     tests: [
//       {
//         input: [],
//         expect: "Hello, Candidate!",
//         errormsg: 'Describtive error message'
//       }
//     ],
//     code: function greeter(str) {
//       return function who(str2) {
//         return `${str}, ${str2}!`;
//       }
//     },
//     type: 'string'
//   }
// );

// /* 
//   Note:
//   The so-called 'currying'. => A function is able to accept fewer than the total number of arguments.
//   It is a higher order function, since it is implemented as a function returning another function.
//   Currying is achieved by returning functions from functions.
// */


// // 4.
// /* What is the output for the following:  */
// /* 
// (function () {
//   var a = b = 42;
// })();

// console.log(typeof a);
// console.log(typeof b);
//  */

// /* 
//   Answer: a = undefined, b = number;
//   Variable a is undefined because it goes out of scope when the function completes.
//   b is in the global scope because the keyword var only applies to a. 
//   So, because of hoisting b will be declared in the global scope and thus be available to be logged.
// */


// // 5.
// /* 
//   Write a function that returns whether or not a string is a palindrome.
//   Less than 160 characters is preferred.
// */

// const str1 = 'abccba';
// const str2 = 'asd';

// let f = s => {
//   s = s.replace(/\W/g, '').toLowerCase()
//   return [...s].toString() == [...s].reverse().toString()
// }

easyCode.set(5,
  {
    task: 'Write a function that returns whether or not a string is a palindrome. Less than 160 characters is preferred.',
    tests: [
      {
        input: 'abccba',
        expect: true,
        errormsg: 'Input was a palindrome but got false as output'
      },
      {
        input: 'abc',
        expect: false,
        errormsg: 'Input was not a palindrome but got true as output'
      }
    ],
    code: s => {
      s = s.replace(/\W/g, '').toLowerCase()
      return [...s].toString() == [...s].reverse().toString()
    },
    type: 'boolean'
  }
);


// // 6.
// /* 
//   Write a sum method which will work properly with these syntaxes:
// */

// const sum2 = function (a, b?) {
//   if (b) {
//     return a + b;
//   }
//   return function (b) {
//     return a + b;
//   }
// }
// console.log(sum2(2, 3)); // Outputs: 5
// console.log(sum2(2)(3)); // Outputs: 5


// // 7.
// /* 
//   What is the output?
// */
// /* 
// var arr1 = "john".split('');
// var arr2 = arr1.reverse();
// var arr3 = "jones".split('');
// arr2.push(arr3);
// console.log(arr1.length, arr1.slice(-1));
// console.log(arr2.length, arr2.slice(-1));
//  */
// /* 
// Output will be:
// 5 j,o,n,e,s
// 5 j,o,n,e,s

// arr1 and arr2 are the same array. (['n','h','o','j',['j','o','n','e','s']])
// Because:
//   reverse doesnt only returns,
//   it returns a refernece as well,
//   the array will be pushed as array (and not concatenate)
// */


// // 8.
// /* 
//   console.log the numbers from 1 to n.
//   if 3*x log fizz
//   if 5*x log buzz
//   if 3*x and 5*x log fizzbuzz
// */

// const fizzbuzz = function(num) {
//   if (isNaN(num)) return "Parameter is not a number";
//   for (let i = 1; i <= num; i++) {
//     if (i % 3 === 0 && i % 5 === 0) console.log('fizzbuzz');
//     else if (i % 3 === 0) console.log('fizz');
//     else if (i % 5 === 0) console.log('buzz');
//     else console.log(i);
//   }
// }
// fizzbuzz(100);

//   (function () {
//     for (let i = 0; i < 100; i++) {
//       i % 5 === 0 && i % 3 === 0 ? console.log('FizzBuzz') :
//         i % 5 === 0 ? console.log('Buzz') :
//           i % 3 === 0 ? console.log('Fizz') :
//             console.log(i);
//     }
//   })();

// (function () {
//   for (let i = 0; i < 100; i++) {
//     let output = '';
//     if (i % 3 === 0) output += 'Fizz';
//     if (i % 5 === 0) output += 'Buzz';
//     if (output) console.log(output)
//   }
// })();

// for (let i = 1; i <= 100; i++) {
//   let f = i % 3 == 0,
//     b = i % 5 == 0;
//   console.log(f ? (b ? 'FizzBuzz' : 'Fizz') : b ? 'Buzz' : i);
// }

// const fizzBuzz = function () {
//   for (let i = 1; i <= 100; i++) {
//     let output = '';
//     if (i % 3 === 0) output += 'Fizz';
//     if (i % 5 === 0) output += 'Buzz';
//     if (output === '') console.log(i);
//     else console.log(output);
//   }
// }
// fizzBuzz();


// // 9. 
// /* 
//   Anagram functions which checks whether or not two provided strings are the same.
// */

// const anagram = function (str1, str2) {
//   return [...str1.replace(/\W/).toLowerCase()].sort().toString() === [...str2.replace(/\W/).toLowerCase()].sort().toString();
// }

// // 10.
// // Find the vowels

// const countVowels = function (str) {
//   let vowelCounter = 0;
//   [...str.toLowerCase()].forEach((ele) => {
//     if (ele === 'a' || ele === 'e' || ele === 'i' || ele === 'o' || ele === 'u') vowelCounter++;
//   });
//   return vowelCounter;
// }

// function findVowels(inputString) {
//   const dict = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
//   let counter = 0;

//   [...inputString].forEach(char => {
//     if (dict.has(char)) counter += 1;
//   });

//   return counter
// }


// // 11.
// // Word search

// const unsortedWords = ["my", "hello", "fynn", "name", "is"];

// const hasWord = function (word) {
//   return unsortedWords.includes(word);
// }
// hasWord(unsortedWords);

// const hasWord2 = function (word) {
//   const dict = [];
//   const code = (str) => str.split('').map(char => char.charCodeAt(0)).join('');
//   unsortedWords.forEach(ele => {
//     dict[code(ele)] = 1;
//   });
//   return !!dict[code(word)];
// }

// class hasWordClass {
//   dict = [];
//   constructor(arr) {
//     arr.forEach(ele => {
//       this.dict[this.encode(ele)] = 1;
//     });
//   }

//   encode(str) {
//     return str.split('').map(char => char.charCodeAt(0)).join('');
//   }

//   hasWord(word) {
//     return !!this.dict[this.encode(word)];
//   }
// }



// // 12.
// // Most common word in a string

// const words = 'hello my name is fynn and this is kind of funny. Is this real?';

// const findWord = function (str) {
//   const wordsArr = str.toLowerCase().split(' ');

//   const wordObj = wordsArr.reduce((acc, curr) =>
//     (acc.hasOwnProperty(curr) ? { ...acc, [curr]: acc[curr] + 1 } : { ...acc, [curr]: 1 }),
//     {}
//   );

//   let commWord = '';
//   let counter = 0;

//   for (const property in wordObj) {
//     if (wordObj[property] > counter) {
//       commWord = property;
//       counter = wordObj[property];
//     }
//   }

//   return commWord;
// }

// const findWord2 = function (inputString) {
//   const wordsCounter = {};
//   let mostCommonCounter = 0;
//   let mostCommonWord = '';
//   inputString.split(' ').forEach(word => {
//     wordsCounter[word] = wordsCounter[word] || 0;
//     wordsCounter[word]++;
//   })

//   Object.keys(wordsCounter).forEach(word => {
//     if (wordsCounter[word] > mostCommonCounter) {
//       mostCommonWord = word;
//       mostCommonCounter = wordsCounter[word];
//     }
//     return mostCommonWord;
//   })
// }

// // 13. 
// // Check if a number is an integer

// const checkForInteger = function (inputNumber) {
//   return inputNumber % 1 === 0;
// }


// // 14.
// // Filter unique items from array

// const uniquator = function (inputArray: number[]) {
//   // @ts-ignore TODO: Think about it later
//   return [...new Set(inputArray)];
// }
// uniquator([1,2,2,3,4,3,2]);

//   // 15.
//   // Add all function

//   (function () {
//     // @ts-ignore TODO: Think about it later
//     return [...arguments].reduce((acc, curr) => acc * curr, 1);
//     // @ts-ignore TODO: Think about it later
//   })(2, 3, 4);


// // 16.
// // Longest words in a string
// (function (inputString) {
//   let longest = [''];
//   const tempArr = inputString.split(' ');
//   tempArr.forEach(word => {
//     if (word.length > longest[0].length) {
//       longest = [word];
//     }
//     else if (word.length === longest[0].length) longest.push(word);
//   });
//   return longest;
// })('Hello my name is fynni');

// (function (inputString) {
//   let myArr = inputString.split(' ').sort((a, b) => b.length - a.length)
//   myArr = myArr.filter((ele) => ele.length === myArr[0].length);

//   return myArr;
// })('Hello my name is fynni');

// function longestWord(sen) {
//   return sen.replace(/[&!?.,]/g, '').split(' ').sort((a, b) => b.length - a.length)[0];
// }

// // 21.
// // What is a callback function?

// /* 
//   A callback function is a function that is passed to another function as an argument and 
//   is executed after some operation has been completed. 
//   Below is an example of a simple callback function that logs to the console after some operations have been completed.
//  */
// function modifyArray(arr, callback) {
//   // do something to arr here
//   arr.push(100);
//   // then execute the callback function that was passed
//   callback();
// }

// var arr = [1, 2, 3, 4, 5];

// modifyArray(arr, function () {
//   console.log("array has been modified", arr);
// });

// // 22.
// // Duplicate an array and append it

// const duplicate = function (inputArray) {
//   return [...inputArray, ...inputArray];
// }
// duplicate([1,2,3]);
//   //  51. 
//   // Reverse a word
//   (function (inputString) {
//     // @ts-ignore TODO: Think about it later
//     return [...inputString].reverse().join('');
//   })('Fynn');

// // 62.
// // Factorial 4 => 4 * 3 * 2 * 1 = 24

// function firstFactorial(num) {
//   return num === 1 ? 1 : num * firstFactorial(num - 1);
// }
// // 66.
// // Simple adding

// function simpleAdding(num) {
//   return num === 1 ? num : num + simpleAdding(num - 1);
// }
// // 69.
// // Print the sorted nth element from an unsorted list

// function printNthElement(inputArr, pos) {
//   const sortedArr = [...inputArr].sort((a, b) => a - b);
//   return pos < sortedArr.length ? sortedArr[pos - 1] : 'out of range';
// }

// // 82.
// // Remove duplicated characters from a string

// function removeDuplicates(inputString) {
//   // @ts-ignore TODO: Think about it later
//   return [...new Set(inputString.toLowerCase())].join('');
// }
