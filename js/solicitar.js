 
    var contraseñaRegistro = document.getElementById("txtContraseñaUsuarioRegistro");
    var NombreRegistro = document.getElementById("txtNombreusuarioRegistro");
    var ApellidoRegistro = document.getElementById("txtApellidoUsuarioregistro");
    var BarrioRegistro = document.getElementById("txtBarrioUsuarioRegistro");
    var EmailRegistro = document.getElementById("txtEmailUsaurioRegistro");
    var TelefonoRegistro= document.getElementById("txtTelefonoUsiarioRegistro");
    var btnRegistro = document.getElementById("solicit");  

    btnRegistro.addEventListener ('submit', function(event){
        event.preventDefault();
        
        if (NombreRegistro.value === null || NombreRegistro.value === "")
        {
            alert("El campo Nombre  esta vacio");
            return false;
        } 
        if (ApellidoRegistro.value === null || ApellidoRegistro.value === "")
        {
            alert("El campo Apellido  esta vacio");
            return false;
        } 
        if (BarrioRegistro.value === null || BarrioRegistro.value === "")
        {
            alert("El campo Nacionalidad  esta vacio");
            return false;
        } 
        if (EmailRegistro.value === null || EmailRegistro.value === "")
        {
            alert("El campo Email  esta vacio");
            return false;
        } 
        if (TelefonoRegistro.value === null || TelefonoRegistro.value === "")
        {
            alert("El campo Telefono  esta vacio");
            return false;
        } 
        else{
            alert("Se ha envado la solcitub");
         location.href="Transacion.html"
        
        } 
        });
   