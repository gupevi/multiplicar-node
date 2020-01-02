const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: `lim`,
            default: 10
        }
    })
    .command('crear', 'Crea un archivo con la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: `lim`,
            default: 10
        }
    })
    .help()
    .argv;


const { crearArchivo, listarTabla } = require('./Multiplicar/Multiplicar');

let comando = argv._[0];


switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        //console.log('Crear');
        crearArchivo(argv.base, argv.limmite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log('La base', e));
        break;


    default:
        console.log('Comando no reconocido');
}

//console.log(argv);

//let argv2 = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1];

//console.log('Limite', argv.limite);


/*

*/