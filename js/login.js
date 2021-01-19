var usuarioLogin = document.getElementById("txtLoginUser");
var contraseñaLogin = document.getElementById("txtContraUser");
var btnLogin = document.getElementById("form");

btnLogin.addEventListener ('submit', function(event){
    event.preventDefault();
    if (usuarioLogin.value ==='12345' && contraseñaLogin.value === '12345'){
        alert("Inicio de sesion exitoso");
        window.location.href="index.html";
     }
     else
     {
       alert("Los datos son incorrectos ");
       alert("PODRA VER LA PAGINA PERO SIN INISCIAR SECION ");
       window.location.href="index.html";
       return false;
     }
    
    });

 