/*
    ASSIGNMENT RULES
    - All the answers must be written in JavaScript
    - The solution must be pushed to the repository and be available for the tutors by the end of the day
    - You can ask for help, reach the Teaching Assistants if needed
    - You can google / use StackOverflow BUT we suggest you to use just the material provided
    - You can test your code in a separate file or de-commenting the single exercises in this one.
      You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
    - Complete as many exercise that you can
    - Publish them into your own GitHub account and upload repository link on Eduflow before 16.30 (Berlin Time) 
*/

const { type } = require("os")

//JS Basics

/* Ex.A
   Create a variable called "test" and assign a string to it.
*/

let test = "string"

/* Ex.B
    Create a variable called "sum" and assign to it the result of the sum between 10 and 20.
*/

let sum = 10 + 20

/* Ex.C 
    Create a variable called "random" and assign to it a random number between 0 and 20 (it should be randomly created at each execution).
*/

let random = Math.floor(Math.random() * 20)


/* Ex.D
    Create a variable called "me" and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.
*/
let  me = {
  name: 'guillermo',
  surname: "fragachan",
  age: 24
}

/* Ex.E 
    Programmatically remove the age property from the previously create object.
*/

delete me.age




/* Ex.F 
   Programmatically add to the object me an array called "skills", containing the programming languages you know right now.
*/

me.skills = ['javascript', 'html', 'css', 'c++']



/* Ex.G 
   Programmatically remove the last skill from the "skills" array inside the "me" object.
*/

me.skills.pop()



// JS Functions
/* Ex.1
    Write a function called "dice"; it should randomize an integer number between 1 and 6.
*/

function dice () {
  let randomInt = Math.floor(Math.random()*6)
  if (randomInt === 0){
    randomInt = randomInt + 1
  }


  return randomInt
}
/* Ex.2 
    Write a function called "whoIsBigger" which receives 2 numbers as parameters and returns the biggest one.
*/
function whoIsBigger (a, b){
    if (a > b){
      return a
    }else{
      return b
    }


}





/* Ex.3
    Write a function called "splitMe" which receives a string as a parameter and returns an array with every word in that string.
    Ex. splitMe("I love coding") => returns ["I", "Love", "Coding"]
*/

function splitMe (_string) {
  let arr = _string.split(' ')

  return arr
}


/* Ex.4
    Write a function called "deleteOne" which receives a string and a boolean as parameters. If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.
*/

function deleteOne (_string, _boolean){
      let newString

      if (_boolean === true) {
        newString = _string.slice(1)
        
      }else{
        newString = _string.slice(0, _string.length -1)
      }
      return newString

}


//console.log(deleteOne('string', true))

/* Ex.5
   Write a function called "onlyLetters" which receives a string as a parameter and returns it removing all the digits.
   Ex.: onlyLetters("I have 4 dogs")  => returns "I have  dogs"
*/

function onlyLetters (_string) {
  return _string = _string.replace(/[0-9]/g, '')

}


//console.log(onlyLetters('example 121'))

/* Ex.6 
   Write a function called "isThisAnEmail" which receives a string as a parameter and returns true if the string is a valid email address.
*/

function isThisAnEmail (_string){
  let validEmail = false
  let arr = _string.split('@')
  let validEmails = ['gmail.com', 'hotmail.com', 'yahoo.es']
  for (let i = 0; i<_string.length; i++){
    if (arr[1]===validEmails[i]) {
      validEmail = true
      
    }
  }
  
  return validEmail
  
}


//console.log(isThisAnEmail('guillerfraagchan@gmail.com'))

/* Ex.7
   Write a function called "whatDayIsIt" that should return the current day of the week.
*/


function whatDayIsIt (){
  let dayToday = new Date()
  let dayOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday',' Friday', 'Saturday', 'Sunday']



  return dayOfTheWeek[dayToday.getDay()-1]

}

//console.log(whatDayIsIt())
/* Ex.8
    Write a function called "rollTheDices" which receives a number as a parameter.
    It should invoke the dice() function defined in Ex1 the specified amount of times,
    and return an object containing a "sum" property holding the sum of all values extracted
    and a "values" array containing the single values of the dicerolls themselves.
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [3, 3, 4]
    }
*/

function rollTheDices (_number){
  let arr = []
  for (let i=0; i<_number; i++){
    arr.push(dice())
  }

  let sum  = 0
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i]
    
  }

  let dices = {
    sum: sum,
    values: arr
  }

  return dices

}

//console.log(rollTheDices(3))



/* Ex.9
   Write a function called "howManyDays" which receives a date as a parameter and should return the number of days passed since that date.
*/

let howManyDays = (date) => {

  const today = new Date();
  today.setHours(0, 0, 0);
  date.setHours(0, 0, 0);

  let difference =  today.getTime() - date.getTime();
  difference = ((difference / 1000) / 3600) / 24

  return Math.round(difference);
};




/* Ex.10
   Write a function called "isTodayMyBirthday" which should return true if today's your birthday, false otherwise.
*/

function isTodayMyBirthday (_date) {
      let birthdayDate = new Date()
      birthdayDate.setDate(23)
      birthdayDate.setMonth(11)

      console.log(birthdayDate.getMonth())
      if (_date.getDate() === birthdayDate.getDate() &&_date.getMonth() === birthdayDate.getMonth()) {
          return true

        
        
      }else{
        return false
      }
      
}

let randomDay = new Date()
randomDay.setDate(23)
randomDay.setMonth(12)

//console.log(isTodayMyBirthday(randomDay));


// JS Arrays // Objs
// NOTE: movies array is defined at the end of this file!
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
]



/* Ex.11
   Write a function called "deleteProp" which receives an object and a string as parameters, and returns the given object after deleting its property named as the given string.

*/

let object = {
  name: 'guillermo',
  surname: 'fraga'
}

function deleteProp (_object, _string){

  if (_string === 'name') {
     delete _object.name
    
  }else if (_string === 'surname'){
    delete _object.surname
  }

  
  return _object
}

//console.log(deleteProp(object, 'surname'))
 


/* Ex.12 
    Write a function called "olderMovie" which finds the oldest movie in the array provided at the end of this file.
*/

function olderMovie (_movies) {
  let oldest 
  let year = []

  for (let i = 0; i < _movies.length; i++) {
    year.push(_movies[i].Year)
    
  } 
  year.sort()
  return year[0]


}


//console.log(olderMovie(movies))


/* Ex.13
    Write a function called "countMovies" which returns the number of movies contained in the array provided at the end of this file.
*/

function countMovies (_movies){
    let totalMovies = _movies.length

    return totalMovies


}

//console.log(countMovies(movies))

/* Ex.14
    Write a function called "onlyTheTitles" which creates an array with just the titles of the movies provided in the array at the end of the file.
*/

function onlyTheTitles (_movies){
  let titlesArray = []

  for (let i = 0; i < _movies.length; i++) {
    titlesArray.push(_movies[i].Title)
    
  } 

  return titlesArray



}

//console.log(onlyTheTitles(movies))

/* Ex.15
   Write a function called "onlyInThisMillennium" which returns only the movies produced in this millennium.
*/

function onlyInThisMillennium (_movies){
  let year = []
 

  for (let i = 0; i < _movies.length; i++) {
    _movies[i].year = +_movies[i].Year
    
  }
  for (let i = 0; i < _movies.length; i++) {
    if (_movies[i].Year > 1999) {
      year.push(_movies[i])
      
    }
    
    
    
  }


  return year
}


//console.log(onlyInThisMillennium(movies))

/* Ex.16 
    Write a function called "getMovieById" which receives an id as a parameter and returns the movie with the given id.
*/

function getMovieById (_id){
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].imdbID === _id) {
      return movies[i]
      
    }
    
  }

}

//console.log(getMovieById('tt0077869'))

/* Ex.17
    Write a function called "sumAllTheYears" which returns the sum of all the years in which the movies provided have been produced.
*/

function sumAllTheYears (_movies) {
  
  let year = []

  for (let i = 0; i < _movies.length; i++) {
    year.push(_movies[i].Year)
    
  } 
  return year

}

//console.log(sumAllTheYears(movies))


/* Ex.18
    Write a function called "searchByTitle" which receives a string as a parameter and returns all the movies which contain that string in the title.
*/

function searchByTitle (_string) {
  let arrayWithMovies = []

  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Title.includes(_string) === true) {
      arrayWithMovies.push(movies[i])
    }
    
  }

  return arrayWithMovies

}

//console.log(searchByTitle('Lord'))

/* Ex.19
    Write a function called "searchAndDivide" which receives a string as a parameter and returns an object;
    this object should contain an array called "match", made by all the movies which contain the given string in the title,
    and another array "unmatch" with all the remaining ones.
*/
function searchAndDivide (_string){
  let arrayWithMovies = {
    match: [],
    unmatch: []
  }

  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Title.includes(_string) === true) {
      arrayWithMovies.match.push(movies[i])
    }else{
      arrayWithMovies.unmatch.push(movies[i])
    }
    
  }

  return arrayWithMovies

}
//console.log(searchAndDivide('Lord'))

/* Ex.20
   Write a function called "removeIndex" which receives a number as a parameter and returns the movies array without the element in the given position.

*/

function removeIndex (_n) {
  let movieWithout = movies
  for (let i = 0; i < movieWithout.length; i++) {
      if (_n===1) {
        delete movieWithout[i]['Title']
      } else if (_n === 2){
        delete movieWithout[i]['Year']
      }else if (_n === 3) {
        delete movieWithout[i]['imdbID']
      }else if (_n === 4) {
        delete movieWithout[i]['Type']
      }else if (_n === 5) {
        delete movieWithout[i]['Poster']
      }

    }

    return movieWithout 
}

//console.log(removeIndex(12))

// [EXTRAS] JS Advanced

/* Ex.21
  Create a function called "halfTree" which receives a number as a parameter and builds an "*" half tree with the given height.
  Example:
  halfTree(3)
  *
  **
  ***
*/

function halfTree (height) {
  let leafs = '*'
  let leafArray = []
  for (let i = 0; i < height; i++) {
    
    leafArray.push(leafs)
    console.log(leafArray.join())
  }
 return leafArray
}

console.log(halfTree(3))


//console.log(halfTree(3))
/* Ex.22 
  Create a function called "tree" which receives a number as a parameter and builds an "*" tree with the given height.
  Example: 
  tree(3)
    *  
   *** 
  *****

*/

/* Ex.23
  Create a function called "isItPrime" that receives a number as a parameter and returns true if the given number is a prime number.
*/
function isItPrime (_n) {
  let primeOrNot 
  let array = []
  let array2= []
  for (let i = 0; i < 100; i++) {
    if (_n%i === 0 ) {
      array.push(i) 
    }else{
      array2.push(i)
    }
  }
 if (array.length > 2) {
   primeOrNot = false
   
 }else {
   primeOrNot = true
 }
  return primeOrNot
}

console.log(isItPrime(11))

/* This movies array is used throughout the exercises. Please don't change it :)  */
