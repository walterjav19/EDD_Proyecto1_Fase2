import { ArbolAVL } from './Estructuras/ArbolAVL.js'
import {CircularLinkedList} from './Estructuras/lista_circular.js'
import { Arbol } from './Estructuras/ArbolN.js';

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
                let lista=new CircularLinkedList()
                let arboln=new Arbol()
                let estudiante=Arbol_Alumnos.buscarPassword(parseInt(username),password)
                let fecha=new Date();
                let actual="Fecha: "+fecha.getDate()+"-"+(fecha.getMonth()+1)+"-"+fecha.getFullYear()
                let hora="Hora: "+fecha.getHours()+":"+fecha.getMinutes();
                let log="Accion: log \\n"+actual+"\\n"+hora;
                
                if(localStorage.getItem("bitacora"+username)===null){
                    let urls=[]
                    lista.append(log)
                    localStorage.setItem("bitacora"+username,JSON.stringify(lista))
                    localStorage.setItem("arboln"+username,JSON.stringify(arboln))
                    localStorage.setItem("urls"+username,JSON.stringify(urls))
                }else{
                    const listaGlobal=JSON.parse(localStorage.getItem("bitacora"+username))
                    let listanueva=new CircularLinkedList()
                    let puntero=listaGlobal.head
                    
                    do{
                       listanueva.append(puntero.data)
                       puntero=puntero.next 
                    }while(puntero!==null)

                    listanueva.append(log)
                    console.log(listanueva.hacerdot())

                    
                    localStorage.setItem("bitacora"+username,JSON.stringify(listanueva))
                }
                
                
                
            
                localStorage.setItem("estudiante",JSON.stringify(estudiante))
                window.location.replace("./User_Dashboard/main_page.html")
            }
        }


        

    }
}

