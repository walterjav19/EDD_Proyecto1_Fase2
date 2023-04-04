import { Arbol} from "../Estructuras/ArbolN.js";
import { CircularLinkedList } from "../Estructuras/lista_circular.js";

document.getElementById("btncrear").onclick=function (){

    $("#miModal").modal("show");
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

document.getElementById("btnSi").onclick=function (){
    let texto=document.getElementById("basic-url").value
    let ruta="/"+texto
    let username=JSON.parse(localStorage.getItem("estudiante")).carnet
    const urls=JSON.parse(localStorage.getItem("urls"+username))


    let newArbol=new Arbol()

    for(let url of urls){
        newArbol.insertar(url)
    }

    newArbol.eliminar(ruta)




    let indice=urls.indexOf(ruta);

    urls.splice(indice, 1);
    
    localStorage.setItem("arboln"+username,JSON.stringify(newArbol))
    localStorage.setItem("urls"+username,JSON.stringify(urls))

    let fecha=new Date();
    let actual="Fecha: "+fecha.getDate()+"-"+(fecha.getMonth()+1)+"-"+fecha.getFullYear()
    let hora="Hora: "+fecha.getHours()+":"+fecha.getMinutes();
    let log="Accion: se elimino carpeta \\n \\\""+ruta+"\\\" \\n"+actual+"\\n"+hora;

    const listaGlobal=JSON.parse(localStorage.getItem("bitacora"+username))
    let listanueva=new CircularLinkedList()
    let puntero=listaGlobal.head
    
    do{
       listanueva.append(puntero.data)
       puntero=puntero.next 
    }while(puntero!==null)

    listanueva.append(log)
    
    localStorage.setItem("bitacora"+username,JSON.stringify(listanueva))
    console.log(ruta)
    $("#exampleModal").modal("hide"); // Oculta la modal
    document.getElementById("basic-url").value="";
}

document.getElementById("buscar").onclick=function (){
    let texto=document.getElementById("basic-url").value
    let ruta="/"+texto
    let username=JSON.parse(localStorage.getItem("estudiante")).carnet
    const urls=JSON.parse(localStorage.getItem("urls"+username))
    const folderContainer = document.querySelector('#folder-container');
    folderContainer.innerHTML = "";

    let newArbol=new Arbol()

    for(let url of urls){
        newArbol.insertar(url)
    }

    if(ruta==="/"){
        

        for(let carpeta of newArbol.arbol.hijos){
            const folder = document.createElement('span');
            folder.classList.add('folder-icon');
            folder.innerHTML = `
              <i class="fa-solid fa-folder" style="color: #e5c810;"></i>
              <span class="folder-name">${carpeta.nombre}</span>
            `;
            folderContainer.appendChild(folder);
        }

    }else{
        const carpetas=newArbol.obtenerHijos(ruta)
        for(let carpeta of carpetas){
            const folder = document.createElement('span');
            folder.classList.add('folder-icon');
            folder.innerHTML = `
              <i class="fa-solid fa-folder" style="color: #e5c810;"></i>
              <span class="folder-name">${carpeta.nombre}</span>
            `;
            folderContainer.appendChild(folder);
        }

    }



}
