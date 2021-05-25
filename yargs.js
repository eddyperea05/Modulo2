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

const creacion = {
    nombre,
    matematicas,
    ingles,
    programacion
}

const argv = require('yargs')
    .command('crear', 'Para crear alumnos', creacion)
    .argv;

module.exports = {
    argv
}