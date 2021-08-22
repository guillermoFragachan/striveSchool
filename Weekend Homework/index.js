

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


/*

    EX8.: Add a new section with title "Enrolled Students"
    EX9.: Add an empty UL or DIV inside this new section
    EX10.: Add an extra column to the Table named "actions"


    */

function addRow2Table(){
    let table = document.getElementById("myTable");
    let row = table.insertRow(table.lenght);

    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);

    cell1.innerHTML = "NEW CELL1";
    cell2.innerHTML = "NEW CELL2";
}

window.onload = function() {
    //headerCreator('Homework', 'Weekend exercises')
    //tableCreator()
    addLink()
    //objectCreator('538', 'John', 'Smith','32','smith@gmail.com' )


}