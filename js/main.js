const listaNombres = [];
let listaAlumnos = []
let calificacionTareaTotal = 0
let totalExamen
let totalAsistencia
let totalCalifTareas
let calificacionTarea
let nombreAlum, alumnos

class Alumno {
    constructor(totalCalifTareas, totalExamen, totalAsistencia, promTotal) {
        this.totalCalifTareas = totalCalifTareas;
        this.totalExamen = totalExamen
        this.totalAsistencia = totalAsistencia
        this.promTotal = promTotal
    }
}
alert("Fecha y hora del día de hoy: \n" + new Date())
let cantidadAlumnos = Number(prompt("Ingresa con número ¿Cuántos alumnos son a calificar?: "))
if (isNaN(cantidadAlumnos)) {
    alert("No es valor númerico, por favor intenta de nuevo")
}
else {
    for (let j = 0; j < cantidadAlumnos; j++) {
        listaNombres[j] = prompt("Ingresa el nombre del alumno a calificar: ")

        //Función para sacar promedio de tareas 
        function promTareas() {
            let numTareas = Number(prompt("¿Cuántas tareas a calificar son? "))
            if (isNaN(numTareas)) {
                alert("No es valor númerico")
            }
            else {
                calificacionTareaTotal = 0;
                for (let i = 0; i < numTareas; i++) {
                    calificacionTarea = Number(prompt("Ingresa la calificación de tarea " + (i + 1) + ":"))
                    if (calificacionTarea >= 0 && calificacionTarea <= 100) {
                        calificacionTareaTotal = calificacionTareaTotal + calificacionTarea;
                        totalCalifTareas = (calificacionTareaTotal / numTareas) * .20
                    }
                    else {
                        alert("Ingresa una calificación entre 0 y 100")
                        break
                    }
                }
            }
            return totalCalifTareas
        }
        console.log(promTareas())

        let examen = Number(prompt("Ingresa calificación de examen: "))
        if (isNaN(examen)) {
            alert("No es valor númerico")
            examen = Number(prompt("Ingresa calificación de examen: "))
            if (examen >= 0 && examen <= 100) {
                totalExamen = examen * .60
            }
            else {
                alert("Ingresa una calificación entre 0 y 100")
                examen = Number(prompt("Ingresa calificación de examen: "))
                totalExamen = examen * .60
            }
        }
        else if (examen >= 0 && examen <= 100) {
            totalExamen = examen * .60
        }
        else {
            alert("Ingresa una calificación entre 0 y 100")
            examen = Number(prompt("Ingresa calificación de examen: "))
            totalExamen = examen * .60

        }

        let asistencia = Number(prompt("Ingresa calificación de asistencia: "))
        if (isNaN(asistencia)) {
            alert("No es valor númerico")
            asistencia = Number(prompt("Ingresa calificación de asistencia: "))
            if (asistencia >= 0 && asistencia <= 100) {
                totalAsistencia = asistencia * .20
                alert("El promedio de " + listaNombres[j] + " es de: " + promedioTotal())
                alumnos = new Alumno(totalCalifTareas, totalExamen, totalAsistencia, promTotal)
                listaAlumnos.push(alumnos)
            }
            else {
                alert("Ingresa una calificación entre 0 y 100")
                asistencia = Number(prompt("Ingresa calificación de asistencia: "))
                totalAsistencia = asistencia * .20
                alert("El promedio de " + listaNombres[j] + " es de: " + promedioTotal())
                alumnos = new Alumno(totalCalifTareas, totalExamen, totalAsistencia, promTotal)
                listaAlumnos.push(alumnos)
            }
        }
        else if (asistencia >= 0 && asistencia <= 100) {
            totalAsistencia = asistencia * .20
            //mandamos llamar la función para sacar promedio completo
            alert("El promedio de " + listaNombres[j] + " es de: " + promedioTotal())
            alumnos = new Alumno(totalCalifTareas, totalExamen, totalAsistencia, promTotal)
            listaAlumnos.push(alumnos)
        }
        else {
            alert("Ingresa una calificación entre 0 y 100")
            asistencia = Number(prompt("Ingresa calificación de asistencia: "))
            totalAsistencia = asistencia * .20
            alert("El promedio de " + listaNombres[j] + " es de: " + promedioTotal())
            alumnos = new Alumno(totalCalifTareas, totalExamen, totalAsistencia, promTotal)
            listaAlumnos.push(alumnos)
            alert("Calificaciones de: " + listaNombres[j] + "son" + listaAlumnos)


        }

        //Función para sacar el promedio total contando tareas, examen y asistencia
        function promedioTotal() {

            return promTotal = totalExamen + totalAsistencia + totalCalifTareas
        }
        //console.log(promedioTotal())


    }

    console.log("Alumnos ingresados: \n"+ listaNombres.join(", "))
    console.log("Calificaciones de alumnos: \n")
    for(j=0; j<listaNombres.length; j++){
        console.log(listaNombres[j])
        console.log("Porcentaje total en asistencia: " + listaAlumnos[j].totalAsistencia)
        console.log("Porcentaje total en examen: " + listaAlumnos[j].totalExamen)
        console.log("Porcentaje total en tareas: " + listaAlumnos[j].totalCalifTareas)
        console.log("Promedio total: " + listaAlumnos[j].promTotal)
    }

}

const promediosAltos = listaAlumnos.filter((el) => el.promTotal >= 80)
console.log("PROMEDIOS TOTALES MAYORES DE 80")
console.log(promediosAltos)
const promediosMedios = listaAlumnos.filter((el) => el.promTotal >60 && el.promTotal <80)
console.log("PROMEDIOS TOTALES ENTRE 60 Y 80")
console.log(promediosMedios)
const promediosBajos = listaAlumnos.filter((el) => el.promTotal <= 60)
console.log("PROMEDIOS TOTALES MENORES DE 80")
console.log(promediosBajos)
