const colors = require('colors');

// Definición de una función asíncrona llamada mostrarMenu
const mostrarMenu = () => {
    // Retorna una promesa para manejar la entrada de usuario de manera asíncrona
    return new Promise(resolve => {
        // Muestra el menú en la consola con diferentes opciones
        console.log(`=============================`.green);
        console.log(`    Seleccione una opción     `.green);
        console.log(`=============================\n`.green);
        console.log(` ${'1.'.green} Crear nuevo producto`);
        console.log(` ${'2.'.green} Lista de productos`);
        console.log(` ${'3.'.green} Listar clientes`);
        console.log(` ${'4.'.green} Listar pedidos`);
        console.log(` ${'5.'.green} Enviar pedidos`);
        console.log(` ${'6.'.green} Borrar pedido`);
        console.log(` ${'0.'.green} Salir\n`);

        // Crea una interfaz de lectura de línea para leer la entrada del usuario
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        // Pregunta al usuario que seleccione una opción
        readline.question('Seleccione una opción: ', opt => {
            // Cierra la interfaz de lectura de línea y resuelve la promesa con la opción seleccionada
            readline.close();
            resolve(opt);
        });
    });
};

// Definición de una función asíncrona llamada pausa
const pausa = () => {
    // Retorna una promesa para manejar la pausa de la ejecución de manera asíncrona
    return new Promise(resolve => {
        // Crea una interfaz de lectura de línea para leer la entrada del usuario
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        // Pregunta al usuario que presione ENTER para continuar
        readline.question(`\nPresione ${'ENTER'.yellow} para continuar\n`, opt => {
            // Cierra la interfaz de lectura de línea y resuelve la promesa
            readline.close();
            resolve();
        });
    });
};

// Exporta las funciones mostrarMenu y pausa para ser utilizadas en otros archivos
module.exports = {
    mostrarMenu,
    pausa
};


