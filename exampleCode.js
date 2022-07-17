// const duplicates = ['a', 'b', 'c', 'a']

// const duplicateFree = [...new Set(duplicates)]
// console.log(duplicateFree)




// const phoneNumber = '3662277'
// const wordList = ['foo', 'bar', 'baz', 'foobar', 'emo', 'cap', 'car', 'cat']

// const ouput = ['bar', 'cap', 'car', 'emo', 'foo', 'foobar']

// const wordToNumberTranslater = (word) => {
//     const letters = [...word]

//     const numbers = letters.map(letter => {
//         switch (letter) {
//             case 'a':
//             case 'b':
//             case 'c':
//                 return 2
//             case 'd':
//             case 'e':
//             case 'f':
//                 return 3
//             case 'g':
//             case 'h':
//             case 'i':
//                 return 4
//             case 'j':
//             case 'k':
//             case 'l':
//                 return 5
//             case 'm':
//             case 'n':
//             case 'o':
//                 return 6
//             case 'p':
//             case 'q':
//             case 'r':
//             case 's':
//                 return 7
//             case 't':
//             case 'u':
//             case 'v':
//                 return 8
//             case 'w':
//             case 'x':
//             case 'y':
//             case 'z':
//                 return 9
//         }
//     })

//     return numbers
// }

// const wordsInPhoneNumber = (inputphoneNumber, inputWordList) => {
//     const wordToNumberDict = inputWordList.map(word => { return [wordToNumberTranslater(word).join(''), word] })

//     const result = wordToNumberDict.filter(entry => inputphoneNumber.includes(entry[0]))

//     return [...new Set(result.map(entry => entry[1]))]
// }

// console.log(wordsInPhoneNumber(phoneNumber, wordList))


// const isAnagram = (string1, string2) => {
//     const reversedString = [...string1.replace(/\W/g, '')].reverse().join('').toLowerCase()
//     console.log(reversedString, string2.replace(/\W/g, '')) 
//     return reversedString === string2.replace(/W/g, '').toLowerCase() 
// }
// console.log(isAnagram('as df', 'fdsa'))

const customDelay = (inputMilliseconds) => new Promise((resolve, reject) => setTimeout(() => console.log('done'), 1000 * inputMilliseconds))
customDelay(5)