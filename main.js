import {Estudiante} from './Roles/estudiante.js'
import {ArbolAvl} from './Estructuras/ArbolAVL.js'




window.validateForm =function() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "admin" && password == "admin") {
        alert("Inicio de sesión exitoso");//dashboard admin
    } else {
        alert("El nombre de usuario o la contraseña son incorrectos");//dashboard usuario   
    }
}
