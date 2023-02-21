"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInfo = exports.main = void 0;
const prompt = require('prompt-sync')({ sigint: true });
const main = () => {
    let exitOption = true;
    while (exitOption) {
        const data = (0, exports.getInfo)();
        console.log(data);
        let alphabet = exitOption = false;
    }
};
exports.main = main;
const getInfo = () => {
    while (true) {
        let fullName = prompt('Nombre: ').toLowerCase();
        let id = prompt('Matricula: ');
        if (/^\d+$/.test(id) && id.length === 7 && /^[a-z]+$/.test(fullName)) {
            fullName.trim();
            return {
                name: fullName,
                id: id,
            };
        }
    }
};
exports.getInfo = getInfo;
(0, exports.main)();
