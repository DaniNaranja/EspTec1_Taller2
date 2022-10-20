function clearScreen(){
    document.getElementById("result").innerText= "";
}

function display(value){
    document.getElementById("result").innerText+= value;
}


function calcular(){
    var p = document.getElementById("result").innerText;
    var q = eval(p);
    document.getElementById("result").innerText= q;
}