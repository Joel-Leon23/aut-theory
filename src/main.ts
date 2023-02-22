import { 
    checkString, 
    getInfo 
} from "./functions";

const prompt = require('prompt-sync')({sigint: true});

const main = () => {
    let exitOption = true;
    while (exitOption) {
        const inputData = getInfo();
        const str = prompt('Cadena a verificar: ').toLowerCase();
        const neededData = {
            str: str,
            id: inputData.id,
            name: inputData.name,
        };
        console.log(checkString(neededData))
        exitOption = false;
    }
};

main();