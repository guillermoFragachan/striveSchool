/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or de-commenting the single exercises in this one.
You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.

*/
/* EXERCISE 1
Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/
let thisIsAString = "and it contains text"
let thisIsANumber = 21
let thisIsABoolean = false 

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 2
Try to describe what a variable is, in your own words.
*/

let Variabla = "variables are empty spaces where you can store data"

/* EXERCISE 3
Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

let addition = 12 + 20

/* EXERCISE 4
Create a variable named x containing the number 12.
*/

var x = 12

/* EXERCISE 5
Create a variable called name containing the string John Doe.
*/

let name = "John Doe"

/* EXERCISE 6
Execute a subtraction between the number 12 and the variable x, which is storing the value 12.
*/

let substraction = 12 - x

/* EXERCISE 7
Create two variables: name1 and name2. name1 is equal to john, name2 is equal to John.
Verify that name1 is different from name2. 
Verify then, that name1 and name2 are equals if both lowercase (without changing the value of name2).
*/
let name1 = 'john'
let name2 = 'John'

if (name1 === name2) {
    console.log('they are equal')
}else{     console.log('they are not')}


/* EXERCISE 8
Create a variable named x (its value must be less than 10). Write the code to print the literal value of x (ex.: if x is 1 print "one", if 5 print "five" etc.).
*/

var x = 8
const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six','seven','eight', 'nine' ]

for (let i=0; i<numbers.length; i++){
    if (x === i){
        console.log(numbers[i])
    }
}
/* EXERCISE 9
[Extra] Insert a value in a variable based on the resut of a ternary if (topic not covered during lesson, try to search it by yourself, tomorrow morning we'll discuss it together ;) )
*/
let rightOrNot
let ternary = x === 8 ? rightOrNot='right' : rightOrNot='wrong'

console.log(rightOrNot)
/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/
