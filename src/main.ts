import { 
    getInfo, 
    promptString
} from "./functions";

const prompt = require('prompt-sync')({sigint: true});

const main = () => {
    console.log('¡Bienvenido a la evidencia de aprenizade 1!');
    console.log('Introduzca sus datos para generar el lenguaje regular:');
    let inputData = getInfo();
    while (true) {
        promptString(inputData);
        let menu1Option = prompt('1) Introducir otra cadena\n2) Introducir nuevos datos\n3) Salir\nSeleccion: ')[0];
        if (menu1Option === '3') {
            console.log('¡Nos vemos!');
            break;
        }
        if (menu1Option === '2') {
            inputData = getInfo();
            continue;
        }
        if (menu1Option === '1') {
            continue;
        }   
    }
};
main();