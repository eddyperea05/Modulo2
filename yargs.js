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

const argv = require('yargs')
    .command('crear', 'Para crear alumnos', creacion)
    //.command('mostrar', 'Muestra los alumnos regristrados al momento')
    .command('mostrarEst', 'Muestra los alumnos regristrados al momento', muestreEst)
    .command('promedioEstudiante', 'Realiza el promedio de un estudiante', muestreEst)
    .argv;

module.exports = {
    argv
}