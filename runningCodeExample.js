'use strict';

function logSubSeq(inputString, length, index, currString) {
  if (length === 0) return


  for (let i = index; i < length; i++) {
    currString += inputString[i];
    console.log(currString);
    logSubSeq(inputString, length, i + 1, currString);
    currString = currString.slice(0, -1);
  }
}
function allSubs(inputString) {
  logSubSeq(inputString, inputString.length, 0, '');
}

allSubs('abc');
