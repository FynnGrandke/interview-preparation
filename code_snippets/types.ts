export const easyCode = new Map();

export interface CodeSettings {
  task: string,
  tests: Tests[],
  code: Function,
  type: string
}

export interface Tests {
  test: string[],
  expect: string[],
  errormsg: string
}


// 0.
// easyCode.set(0,
//   {
//     task: 'Describtive text',
//     tests: [
//       {
//         input: [],
//         expect: [],
//         errormsg: 'Describtive error message'
//       }
//     ],
//     code: () => {},
//     type: 'TYPE'
//   }
// );
