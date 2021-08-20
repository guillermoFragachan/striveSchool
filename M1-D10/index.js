
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




window.onload = function() {
    //changeHeading()
    //tdLoop()
    //changeLinkBackground()
    console.log('page loaded')
    //extraRow()
    //addClassToRow()
    //addNewElements('example')
    emptyList()


}