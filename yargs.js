const nombre = {
    demand: true,
    alias: 'n'
}

const matematicas = {
    demand: true,
    alias: 'm'
}

const ingles = {
    demand: true,
    alias: 'i'
}


const programacion = {
    demand: true,
    alias: 'p'
}

const muestreEst = {
    nombre
}

const creacion = {
    nombre,
    matematicas,
    ingles,
    programacion
}

const actualizar = {
    nombre,
    asignatura: {
        demand: true,
        alias: 'a'
    },
    calificacion: {
        demand: true,
        alias: 'c'
    }
}

const eliminar = {
    nombre
}

const argv = require('yargs')
    .command('crear', 'Para crear alumnos', creacion)
    //.command('mostrar', 'Muestra los alumnos regristrados al momento')
    .command('mostrarEst', 'Muestra los alumnos regristrados al momento', muestreEst)
    .command('promedioEstudiante', 'Realiza el promedio de un estudiante', muestreEst)
    .command('actualizar', 'Realizar modificaciones en los alumnos', actualizar)
    .command('eliminar', 'Realizar modificaciones en los alumnos', eliminar)
    .argv;

module.exports = {
    argv
}