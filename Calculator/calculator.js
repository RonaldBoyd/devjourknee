
function digit(X){
    //alert(X)
    document.getElementById("register").innerHTML  +=String(X)
}
let O=""
let arg1=""

function compute(X){
let arg2 = document.getElementById("register").innerHTML
document.getElementById("register").innerHTML=""
//alert(arg2)
//alert(O)
//alert(arg1)
switch(O){
    case "+":
    S=parseFloat(arg1)+parseFloat(arg2)
    document.getElementById("register").innerHTML=S
    break;
    case "-":
    S=parseFloat(arg1)-parseFloat(arg2)
    document.getElementById("register").innerHTML=S
    break;
    case "*":
    S=parseFloat(arg1)*parseFloat(arg2)
    document.getElementById("register").innerHTML=S
    break;
    case "/":
    S=parseFloat(arg1)/parseFloat(arg2)
    document.getElementById("register").innerHTML=S
    break;
    case "%":
    S=parseFloat(arg1)%parseFloat(arg2)
    document.getElementById("register").innerHTML=S
    
    default:
    
    document.getElementById("register").innerHTML=S
    
}

    document.getElementById("register").innerHTML=S
}

function operator(X){
    arg1 = document.getElementById("register").innerHTML
    document.getElementById("register").innerHTML=""
    //alert(arg1)
    O=X
    //alert(O)
}


function myfunc(){
    //alert('clear')
    document.getElementById("register").innerHTML=""
}