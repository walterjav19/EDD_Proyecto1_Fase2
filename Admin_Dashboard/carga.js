import {Estudiante} from '../Roles/estudiante.js'
import { ArbolAVL } from '../Estructuras/ArbolAVL.js';



   document.getElementById("jsonFile").addEventListener("change", function () {
        
        let file_to_read = document.getElementById("jsonFile").files[0];
        let fileread = new FileReader();
        fileread.onload = function (e) {
            let content = e.target.result;
            let intern = JSON.parse(content);
            for (let alumno of intern.alumnos){
              let e=new Estudiante(alumno.nombre,alumno.carnet,alumno.password,alumno.Carpeta_Raiz);
              Arbol_Alumnos.insertar(e);
            }
            console.log(intern.alumnos)
            console.log(Arbol_Alumnos);
            console.log(Arbol_Alumnos.generarDot());
            localStorage.setItem("Arbol_estudiantes",JSON.stringify(Arbol_Alumnos));
            alert("Estudiantes Correctamente Cargados")
        };
        fileread.readAsText(file_to_read);

    }
    );

    let Arbol_Alumnos=new ArbolAVL();
