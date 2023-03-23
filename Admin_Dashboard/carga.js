import {Estudiante} from '../Roles/estudiante.js'
import { ArbolAVL } from '../Estructuras/ArbolAVL.js';
  
   /*document.getElementById("jsonFile").addEventListener("change", function () {
        
        let file_to_read = document.getElementById("jsonFile").files[0];
        let fileread = new FileReader();
        fileread.onload = function (e) {
            let content = e.target.result;
            let intern = JSON.parse(content);
            for (let alumno of intern.alumnos){
              let e=new Estudiante(alumno.nombre,alumno.carnet,alumno.password,alumno.raiz);
              Arbol_Alumnos.insertar(e);
            }
            console.log(intern.alumnos)
            console.log(Arbol_Alumnos);
            console.log(Arbol_Alumnos.generarDot());
            
        };
        fileread.readAsText(file_to_read);

    }
    );*/

    export let Arbol_Alumnos=new ArbolAVL();
    export function inserta(){
        Arbol_Alumnos.insertar(new Estudiante("wALTER",202111718,"CESA","/"));
        Arbol_Alumnos.insertar(new Estudiante("JAVIER",202018918,"CESA","/"))
        Arbol_Alumnos.insertar(new Estudiante("DAMIAN",202251412,"CESA","/"))
    }  
    