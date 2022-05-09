$(document).ready(function(){


// HEADPHONES PAGE
var number=1;
document.getElementById("num").innerText=number;

$("#decrease").click(function(){
    number=number-1;
    document.getElementById("num").innerText=number;
});

$("#increase").click(function(){
    number=number+1;
    document.getElementById("num").innerText=number;
});

});