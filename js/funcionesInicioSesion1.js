
let tienda
let arreglo = []



function almacenarRegistros() {
    let objeto = {
        'nombre': document.getElementById('campoNombre').value,
        'contrasena': document.getElementById('campoUsuarioContrasena').value,
        'correo': document.getElementById('campoUsuarioCorreo').value,
        'confirmacioncorreo': document.getElementById('campoConfirmacionCorreo').value,
        'telefono': document.getElementById('campoTelefono').value};
    tienda = objeto
    arreglo.push(tienda);
    console.log("Registrado");
    if (arreglo.length > 30) {
        arreglo.splice(arreglo.length - 1, 1);
        alert('Ya lleva 30 registros') }}
        
function verificarInicioSesion (correo,contrasena) {
    console.log("correo",correo, "contrasena" , contrasena  )
    arreglo.forEach(element => {
        if (element.correo == correo && element.contrasena == contrasena ) {
            console.log("correo igual");
            let respuesta = prompt('¿Cuato es 33x43?');
            verificarCaptcha(respuesta);
        
        }
        else {
            console.log("correo no es igual");
        }
        console.log(element);
    });}



function verificarCaptcha(respuesta)  {

if (respuesta == 1419) {
    console.log("Captcha Verificado")
    return true

}
else {
    console.log("Captcha errado")
    return false
}}


module.exports.arreglo = arreglo;
module.exports.almacenarRegistros = almacenarRegistros;
module.exports.verificarInicioSesion = verificarInicioSesion;
