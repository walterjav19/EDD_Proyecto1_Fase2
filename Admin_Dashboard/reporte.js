import {Arbol_Alumnos} from '../main.js'
import {Estudiante} from '../Roles/estudiante.js'






let reporte = Arbol_Alumnos.generarDot();

console.log(Arbol_Alumnos.recorridoInOrden(Arbol_Alumnos.arbol));
console.log(Arbol_Alumnos.recorridoPreOrden(Arbol_Alumnos.arbol));
console.log(Arbol_Alumnos.recorridoPosOrden(Arbol_Alumnos.arbol));

document.getElementById("image").src = 'https://quickchart.io/graphviz?graph='+reporte;
