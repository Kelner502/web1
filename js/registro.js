/*
function redireccion(){
    location.href = "venta.html"
}
*/


function login(){
    
    var user , pass;

user = document.getElementById("usuario").value;
pass = document.getElementById("contraseña").value;

if( user == "Kelner" &&  pass == "1234" || user == "Xela" && pass == "1254" ){

    location.href = "web.html"
     
}else{

    alert("! TU CONTRASEÑA O COREO ELECTRÓNICO ES INCORRECTO !")
}

}
