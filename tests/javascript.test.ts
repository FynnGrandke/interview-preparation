import { strict as assert } from 'assert'
import { easyCode } from '../code_snippets/easy/easyJSCodeExamples';

function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  if (arr1 == null || arr2 == null) return false;
  if (arr1 === arr2) return true;

  for (var i = 0; i < arr1.length; ++i) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

easyCode.forEach(val => {
  console.log(val.tests)
});

// assert(arraysEqual(func.code(func.tests[0].test), func.tests[0].expect), func.tests[0].errormsg);


``