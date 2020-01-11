* What is the difference between undefined and null?
Types: undefined & object
null can be assigned and means "no value".
Variables which have been defined but not yet assigned are undefined.

* Difference between == and ===?
== does type conversion before comparing.
Therefore, === checks if the type is identical.

* What does use strict; do?
Ensures the strict mode to avoid mistakes in javascript like:
  - Not declaring a variable
  - deleting a variable
  - using invalid variable names
  - prohibs usage of with statement
Additionally, it is bound to its scope: top level = everywhere, inside a function = only body of the function.

* What is a callback function?
A callback is a function passed as an argument into another function.
It is called when the function completes.
But promises are to be preferred.

``` javascript 
function doSomething(onSuccess, onFailure) {
  var err = ...;
  if (err) {
    onFailure(err);
  } else {
    onSuccess();
  }
}
```

* What is a pure function?

* What is a closure?

* What is IIFE?

* What are Promises used for? Can you chain them? What is async / await?

* Problems with loosely typed language (ES6)
1 + "2" + "2" = "122"
1 +  +"2" + "2" = "32"
1 +  -"1" + "2" = "02"
+"1" + "1" + "2" = "112"
"A" - "B" + "2" = "NaN2"
"A" - "B" + 2 = NaN

* Object
var a = Person('a');
var b = new Person('b');
var c = Person;

function Person(name) {
  this.first_name = name;
}

// function definitions are per se hoisted

console.log(a.first_name);  // cannot read property of undefined 
console.log(b.first_name);  // b 
console.log(c.first_name);  // the function returns undefined

* Emptying an array

var arr = [1,2,3,4,5];

arr = []; // References will be untouched
arr.length = 0 ;
arr.splice(0, arr.length0;)
arr.while(arr.length) { arr.pop() } // not good haha
