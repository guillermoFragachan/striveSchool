/*

*/

let x= 'john'
let y = 'doe'

//console.log(x, "<>", y)

let myObject = {
    name: 'guillermo',
    surname: 'fragachan',
    email: 'guille@gmail.com'

}

delete myObject.email

//console.log(myObject)

let myArray = []

for(let i= 0; i<11; i++ ){
    myArray.push('String')
}

for(let i= 0; i<11; i++ ){
    //console.log(myArray[i])
}

//console.log(myArray)

function randomizer (){
    let randomValue = Math.floor(Math.random()*10)
    

    return randomValue
}

function randomNumbersArray(n){
    let hundredNumbersArray =[]

    for(let i= 0; i<n; i++ ){
        hundredNumbersArray.push(randomizer())
    }



    return hundredNumbersArray
}

let arrayTwo = randomNumbersArray(100)
//console.log(arrayTwo)

function maxAndMin (array){
    array.sort()
    


    return console.log(array[0], array.pop())


}

//console.log(maxAndMin(arrayTwo))

function arrayOfArrays(_sizeOftheArray, _randomNumber){
    let mainArray = []
    
    for (let i =0; i<_sizeOftheArray; i++){
        mainArray.push(new Array () ) 
    }
    for (let i =0; i<mainArray.length; i++){
        console.log(mainArray[mainArray.length])
        
        for (let v=0; v<11;v++){
            mainArray[i].push(randomizer())
        }


    }

    
    return mainArray

}



//console.log(arrayOfArrays(5))

const longArray = [2,2,2,2]
const shortArray =[2,2,2]

//29) Create a function that gets 2 arrays and returns the longest one

function returnLongerArray(_array1, _array2){
    let longest 
    if (_array1.length>_array2.length) {
        longest = _array1
    }else{
        longest = _array2
    }



    return longest
}

//console.log(returnLongerArray(longArray, shortArray))


//30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values


function sumOfArrays (_array1, _array2){
    let higherSum
    

    return _array1.reduce(add,0)

}

console.log(sumOfArrays(longArray,shortArray))