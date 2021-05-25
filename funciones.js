const fs = require('fs')
listaEstudiantes = [];

const crear = (estudiante) => {
    listar();
    let est = {
        nombre: estudiante.nombre,
        matematicas: estudiante.matematicas,
        ingles: estudiante.ingles,
        programacion: estudiante.programacion
    };
    let duplicado = listaEstudiantes.find(nom => nom.nombre == estudiante.nombre)
    if (!duplicado) {
        listaEstudiantes.push(est);
        console.log(listaEstudiantes)
        guardar();
    } else {
        console.log('Ya existe un estudiante con ese nombre')
    }

}

const listar = () => {
    try {
        listaEstudiantes = require('./listado.json') //Solo una vez
            //listaEstudiantes = JSON.parse(fs.readFileSync())
    } catch (error) {
        listaEstudiantes = []
    }
}

const guardar = () => {
    let datos = JSON.stringify(listaEstudiantes)
    fs.writeFile('listado.json', datos, (err) => {
        if (err) throw (err);
        console.log("Archivo Creado con exito")
    })
}

const mostrar = () => {
    listar();
    console.log('Notas de los estudiantes' + '\n')
    listaEstudiantes.forEach(estudiante => {
        console.log(estudiante.nombre)
        console.log('Notas')
        console.log('matematicas: ' + estudiante.matematicas)
        console.log('Ingles: ' + estudiante.ingles)
        console.log('Programación: ' + estudiante.programacion + '\n')
    })
}

const mostrarEst = (estudianteNombre) => {
    listar()
    let estudianteB = listaEstudiantes.find(nom => nom.nombre == estudianteNombre)
    if (!estudianteB) {
        console.log('Se ha encontrado el estudiante')
    } else {
        console.log('El estudiante no existe')
    }
}

module.exports = {
    crear,
    mostrar,
    mostrarEst
}