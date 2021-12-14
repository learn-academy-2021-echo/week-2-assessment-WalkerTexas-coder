// ASSESSMENT 2: Coding Practical Questions with Jest

// const { expect } = require("@jest/globals");

// const { describe } = require("yargs")

// describe("", () => {
//   it("", () => {
//     expect().toEqual();
//     expect().toEqual();
//     expect().toEqual();
//   });
// });
// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

describe("evenlyDivisibleByThree", ()=>{
    // Following the example in the syllabus
    // declaring variables inside the test to use as inputs in the test expect statements
    var num1 = 15
    // Expected output: "15 is divisible by three"
    var num2 = 0
    // Expected output: "0 is divisible by three"
    var num3 = -7
    // Expected output: "-7 is not divisible by three"
    it("use the tool modulus to see if the remainder goes into 3 evenly", ()=>{
        expect(evenlyDivisibleByThree(num1)).toEqual("15 is divisible by three");
        expect(evenlyDivisibleByThree(num2)).toEqual("0 is divisible by three");
        expect(evenlyDivisibleByThree(num3)).toEqual("-7 is not divisible by three");
    });
})
// RED
// b) Create the function that makes the test pass.

// Pseudo Code: Create a function that takes a number (num) as an argument
// use the tool modulus to see if the remainder goes into 3 evenly
    // check if the argument passed through is not evenly divided by three
    // return num is not divisible by three
    // else return num is divisible by three
// return a string literal becuase we need the variable that we are pssing in to the function in the return statement 

// Refactor code using ternary opperator instead of conditional statments. Ternary is a more apporpriate tool for two conditionals. It looks hella cool.

// const evenlyDivisibleByThree = (num) => {
//     if (num % 3 !== 0) {
//         return `${num} is not divisible by three`;
//     } else {
//         return `${num} is divisible by three`
//     }
// } 
// GREEN
const evenlyDivisibleByThree = (num) => {
    return num % 3 !== 0 ? `${num} is not divisible by three` : `${num} is divisible by three`;
}; 
// Refactor

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.
// Pseudo Code: for the expect take in the array and .toEqual and capitalized first letter of every string


describe("capitalized", () => {
    var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
    // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
    var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
    // Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]
  it("a function that takes in an array of words and returns an array with all the words capitalized.", () => {
    expect(capitalized(randomNouns1)).toEqual([
      "Streetlamp",
      "Potato",
      "Teeth",
      "Conclusion",
      "Nephew",
    ]);
    expect(capitalized(randomNouns2)).toEqual([
      "Temperature",
      "Database",
      "Chopsticks",
      "Mango",
      "Deduction",
    ]);
  });
});
//RED  Test 2 failed   ReferenceError: capitalized is not defined

// b) Create the function that makes the test pass.

// Pseudo Code: Create the function capitalized w/ the parameter of array
// define a new variable that will take in (array) and itterate through it's values via .map() 
    // return the value at the first index with .toUpperCase(), used the .substring() using the argument 1  to complete each string with lower case letters
// return variable
// run test
// refactor psuedo code : remove variable and return array.map() 


// const capitalized = (array) => {
//     let firstCap = array.map(value => {
//         return value[0].toUpperCase() + value.substring(1)
//     })
//     return firstCap
// }
// Green

const capitalized = (array) => {
  return array.map((value) => value[0].toUpperCase() + value.substring(1));
};
// const capitalized = (array) => {
//   return array.map((value) => value[0].toUpperCase() + value.slice(1));
// };
// refactor

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.
// Pseudo Code: expect the function and argument to result in a number

describe("vowelTester", () => {
  var vowelTester1 = "learn";
  // Expected output: 1
  var vowelTester2 = "academy";
  // Expected output: 0
  var vowelTester3 = "challenges";
  // Expected output: 2
  it("logs the index of the first vowel in the string", () => {
    expect(vowelTester(vowelTester1)).toEqual(1);
    expect(vowelTester(vowelTester2)).toEqual(0);
    expect(vowelTester(vowelTester3)).toEqual(2);
  });
});
//RED     ReferenceError: vowelTester is not defined


// b) Create the function that makes the test pass.
// Pseudo Code: declare a function of vowelTester that takes in a string
// use a for loop to itterate through the string and returns the index of the first vowel
// use an if statement to deteremine if the letter at the current index is a vowel
    // return the current index

const vowelTester = (string) => {
    let vowels = ["a","A","e","E","i","I","o","O","u","U"]
    for (let i = 0; i < string.length; i++) {
        if (vowels.includes(string[i]) === true) {
          return i;
        } 
    }
}
// 2nd attempt with .search() - searches through the string and returns the index of the first item it finds.
// Regular Expression - REGEX  /i  <-- Case Insensitive

// indexOf() <-- returns the first index of the item in the argument

// const vowelTester = (string) => {
//  return string.search(/[aeiou]/i)
// };;