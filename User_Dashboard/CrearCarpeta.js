import { Arbol} from "../Estructuras/ArbolN.js";
import { CircularLinkedList } from "../Estructuras/lista_circular.js";

document.getElementById("btncrear").onclick=function (){

    $("#miModal").modal("show");
}

document.getElementById("cerrar").onclick=function (){
    $("#miModal").modal("hide"); // Oculta la modal
}

document.getElementById("cerrar2").onclick=function (){
    $("#miModal").modal("hide"); // Oculta la modal
}


document.getElementById("miBotonModal").onclick=function (){
    let ruta=document.getElementById("miCampo").value
    let username=JSON.parse(localStorage.getItem("estudiante")).carnet
    let newArbol=new Arbol()
    const urls=JSON.parse(localStorage.getItem("urls"+username))
    urls.push(ruta)
    localStorage.setItem("urls"+username,JSON.stringify(urls))


    let fecha=new Date();
    let actual="Fecha: "+fecha.getDate()+"-"+(fecha.getMonth()+1)+"-"+fecha.getFullYear()
    let hora="Hora: "+fecha.getHours()+":"+fecha.getMinutes();
    let log="Accion: se creo carpeta \\n \\\""+ruta+"\\\" \\n"+actual+"\\n"+hora;

    const listaGlobal=JSON.parse(localStorage.getItem("bitacora"+username))
    let listanueva=new CircularLinkedList()
    let puntero=listaGlobal.head
    
    do{
       listanueva.append(puntero.data)
       puntero=puntero.next 
    }while(puntero!==null)

    listanueva.append(log)
    
    localStorage.setItem("bitacora"+username,JSON.stringify(listanueva))


    

    for(let url of urls){
        newArbol.insertar(url)
    }
    
    
    localStorage.setItem("arboln"+username,JSON.stringify(newArbol))

    
    document.getElementById("miCampo").value="";
    $("#miModal").modal("hide"); // Oculta la modal
}

