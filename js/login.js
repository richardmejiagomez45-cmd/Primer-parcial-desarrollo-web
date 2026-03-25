function login(){

let user = document.getElementById("user").value;
let pass = document.getElementById("pass").value;

if(user === "admin" && pass === "54321"){

window.location.href="index.html";

}else{

document.getElementById("error").innerText="Usuario o contraseña incorrectos";

}

}