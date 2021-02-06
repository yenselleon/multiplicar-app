/*------------------------------------------*/
/*--Traer el modulo de yargs--*/
/*------------------------------------------*/
const argv = require("yargs")
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true, //indica que el valor es requerido de forma obligatoria
            alias: 'b' //muestra la version corta para llamar al comando
        },
        limite: {
            alias: 'l',
            default: 10 //muestra el valor por defecto de un parametro
        }
    })
    .help() //nos permite tener la posibilidad de listar y mostrar en consola los posibles comandos de nuestra aplicacion
    .argv; 

/*------------------------------------------*/
/*--traer el archivo que multiplica--*/
/*------------------------------------------*/
let {crearArchivo} = require("./crearTablaMulti/app");

//Mandar parametro desde la consola

console.log(argv.base);

let base = argv.base;
let limite = argv.limite;

/*------------------------------------------*/
/*--forma de ejecutarlo sin utilizar yargs--*/
/*------------------------------------------*/
/* let argv = process.argv
let parametro = argv[2];
let base = parametro.split("=")[1]; */



crearArchivo(base, limite)
    .then(archivo => console.log(`Archivo ${archivo} creado`))
    .catch(error => console.log(error));