$(document).ready(function(){

    // DROPDOWN MENU
$("#navIcon").click(function(){
    $("#dropMenu").toggle()
});

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



})