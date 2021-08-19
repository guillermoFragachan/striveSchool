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
   

    

    for (let cardNumber=1; cardNumber<77; cardNumber++){
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

function numberGenerator(){
    let randomNumber = Math.floor(Math.random()*99)
    let numberNode = document.getElementById('displayNumber')
    numberNode.innerText=randomNumber
    
}


window.onload = function() {
    displayBingo()
    selectCell()
    numberGenerator()
    selectCell ()
}