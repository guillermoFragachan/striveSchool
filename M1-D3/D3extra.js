// Additional assignments for Day 3

/*
 1. Use ternary operator to assign "male" or "female" string to a variable based on the value of another 'isMale' variable
*/
let isMale  = 1
let isFemale = 0

isMale === 1 ? console.log('male') : console.log("female")


/*
 2. Write code to check from two given integers whether one of them is 8 or their sum or difference is 8.
*/
let firstInterger = 1
let secondInterger = 8

if (firstInterger === 8 || secondInterger === 8){
  console.log('one of the values is equal to 8')
} else if (firstInterger + secondInterger === 8){
  console.log('the sum of both values is 8')
}else if (firstInterger - secondInterger===8 || secondInterger - firstInterger === 8){
  console.log('the differene is 8')
}else{
  console.log("none of the condition are true")
}
/*
  3. Create a variable which concatenates two strings.
*/
let firstString = "first string"
let secondString = " second string"
let twoStrings =  firstString + secondString 
console.log(twoStrings)
/*
4.Write a JavaScript conditional statement to sort three numbers. Display the result in the console.
*/

function sortNumber (a, b, c ){
  if (a >= b && a >=c){
    if(c>=b){
      console.log(a,c,b)
    }else{
      console.log(a,b,c)
    }
  }else if( b >= a && b>=c){
    if(a>=c){
      console.log(b,a,c)
    }else{
      console.log(b,c,a)
    }
  }else if(c >= b && c >=a){
    if(b>=a){
      console.log(c,b,a)
    }else{
      console.log(c,a,b)
    }
  }
}

sortNumber(200,0, 10)


/*
 5. Write code to find the average of two given integers.
*/
let average = firstInterger + secondInterger /2 
console.log(average)

/* 
  6. Find the longest of two given strings
*/


if (firstString.length > secondString.length){
  console.log("first string is longer")
}else{
  console.log('second string is longer')
}
/*
 7. Write code to check whether a value is an integer or not.
*/
function intergerOrNot (_value){

    let parsedValue= parseInt(_value) 

    if (_value === parsedValue){
      console.log('value is interger')
    }


}
intergerOrNot (1)

/*
 8. Write code to calculate the percentage (%) of a number.
        Ex.: 20% of 400 is 80
*/

function calculatePercentage (_value, _percentage){
  let calculation = (_value *_percentage) / 100 
  return console.log('the precentage is '+calculation+ "%") 
}

calculatePercentage(100, 20)
/*
 9. Write code to check if a given number is even or odd.
*/

function evenOrOdd (_value ){

  let division = _value % 2 
  if (_value === 0 ){
    console.log('the number is even')
  }
  console.log('the number is odd')

}

evenOrOdd(32312313)