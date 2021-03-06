const { argv } = require('./yargs');
const funciones = require('./funciones')

let comando = argv._[0]

switch (comando) {
    case 'crear':
        funciones.crear(argv);
        break;

    case 'mostrar':
        funciones.mostrar();
        break;
    case 'mostrarEst':
        funciones.mostrarEst(argv.nombre);
        break;

    case 'mostrarMat':
        funciones.mostrarMat();
        break;

    case 'promedioEstudiante':
        funciones.promedioEstudiante(argv.nombre);
        break;
    case 'promedioGeneral':
        funciones.promedioGeneral();
        break;
    case 'actualizar':
        funciones.actualizar(argv.nombre, argv.asignatura, argv.calificacion);
        break;
    case 'eliminar':
        funciones.eliminar(argv.nombre);
        break;
    default:
        console.log('No ingreso una función existente')
        break;
}

if (argv._[0] == 'crear') {

}