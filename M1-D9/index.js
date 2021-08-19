/*
    reate programmatically (with JS) a BINGO board with 76 cells, 
    from 1 to 76. // done

    Create a function that randomize 1 to 76 //conde

    create a function that show the randomize number on the screen //done

    create a function that highlight the number if it is in the bingoboard


    The same number should be highlighted on the bingo board



*/


function randomNumber(){

    let randomNumber = Math.floor(Math.random()*99)
    return randomNumber
    
}
function displayBingo(){
    let bingoContainer = document.getElementById('bingoBoard')
   

    

    for (let cardNumber=1; cardNumber<24; cardNumber++){
        let newCardNode = document.createElement('div')
        newCardNode.innerText= randomNumber() //change after to random number
        newCardNode.id= cardNumber
        newCardNode.classList.add('numberSpot')

        
        bingoContainer.appendChild(newCardNode)

    }

    //<div class="numberSpot">13</div>
    //console.log(bingoContainer)
}



function selectCell () {
    let cardNode = document.getElementsByClassName('numberSpot')
    let randomNumber = document.getElementById('displayNumber')

   for (let i = 0; i<cardNode.length; i++){
    if(cardNode[i].innerText===randomNumber.innerText){
        cardNode[i].classList.add('selectedCard')
    }
   }
    

}
//- Take ALWAYS a new number (eg. avoid randoming the number 10 3 times)

function numberGenerator(){

    let numberNode = document.getElementById('displayNumber')
    let randomNumber = Math.floor(Math.random()*99)
    if (numberNode.innerText===randomNumber){

        numberNode.innerText=Math.floor(Math.random()*99)
   
    
    
    }else{
        numberNode.innerText=randomNumber
    }
    
    selectCell ()
}



//EXTRA: 
//- Create a USER BOARD with 24 randomized numbers that highlights as the main board does
//- Let the user choose HOW MANY user boards he's willing to play with and create them.

function cardGenerator(){
    let bingoContainer = document.getElementById('boardContainer')
   
    let cardContainerNode = document.createElement('div')

    cardContainerNode.id
    cardContainerNode.classList.add('bingoBoard')
    bingoContainer.appendChild(cardContainerNode)

    for (let cardNumber=1; cardNumber<24; cardNumber++){
        let newCardNode = document.createElement('div')
        newCardNode.innerText= randomNumber() //change after to random number
        newCardNode.id= cardNumber
        newCardNode.classList.add('numberSpot')

        
        cardContainerNode.appendChild(newCardNode)

        

    }

    selectCell ()
}

function cardFiller(number){
    let bingoContainer = document.getElementsByClassName('bingoBoard')

    for (let cardNumber=1; cardNumber<24; cardNumber++){
        let newCardNode = document.createElement('div')
        newCardNode.innerText= randomNumber() //change after to random number
        newCardNode.id= cardNumber
        newCardNode.classList.add('numberSpot')

        
        bingoContainer[number].appendChild(newCardNode)

    }
}

function displayUserBoard(){
    let bingoContainer = document.getElementsByClassName('bingoBoard')
    
    for (let i = 0; i<bingoContainer.length; i++){

        
        cardFiller(i)
    

    }
    
}
   

    //<div class="numberSpot">13</div>



window.onload = function() {
    //displayBingo()
    selectCell()
    numberGenerator()
    selectCell ()
    displayUserBoard()


}
