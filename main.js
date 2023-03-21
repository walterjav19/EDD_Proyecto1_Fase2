import {Estudiante} from './Roles/estudiante.js'
import {ArbolAVL} from './Estructuras/ArbolAVL.js'


let avl = new ArbolAVL();

avl.insertar(new Estudiante("WALTER",1,"a"));
avl.insertar(new Estudiante("Javier",2,"a"));
avl.insertar(new Estudiante("Damian",3,"a"));
avl.insertar(new Estudiante("Damian",4,"a"));
avl.insertar(new Estudiante("Damian",5,"a"));
avl.insertar(new Estudiante("Damian",6,"a"));
avl.insertar(new Estudiante("Damian",7,"a"));
avl.insertar(new Estudiante("Damian",8,"a"));

let reporte = avl.generarDot();

console.log(reporte);
console.log(avl.recorridoInOrden(avl.arbol))


window.validateForm =function() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "admin" && password == "admin") {
        alert("Inicio de sesión exitoso");//dashboard admin
        window.location.href="./Admin_Dashboard/admin.html";
    } else {
        alert("El nombre de usuario o la contraseña son incorrectos");//dashboard usuario   
    }
}
