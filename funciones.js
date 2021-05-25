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

module.exports = {
    crear
}