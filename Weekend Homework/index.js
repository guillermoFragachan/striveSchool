

//Get body element, declared out of the function because it will be used multible times
/*const bodyNode= document.getElementsByTagName('body')



function headerCreator(_tittle, _subtitle){


    //Create header tag
    let headerNode = document.createElement('header')
    bodyNode[0].prepend(headerNode)

    //Create Title
    let h1Node = document.createElement('h1')
    h1Node.innerHTML=_tittle
    document.getElementsByTagName('header')[0].appendChild(h1Node)


    //Create Subtitle
    let h2Node = document.createElement('h2')
    h2Node.innerHTML=_subtitle
    document.getElementsByTagName('header')[0].appendChild(h2Node)
}


class person{
    constructor(id, name, surname, age, email){
        this.id = id
        this.name = name
        this.surname = surname
        this.age = age
        this.email = email
    }
}
const john = new person

function tableCreator(_rows, _columns, _objects){

}*/


//creates a link into all the IDs 
function addLink (){
    let idNode = document.getElementsByClassName('link')
    let array = []
    for (let i=0;i<idNode.length; i++) {
        array.push(idNode[i].innerHTML)
    }
    
    for(let i =0; i<idNode.length; i++){
        idNode[i].innerText=''
        let linkNode = document.createElement('a')
        linkNode.href='facebook.com' 
        linkNode.innerHTML = array[i]
        idNode[i].appendChild(linkNode)  
    }

}


function textChange(){
    let h1Node = document.getElementsByTagName('h1')[0]
    let inputNode = document.getElementById('changeText').value

   

    if (inputNode==='') {
        alert('Write a valid input')
    }else{
        h1Node.innerHTML=inputNode
    }

    console.log(inputNode)

}


function addColumn2Table(){
    let row = document.getElementById("categories")
    console.log(row)
    let cell1 = row.insertCell(row.length)
    cell1.innerHTML = "Actions"
}


function addButton(){
    let columns = document.querySelectorAll("tr")

    for(i=1;i<columns.length;i++){

    let actionsNode = document.createElement('td')
    let buttonNode = document.createElement('button')
    buttonNode.innerHTML='+'
    buttonNode.classList='add2List'
    actionsNode.appendChild(buttonNode)

    columns[i].appendChild(actionsNode)
    


    }
    let buttonNodes = document.getElementsByClassName('add2List')
    for(let i = 0; i<buttonNodes.length;i++){
        buttonNodes[i].addEventListener('click',add2List)
    }

    
}


function add2List (){
    let listNode = document.getElementsByTagName('ul')[0]
    let element = document.createElement('li')
    element.innerHTML='New student'
    listNode.appendChild(element)

}



/*
    EX12.: Add button for each item of the list. When pressed, the student is removed
     from the list. 

    EX13.: Create a simple form with 5 fields: ID, Name, Surname, Age, Email

    EX14.: Create a button "add students" which adds a new row to the table

    EX15.: Add a "counter section" in which there is always the number of items in the 
    List

    */


function addBtn2List(){
    let lINode = document.getElementsByTagName('li')
    
    for (let i=0;i<lINode.length;i++){
        let btnNode = document.createElement('button')
        btnNode.classList='removeButton'
        btnNode.innerText='  Remove Element'
        btnNode.addEventListener('click', ()=>{
            lINode[i].remove()
        } )
        lINode[i].appendChild(btnNode)
    }
}

window.onload = function() {
    //headerCreator('Homework', 'Weekend exercises')
    //tableCreator()
    addLink()
    addColumn2Table()
    addButton()
    //objectCreator('538', 'John', 'Smith','32','smith@gmail.com' )
    addBtn2List()
    


}