/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
*/

const { Console } = require("console")

/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/
function calculatesArea(a, b){
    let area = a * b
    return area
}

/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it 
should return their sum multiplied by 3.
*/

function crazySum(a, b){
    let sum 
    if (a === b){
        sum = (a + b) * 3
    }else {
        sum= a + b
    }
    return sum
}

/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/

function crazyDiff (a){
    let diff = a - 19 
    return diff
}

/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/

function boundary (n){
    let binary
    if (n>19 && n<101) {
        binary = true
    }else if (n===400) {
        binary = true
    }else{
        binary = false
    }
    return binary
}

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

function strivify (string){
    strive = string.concat('Strive')
}


/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

function check3and7(n){
    let boolean 
    if (n%3=== 0 || n%7===0) {
        boolean = true
    }else{
        boolean = false
    }
    return boolean
}

console.log(check3and7 (3))

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/
function reverseString (_string){
    let reveresedString
    
    let arr = _string.split("")

    reveresedString = arr.reverse()
    

    return reveresedString

    
}

console.log(reverseString("hello world"))



/* EXERCISE 8

Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

console.log(upperFirst('upper'))

function upperFirst(stringUpperCase) {
    let words = stringUpperCase.toLowerCase().split(" ");

    console.log(words)
  
    for (let i = 0; i < words.length; i++) {
        console.log(words[i].charAt(0).toUpperCase())


        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    // Directly return the joined string
    return words.join(" ");
  }
  
  console.log(upperFirst('example for the function'))
/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/
function cutString(str) {
    return str.slice(1, str.length - 1);
  }
  console.log(cutString("hello"));


/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

function giveMeRandom(n){

    let arr= [] 
    for(i=0; i<n; i++){
        arr.push(Math.floor((Math.random() * 10)))
    }
    return arr
}

console.log(giveMeRandom(4))
/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/