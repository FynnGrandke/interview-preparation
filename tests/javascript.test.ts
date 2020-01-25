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

easyCode.forEach(snippet => {
  snippet.tests.forEach(test => {
    const result = snippet.code(test.input);

    if (snippet.type === 'Array') assert(arraysEqual(result, test.expect), test.errormsg);
    else assert(result === test.expect, test.errormsg);

    assert(Array.isArray(result) || typeof result === snippet.type, 'Output type does not match the expected output type');
  });
});

console.log('Passed successfully!');

// assert(arraysEqual(func.code(func.tests[0].test), func.tests[0].expect), func.tests[0].errormsg);
