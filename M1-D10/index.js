

const containerNode = document.getElementById('container')




function tdLoop(){
    let tdNode = document.getElementsByTagName('td')
    for (let i = 0; i < tdNode.length; i++) {
        tdNode[i].innerText = 'change td text'        
    }
    
}

function changeHeading(){
    let h1Node = document.getElementsByTagName('h1')
    h1Node[0].innerHTML='change tittle'
}

function extraRow(){
    let listNode = document.getElementsByTagName('table')
    let extraRow = document.createElement('tr')
    listNode[0].appendChild(extraRow)


    for (let i = 0; i < 3; i++) {
           
        let element = document.createElement('td') 
        element.innerHTML='extra row'
        extraRow.appendChild(element)
 
        
    }
    
    console.log(extraRow)

}

function addClassToRow(){
    let rowNode = document.getElementsByTagName('tr')

    for (let i = 0; i < rowNode.length; i++) {
        rowNode[i].classList.add('test')
        
    }



}

function changeLinkBackground(){
    let linkNode = document.getElementsByTagName('a')
    for (let i = 0; i < linkNode.length; i++) {
        linkNode[i].classList.add('redbackground')
        
    }
}

function addNewElements(_text){
    let ulNode = document.getElementsByTagName('ul')
    let newItem = document.createElement('li')
    newItem.innerText= _text
    ulNode[0].appendChild(newItem)
}
//40) Write a function to empty a list

function emptyList(){
    let listNode = document.getElementsByTagName('ul')
    listNode[0].remove()
    console.log(listNode)
}


function alert(){

}

function hideIMG(){
    let IMGNode = document.getElementsByTagName('img')

    for (let i = 0; i < IMGNode.length; i++) {
        IMGNode[i].classList.add('hidden')
        
    }
}

function toggleTable() {
    let tableNode = document.getElementById('mainTable')
    tableNode.classList.toggle('hidden')
}
//do later
function sumTD(){
    let td = document.getElementById('sum')
    console.log(td)
    
}


function deleteLastLetter(){
    let h1Node = document.getElementById('firstHeading')
    let text = h1Node.innerHTML
    let onecless = text.substring(0, text.length - 1)
    h1Node.innerHTML=text.substring(0, text.length - 1)
    console.log( )

}

function changeTDbackground(){
    let fruits = document.getElementById('fruits')

    fruits.classList.toggle('test')

}


function alrter(){
    let element = document.getElementById('mainTable')
    let elements = document.getElementsByTagName('a')
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener("mouseover", function(){console.log('alert')})

    }

        console.log(element)
  
}





function randomeSelect(){
    let amountOfTd = document.getElementsByTagName('td')
    let numberBetween = Math.floor(Math.random()*amountOfTd.length)
    return numberBetween
}

function randomDelete(){
    let amountOfTd = document.getElementsByTagName('td')
    amountOfTd[randomeSelect()].remove()



}

function tableRemove(){
    let table = document.getElementById('mainTable')
    table.remove()
    
}

function changeColor(){
    let element = document.getElementById('sum')
    event.target.style.color = "blue"

}

function addPinkBorder(a){
    let elements = document.getElementsByTagName('td')
    console.log(elements)
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener("mouseover", function(){elements[i].style.backgroundColor = 'green'})
        elements[i].addEventListener("mouseleave", function(){elements[i].style.backgroundColor = ''})
        
        
    }

}



function tableGenerator(){
    let containerNode = document.getElementById('container')

    let table = document.createElement('table')
    containerNode.appendChild(table)

    for (let i = 0; i < 4; i++) {
        let trNode = document.createElement('tr')
        trNode.innerHTML='dsdasdad'
        table.appendChild(trNode)
        for (let i = 0; i < 3; i++) {
            let tdNode = document.createElement('td')
            tdNode.innerHTML='123'
            trNode.appendChild(tdNode)
            
        }

    }



}


/*
44) Write a function to sum every number inside the TD (if the content is numeric)

1) find TD in a table
2) get value of td
3) Convert that value to number
4) sum the values




*/

function ex44 () {
    const tds = document.querySelectorAll("#tableid  td")
    let sum = 0

    for (let td of tds) {
        const number = parseInt(td.innerHTML) // NaN
        if (!Number.isNaN(number)) sum += number
    }

    return sum
}



window.onload = function() {
    //changeHeading()
    //tdLoop()
    //changeLinkBackground()
    console.log('page loaded')
    //extraRow()
    //addClassToRow()
    //addNewElements('example')
    //emptyList()
    sumTD()
    //alrter()
    addPinkBorder()
    

}