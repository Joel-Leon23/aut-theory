"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = require("./functions");
const prompt = require('prompt-sync')({ sigint: true });
const main = () => {
    console.log('¡Bienvenido a la evidencia de aprendizaje 2!');
    console.log('Introduzca sus datos:');
    let inputData = (0, functions_1.getInfo)();
    let exitOption = true;
    while (exitOption) {
        (0, functions_1.promptString)(inputData);
        while (true) {
            console.log('1) Introducir otra cadena\n2) Introducir nuevos datos\n3) Salir\nSeleccion: ');
            const option = prompt();
            if (option[0] === '3') {
                console.log('¡Nos vemos!');
                exitOption = false;
                break;
            }
            if (option[0] === '2') {
                inputData = (0, functions_1.getInfo)();
                break;
            }
            if (option[0] === '1') {
                break;
            }
        }
    }
};
main();
