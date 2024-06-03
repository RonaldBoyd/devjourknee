function addTask(){
    let newli=document.createElement("li")
    inputValue=document.getElementById("newContent").value
    let text=document.createTextNode(inputValue)
    if(inputValue!=="") {
    newli.appendChild(text)
    document.querySelector('ul').appendChild(newli)
    newli.addEventListener("click",function(){
        this.classList.toggle("done")
    })
    newli.addEventListener("dblclick",function(){
        this.parentNode.removeChild(this)
    })
    document.getElementById("newContent").value=""
}
}