"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = require("./functions");
const prompt = require('prompt-sync')({ sigint: true });
const main = () => {
    let exitOption = true;
    while (exitOption) {
        const inputData = (0, functions_1.getInfo)();
        const str = prompt('Cadena a verificar: ').toLowerCase();
        const neededData = {
            str: str,
            id: inputData.id,
            name: inputData.name,
        };
        console.log((0, functions_1.checkString)(neededData));
        exitOption = false;
    }
};
main();
