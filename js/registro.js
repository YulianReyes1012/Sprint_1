// arreglo ( vector )
var arreglo = [];

function almacenarRegistros(){
// variables
    var usuario = document.getElementById("campoNombre").value;
    var contrasena = document.getElementById("campoContrasena").value;
    var correo = document.getElementById("campoCorreo").value;
    var confcorreo = document.getElementById("campoConfirmacion").value;
    var telefono = document.getElementById("campoTelefono").value;
// diccionario
    var diccionario = {
        "usuario":usuario,
        "contrasena":contrasena,
        "correo":correo,
        "confcorreo":confcorreo,
        "telefono":telefono
    }
// es menor a 30
    if (arreglo.length<30){
        arreglo.push(diccionario);
// imprime
        console.log("diccionario",diccionario);
        console.log("arreglo",arreglo);
        return true;
    }
    console.log("arreglolleno",arreglo);
    return false;
    
}

//module.exports.validar_correo = validar_correo;
//module.exports.validar_contrasena_usuario = validar_contrasena_usuario;