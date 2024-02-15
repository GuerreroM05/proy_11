const colors = require('colors');
// Importa las funciones mostrarMenu y pausa desde el módulo './proy_modules/menu'
const { mostrarMenu, pausa } = require('./proy_modules/menu');

// Función principal del script, definida como asíncrona
const main = async () => {
    // Limpia la consola y muestra un encabezado
    console.clear();
    console.log(`************************************`);
    console.log(`*         Menu Principal           *`);
    console.log(`************************************`);

    // Inicializa la variable 'option' para almacenar la opción seleccionada por el usuario
    let option = '';

    // Bucle principal del menú, se ejecuta mientras la opción seleccionada no sea '0'
    do {
        // Bucle interno para validar que la opción esté entre '0' y '6'
        do {
            // Espera a que el usuario seleccione una opción y almacena el valor en 'option'
            option = await mostrarMenu();
        } while (!(option >= 0 && option <= 6));

        // Si la opción no es '0', muestra un mensaje indicando la ejecución del proceso y espera a que el usuario presione ENTER
        if (option !== '0') {
            console.log(`\nSe ejecuta el proceso ${option}`);
            await pausa();
        }
    } while (option !== '0'); // Continúa ejecutándose mientras la opción seleccionada no sea '0'
};

// Llama a la función principal para iniciar el programa
main();
