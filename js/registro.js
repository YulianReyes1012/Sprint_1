var registros = [];

function almacenarRegistros(){

    var usuario = document.getElementById("campoNombre").value;
    var contrasena = document.getElementById("campoContrasena").value;
    var correo = document.getElementById("campoCorreo").value;
    var confcorreo = document.getElementById("campoConfirmacion").value;
    var telefono = document.getElementById("campoTelefono").value;

    var diccionario = {
        "usuario":usuario,
        "contrasena":contrasena,
        "correo":correo,
        "confcorreo":confcorreo,
        "telefono":telefono
    }

    if (registros.length<30){
        registros.push(diccionario);

        console.log("diccionario",diccionario);
        console.log("arreglo",registros);
        return true;
    }
    console.log("arreglolleno",registros);
    return false;
    
}

function ordenarRegistros(arreglo){
    arreglo.sort();
    return arreglo;
}

module.exports.almacenarRegistros = almacenarRegistros();
module.exports.ordenarRegistros = ordenarRegistros();