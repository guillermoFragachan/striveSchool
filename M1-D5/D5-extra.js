/* EXERCISE 11
Write a function "checkArray" which receives an array of random numbers (created with giveMeRandom) and prints, for each item, whether it's bigger than 5.
The function returns the sum of the numbers bigger than 5.
*/

function giveMeRandom(n){

    let arr= [] 
    for(i=0; i<n; i++){
        arr.push(Math.floor((Math.random() * 10)))
    }
    return arr
}


function checkArray (_array){
    let array = _array
    let arrayThan5 =[]
    let sumOfElements = 0

    for (let i = 0; i < array.length; i++) {
        if (array[i] > 4 ) {

            arrayThan5.push(array[i])
            

        }        
    }
    console.log(arrayThan5)
    for (let i = 0; i < arrayThan5.length; i++) {
        sumOfElements += arrayThan5[i]
        
    }
    return sumOfElements

}

/* EXERCISE 12
In your eCommerce you have an array of objects called shoppingCart. In this array you have a number of objects with a price, a name, an id and the quantity to be shipped.
Create a function "shippingCartTotal" which calculates the total due to the shop.
*/

const shoppingCart = [
    item1 = {
        id: 2121,
        name: 'Earphones',
        price: 4,
        quantity: 3
    },
    item2 ={
        id: 3213,
        name: 'Iphone',
        price: 8,
        quantity: 1
    },
    item3 = {
        id: 4841,
        name: 'Mouse',
        price: 2,
        quantity: 1
    }
]





function shoppingCartTotal (_shoppingCart){
    let totalPrice = 0
    for (let i = 0; i < _shoppingCart.length; i++) {
        totalPrice += shoppingCart[i].price * shoppingCart[i].quantity;
        
    }


    return totalPrice
}

console.log(shoppingCartTotal(shoppingCart))
/* EXERCISE 13
In your eCommerce you have an array of objects called shoppingCart. In this array you have a number of objects with a price, a name, an id and the quantity to be shipped.
Create a function "addToShoppingCart" which receives a new object, adds it to shoppingCart and returns the total number of items in the shoppingCart.
*/

let newObject = {
    id: 3122,
    name: 'keyboard',
    price: 5,
    quantity: 2 
}
function addToShoppingCart (_shoppingCart, _newObject){
    _shoppingCart.push(_newObject)

    return _shoppingCart
    

}

console.log(addToShoppingCart(shoppingCart, newObject))

/* EXERCISE 14
In your eCommerce you have an array of objects called shoppingCart. In this array you have a number of objects with a price, a name, an id and the quantity to be shipped.
Create a function "maxShoppingCart" which receives the shoppingCart array and returns the most expensive item in the array.
*/

function maxShoppingCart(_shoppingCart){

        let item4Example= {
                id: 3122,
                name: 'keyboard',
                price: 0,
                quantity: 0     
         }
         let mostExpensiveItem 
         
        for (let i = 0; i < _shoppingCart.length; i++) {
            if (_shoppingCart[i].price > item4Example.price  ) {
                item4Example =_shoppingCart[i] 
            }
            
        }
        return item4Example
}

console.log(maxShoppingCart(shoppingCart))

/* EXERCISE 15
In your eCommerce you have an array of objects called shoppingCart. In this array you have a number of objects with a price, a name, an id and the quantity to be shipped.
Create a function "latestShoppingCart" which receives the shoppingCart array and returns the last item.
*/

function latestShoppingCart(_shoppingCart){
    let lastValue = _shoppingCart.length
    let lastItem = _shoppingCart[lastValue-1]
    

    return lastItem
}

console.log(latestShoppingCart(shoppingCart))



/* EXERCISE 16
Create a function "loopUntil" which receives an integer x between 0 and 9.
The function loops and prints a random number between 0 and 9 until the random number is bigger than x for three times in a row.
*/
let int = 5
function loopUntil (_interger){
    let randomNumber 

    for (let i = 0; i < 3; i++) {
        randomNumber = int + Math.floor((Math.random()   *10) )
        console.log(randomNumber)
    }
    return 


}

console.log(loopUntil(int))
/* EXERCISE 17
Write a function "average" which receives an array and return the average value. The function automatically skips non-numeric entries in the array.
*/


function average (_array){

    let numericArray =[]
    
    for (let i = 0; i < _array.length; i++) {
        
        
        if (typeof _array[i] === "number") {
            numericArray.push( _array[i]) 
        }

        
    }
    let totalAverage = 0
    for (let i = 0; i < numericArray.length; i++) {
        totalAverage += numericArray[i]
        
    }
    return totalAverage
}
let a = ['sdasad', 12, 12, 10, '21312']

console.log(average (a))

/* EXERCISE 18
Write a function "longest" to find the longest string from an given array of strings.
*/

let stringArray = ['pp', 'lll','qqqqqqqqqqq', '99999']
function longestString(_stringArray){
    let longestString = ['p']
    for (let i = 0; i < _stringArray.length; i++) {

        if (_stringArray[i].length > longestString[0]) {
            
            longestString.push(_stringArray[i]) 
        }
        
    }

    return longestString[2]
}

console.log(longestString(stringArray))


/* EXERCISE 19
Write a function to create a very simple anti spam filter for your mailbox. The function takes a string emailContent, and returns a boolean.
Check if the email is valid using string methods. The email (in this example) is valid if the words SPAM and SCAM does not appear.
*/
let emailContent = "dsadsahdoas spam dsada"
function spamChecker(_email) {
    let content = emailContent.toUpperCase()
    let words = content.split(' ') 
    let valid = true
    for (let i = 0; i < words.length; i++) {
        if (words[i] === 'SPAM' || words[i]=== 'SCAM') {
            valid = false
        }
       
        
    }

    return valid
    
}

console.log(spamChecker(emailContent))
/* EXERCISE 20
Write a function that receives a date d as parameter and calculates the number of days passes since the d.
*/

let date  = new Date()
date.setFullYear(2021, 8, 1);


function daysSince(d) {

    let now
    let dateNow= new Date()
    now = dateNow.getDate()
    let before = d.getDate()
    

    return now - before

}

console.log(daysSince(date))
/* EXERCISE 21
Write a function "matrixGenerator" that receives x and y as parameter. The result should be a matrix of x times y with, as value, the index of the position.
Ex.: X = 3, Y = 2
["00","01","02"
"10","11","12"]
*/




/* WRITE YOUR CODE HERE */
