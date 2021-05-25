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
    let estudianteB = listaEstudiantes.find(buscar => buscar.nombre == estudianteNombre)
    if (!estudianteB) {
        console.log('El estudiante no existe')
    } else {
        console.log(estudianteB.nombre)
        console.log('Notas')
        console.log('matematicas: ' + estudianteB.matematicas)
        console.log('Ingles: ' + estudianteB.ingles)
        console.log('Programación: ' + estudianteB.programacion + '\n')
    }
}

const mostrarMat = () => {
    listar()
    let ganan = listaEstudiantes.filter(mat => mat.matematicas >= 3)
    if (ganan.length == 0) {
        console.log('No han ganado estudiantes')
    } else {
        ganan.forEach(estudiante => {
            console.log(estudiante.nombre)
            console.log('Nota')
            console.log('matematicas: ' + estudiante.matematicas + '\n')
        })
    }
}


const promedioEstudiante = (nomEst) => {
    listar()
    let estudianteB = listaEstudiantes.find(buscar => buscar.nombre == nomEst)
    if (!estudianteB) {
        console.log('El estudiante no existe')
    } else {
        console.log('Nombre del estudiante: ' + estudianteB.nombre)
        console.log('Promedio: ' + (estudianteB.matematicas + estudianteB.ingles + estudianteB.programacion) / 3)
    }
}

const promedioGeneral = () => {
    listar()
    let estudianteB = listaEstudiantes.filter(prom => ((prom.matematicas + prom.ingles + prom.programacion) / 3) > 3)
    if (!estudianteB) {
        console.log('No hay estudiantes con promedio mayor a 3')
    } else {
        estudianteB.forEach(estudiante => {
            console.log('Nombre del estudiante: ' + estudiante.nombre)
            console.log('matematicas: ' + estudiante.matematicas)
            console.log('Ingles: ' + estudiante.ingles)
            console.log('Programación: ' + estudiante.programacion + '\n')
            console.log('Promedio: ' + (estudiante.matematicas + estudiante.ingles + estudiante.programacion) / 3 + '\n')
        })

    }
}

module.exports = {
    crear,
    mostrar,
    mostrarEst,
    mostrarMat,
    promedioEstudiante,
    promedioGeneral
}