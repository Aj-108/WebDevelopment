function firstButton(){
    document.getElementById("change").innerHTML = "Clicked first Button " ;
}

function secondButton(){
    document.getElementById("change").innerHTML = "Clicked second Button " ;
}

function hide(){
    var x = document.getElementById("test") ;
    x.className = "close" ;
}

function show(){
    var x = document.getElementById("test") ;
    x.className = "open" ;
} 