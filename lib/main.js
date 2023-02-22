"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = require("./functions");
const prompt = require('prompt-sync')({ sigint: true });
const main = () => {
    console.log('¡Bienvenido a la evidencia de aprenizade 1!');
    console.log('Introduzca sus datos para generar el lenguaje regular:');
    let inputData = (0, functions_1.getInfo)();
    while (true) {
        (0, functions_1.promptString)(inputData);
        let menu1Option = prompt('1) Introducir otra cadena\n2) Introducir nuevos datos\n3) Salir\nSeleccion: ')[0];
        if (menu1Option === '3') {
            console.log('¡Nos vemos!');
            break;
        }
        if (menu1Option === '2') {
            inputData = (0, functions_1.getInfo)();
            continue;
        }
        if (menu1Option === '1') {
            continue;
        }
    }
};
main();
