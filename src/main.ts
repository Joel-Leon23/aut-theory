import { 
    getInfo, 
    promptString
} from "./functions";

const prompt = require('prompt-sync')({sigint: true});

const main = () => {
    console.log('¡Bienvenido a la evidencia de aprenizade 2!');
    console.log('Introduzca sus datos:');
    let inputData = getInfo();
    let exitOption = true;
    while (exitOption) {
        promptString(inputData);
        while(true) {
            console.log('1) Introducir otra cadena\n2) Introducir nuevos datos\n3) Salir\nSeleccion: ');
            const option = prompt();
            if (option[0] === '3') {
                console.log('¡Nos vemos!');
                exitOption = false;
                break;
            }
            if (option[0] === '2') {
                inputData = getInfo();
                break;
            }
            if (option[0] === '1') {
                break;
            }
        }
    }
};
main();