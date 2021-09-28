
function validar_correo (correo){
//document.getElementById("campocorreo").innerHTML;

    if(correo.indexOf('@') == -1 ){
        console.log("El correo debe tener @");
        return false;
    }

    if(correo.length < 15)
    {
        console.log("El correo debe tener una longitud mayor a 15 caracteres");
        return false;
    }

    if(correo.length > 40)
    {
        console.log("El correo debe tener una longitud menor a 40 caracteres");
        return false;

    }

    var ultfinal=[".com" , ".es" ,  ".co", ".org"];
    var ultsub = correo.lastIndexOf('.');
    var dominio = correo.substring(ultsub);
    var val = false;
    for (i=0; i<ultfinal.length; i++)
    {
        if (dominio==ultfinal[i])
        {
            val=true;
        }
        
    }
    if (val == false){
        console.log("El correo debe tener uno de los siguientes dominios '.com' , '.es' ,  '.co', '.org' ");
        return false;
    }
    console.log("Registro correo exitoso");
    return true;
}

function validar_contrasena_usuario (usuario, contrasena) {
// document.getElementById("campousuario").innerHTML;
//document.getElementById("campocontrasena").innerHTML;
    if (usuario.length<6)
    {
        console.log("El usuario debe tener mas de 6 caracteres");
        return false;
    }
    if(usuario.length>12)
    {
        console.log("El usuario debe tener menos de 12 caracteres");
        return false;

    }
    
    var regexp = /^[A-Z]/;
    if(!regexp.test(usuario))
    {
        console.log("El usuario debe tener un caracterer en mayuscula");
        return false;
    }
    if (contrasena.length<6)
    {
        console.log("La contraseña debe tener mas de 6 caracteres");
        return false;
    }
    if(contrasena.length>12)
    {
        console.log("La contraseña debe tener menos de 12 caracteres");
        return false;
    }
     if(!regexp.test(contrasena))
    {
        console.log("La contraseña debe tener un caracterer en mayuscula");
        return false;
    }
    
    console.log("Registro exitoso");
    return true;
    
}

module.exports.validar_correo = validar_correo;
module.exports.validar_contrasena_usuario = validar_contrasena_usuario;