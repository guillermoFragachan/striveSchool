

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

/*
EX5.: Add a text input "textChange" for plain text
    EX6.: Add a button next to "textChange", when pressed the title and 
    the H1 of the page must be changed with the content of "textChange"

    */


function textChange(){
    let h1Node = document.getElementsByTagName('h1')[0]
    let inputNode = document.getElementById('changeText').value

    h1Node.innerHTML=inputNode

    console.log(inputNode)

}

window.onload = function() {
    //headerCreator('Homework', 'Weekend exercises')
    //tableCreator()
    addLink()
    //objectCreator('538', 'John', 'Smith','32','smith@gmail.com' )


}