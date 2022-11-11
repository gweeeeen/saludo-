var btngreet =document.getElementById("btnsaludo");
var txtname = document.getElementById("txtnombre");
var txtgreeet = document.getElementById("txtsaludo");

var lista=[ "hello","bonjur","aloha","hallo","ciao","ola","namaste","konichiwa","que más","mamaste"]
function SALUDAR(){
    if (txtname.value =="") {
        alert("error,ingresar un nombre.")
        txtgreeet.innerHTML=""
    }else{
        var nombre = txtname.value 
        var numero =Math.floor(Math.random()*lista.length)
        var saludo =lista[numero]+"," + nombre
        txtgreeet.innerHTML=saludo
    }
}