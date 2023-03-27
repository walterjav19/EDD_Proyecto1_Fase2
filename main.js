import { ArbolAVL } from './Estructuras/ArbolAVL.js'



window.validateForm =function() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "admin" && password == "admin") {
        alert("Inicio de sesión exitoso");//dashboard admin
        window.location.replace("./Admin_Dashboard/admin.html");
    } else {
        const miobjeto=JSON.parse(localStorage.getItem("Arbol_estudiantes"))
        const Arbol_Alumnos=new ArbolAVL();
        Arbol_Alumnos.arbol=miobjeto.arbol;

        if(Arbol_Alumnos.buscarUser(parseInt(username))===null){
            alert("USUARIO INEXISTENTE!!!!")
        }else{
            if(Arbol_Alumnos.buscarPassword(parseInt(username),password)==null){
                alert("contraseña no coincide con el usuario")
            }else{
                let estudiante=Arbol_Alumnos.buscarPassword(parseInt(username),password)
                console.log(estudiante)
                localStorage.setItem("estudiante",JSON.stringify(estudiante))
                window.location.replace("./User_Dashboard/main_page.html")
            }
        }


        

    }
}

