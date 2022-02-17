"use strict"; // turns strict mode on

console.log("Let's play a short FizzBuzz, 1-10!");

let result = [];

for (let n = 1; n <= 10; n++) {
  if (Number.isInteger(n/3)){
    result.push("Fizz");
  } else if (Number.isInteger(n/5)){
      result.push("Buzz");
  } else {
    result.push(n);
  }
}

console.log(result);
// => [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz"]
