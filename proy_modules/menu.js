const colors = require('colors');

const mostrarMenu = () => {
    return new Promise(resolve => {
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

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question('Seleccione una opción: ', opt => {
            readline.close();
            resolve(opt);
        });
    });
};

const pausa = () => {
    return new Promise(resolve => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question(`\nPresione ${'ENTER'.yellow} para continuar\n`, opt => {
            readline.close();
            resolve();
        });
    });
};

module.exports = {
    mostrarMenu,
    pausa
};


