/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
*/

/* EXERCISE 1
Write the code to revert an array.
es:
[1, 3, 5] ==> [5, 3, 1]
*/

let arrayFirst = [9, 2, 2]

arrayFirst.reverse()

console.log(arrayFirst)

/* EXERCISE 2
Write the code to get the maximum value in an array.

*/

console.log(Math.max(...arrayFirst))



/* EXERCISE 3
Write the code to get the minimum value in an array.
*/

console.log(Math.min(...arrayFirst))

/* EXERCISE 4
Write the code to get only even numerical values in an array.
*/

function getEven(_array){


    for (i=0; i<_array.length; i++){
        let evenOrNot = _array[i]%2
        console.log(evenOrNot)
        if(evenOrNot === 1 ){
            _array.splice(i, _array.length)
        }
    }

}

getEven(arrayFirst)
console.log('exercise 4 = ',arrayFirst)
/* EXERCISE 5
Write the code to delete even entries from an array.
*/

function getOdds(_array){


    for (i=0; i<_array.length; i++){
        let evenOrNot = _array[i]%2
        console.log(evenOrNot)
        if(evenOrNot === 0 ){
            _array.splice(i, _array.length)
        }
    }

}
getOdds(arrayFirst)
console.log('exercise 5 = ',arrayFirst)

/* EXERCISE 6
Write the code to remove all the vowels from a string.
*/
let vowels = ['a', 'e', 'i', 'o' ,'u']

let string = 'hello world at strive school'

function vowelRemover( _string, _vowels){
    let noVowels = ""

    for(i=0; i< _string.length; i++){

        // if (!vowels.includes(_string[i])) {
        //     noVowels += _string[i]
        // }

         if (
             _string[i] === _vowels[0] 
             || _string[i] === _vowels[1] 
             || _string[i] === _vowels[2] 
             || _string[i] === _vowels[3] 
             || _string[i] === _vowels[4]
         ){
            // console.log(_string[i])
         } else {
             noVowels = noVowels + _string[i]
         }
    }

    console.log(noVowels)
}

vowelRemover(string, vowels)
/* EXERCISE 7
Write the code to increase all the numeric values in a array by 1.
*/

let secondArray = [1, 3, 5, 7, 8]
sum = 1

for(i=0; i<secondArray.length; i++){
    secondArray[i] += sum
    console.log(secondArray[i])

}





/* EXERCISE 8 
Replace all the strings in an array with their length.
es.: ["strive", "is", "great"] => [6, 2, 5]
*/

/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Send the code on the Eduflow platform. In the next days we'll also learn how to use GIT
*/