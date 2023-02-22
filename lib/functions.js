"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkString = exports.getInitials = exports.findAlphabete = exports.getInfo = void 0;
const prompt = require('prompt-sync')({ sigint: true });
const getInfo = () => {
    while (true) {
        let fullName = prompt('Nombre: ').toLowerCase();
        let id = prompt('Matricula: ');
        if (!(/^\d+$/.test(id) && id.length === 7 && /^(?![\s.]+$)[a-z\s.]*$/.test(fullName))) {
            console.log('Datos incorrectos');
            continue;
        }
        fullName.trim();
        return {
            name: fullName,
            id: id,
        };
    }
};
exports.getInfo = getInfo;
const findAlphabete = (str) => {
    let alphabet = "";
    for (let i = 0; i < str.length; i++) {
        if (alphabet.includes(str[i]) === false && str[i] !== ' ') {
            alphabet += str[i];
        }
    }
    return alphabet;
};
exports.findAlphabete = findAlphabete;
const getInitials = (name) => {
    return name.split(' ').map((word) => word[0]).join('');
};
exports.getInitials = getInitials;
const checkString = (data) => {
    const alphabet = (0, exports.findAlphabete)(data.name);
    const numericAlphabet = (0, exports.findAlphabete)(data.id);
    const alphanumericAlphabet = '.' + alphabet + numericAlphabet;
    if (!numericAlphabet.includes(data.str[0])) {
        return 'Cadena no valida';
    }
    if (!data.str.endsWith('.' + data.id)) {
        return 'Cadena no valida';
    }
    if (!data.str.includes((0, exports.getInitials)(data.name))) {
    }
    let pastSymbol;
    for (let i = 1; i < data.str.length - 8; i++) {
        if (!alphanumericAlphabet.includes(data.str[i])) {
            return 'Cadena no valida';
        }
        pastSymbol = data.str[i - 1];
        if (pastSymbol === '.' && data.str[i] === '.') {
            return 'Cadena no valida';
        }
    }
    return 'Cadena valida';
};
exports.checkString = checkString;
