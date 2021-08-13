/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript (uncommented)
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
*/

/* EXERCISE 1
Create an array containing the first 5 positive numbers.
*/


const numericArray = [ 1, 2, 3, 4, 5]

/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/

const personOne = {
    name: "guillermo",
    surname: "fragachan",
    email: "fragachan@gmail.com",
    age: "24"

}

/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license.
*/

personOne.drivingLicense = false


/* EXERCISE 4
Remove from the previously created object the age property.
*/

delete personOne.age



/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address than the previous one.
*/

const personTwo = {
    name: "Lise",
    surname: "nielsen",
    email: "nielsen@gmail.com",
    age: "21"
}

if (personOne.email === personTwo.email){
    console.log('emails are equal')
}else{
    console.log('emails are different')

}


/* EXERCISE 6
You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
Write an algorithm that calculates the total cost to charge the user with.
*/

class user {
    constructor (name, shoppingCartCost, deliveryFree)
    {
     this.name = name
     this.shoppingCartCost = shoppingCartCost
     this.deliveryFree = deliveryFree
    }
}

const user1 = new user ("guillermo", 49)
const user2= new user ('lise', 50)

function freeDelivery(_user){
    if(_user.shoppingCartCost >= 50){
        _user.deliveryFree = true
        console.log(_user)
    }else {
        _user.deliveryFree = false
        console.log(_user)
    }
}

freeDelivery (user1)
freeDelivery (user2)

function priceCalculation (_user){
    if (_user.deliveryFree === true ){
        _user.totalPrice = _user.shoppingCartCost
        console.log(_user.totalPrice)
    }else{
        _user.totalPrice = _user.shoppingCartCost + 10
        console.log(_user.totalPrice)
    }
}

priceCalculation(user1)
priceCalculation(user2)





/* EXERCISE 7
You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

function blackFridayDiscount(_user){
    
    blackFridayDate = new Date()
    console.log(blackFridayDate.getDate(),blackFridayDate.getMonth())

    if(blackFridayDate.getDate() === 12 &&blackFridayDate.getMonth() === 7 ){
        _user.discountBlackFriday = 20
        
    }else{
        _user.discountBlackFriday = 1
    }

    _user.totalShopping = _user.totalPrice-((_user.totalPrice * _user.discountBlackFriday) /100)
}

 blackFridayDiscount (user1)
 console.log(user1)





/* EXERCISE 8
Create an object representing a car with properties like brand, model, licensePlate.
After you create the first car, clone it 5 times and change the licensePlate for each cloned car without affecting the original one.
*/

class car  {
    constructor(brand, model, licensePlate){
        this.brand = brand,
        this.model = model,
        this.licensePlate = licensePlate
    }
}

let car1 = new car(brand = "Renault", model= "model one", licensePlate = 12345)

const cars = [car1]


for (let i = 0; i<5; i++) {
    cars.push(new car(car1.brand, car1.model, licensePlate = Math.floor(Math.random()* 1000000)))
}



/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise.
*/

let carsForRent = cars.slice()


console.log(carsForRent)


/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/

carsForRent.shift()
carsForRent.pop()
console.log(carsForRent)



/* EXERCISE 11
Print in the console the TYPES of the car variable, of its licensePlate and of the its brand properties.
*/

console.log(carsForRent[1].licensePlate, carsForRent[1].brand)

/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in a variable totalCars the number of cars present in both carsForSale and carsForRent arrays.
*/

let carsForSale = [].concat(carsForRent)

for (let i = 0; i<3; i++) {
    carsForSale.push(new car(car1.brand, car1.model, licensePlate = Math.floor(Math.random()* 1000000)))
}





/* EXERCISE 13
Print in the console the data from each car in the carsForSale array.
*/

console.log(carsForSale)
/* WHEN YOU ARE FINISHED
Send the code on the Eduflow platform. In the next days we'll also learn how to use GIT
*/
