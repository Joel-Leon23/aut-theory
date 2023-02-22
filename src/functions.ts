const prompt = require('prompt-sync')({sigint: true});

export const getInfo = () => {    
    while (true) {
        let fullName = prompt('Nombre: ').toLowerCase();
        let id = prompt('Matricula: ');
        if (!(/^\d+$/.test(id) && id.length === 7 && /^(?![\s.]+$)[a-z\s.]*$/.test(fullName))) {
            console.log('Datos incorrectos');
            if (/^\d+$/.test(id) && id.length === 7 ) {
                console.log('Nombre no valido.');
                continue;   
            } else if(/^(?![\s.]+$)[a-z\s.]*$/.test(fullName)) {
                console.log('Matricula no valida');
                continue;
            }
            console.log('Nombre no valido.');
            console.log('Matricula no valida');
            continue;
        }
        fullName.trim()
        return {
            name: fullName,
            id: id,
        };
    }
};

export const promptString = (inputData: {name: string; id: string;}) => {
    let str = prompt('Cadena a verificar: ').toLowerCase();
    let neededData = {
        str: str,
        id: inputData.id,
        name: inputData.name,
    };
    console.log(checkString(neededData));
}

const findAlphabete = (str: string) => {
    let alphabet = "";
    for(let i = 0; i < str.length; i++){
        if(alphabet.includes(str[i]) === false && str[i] !== ' '){
            alphabet += str[i]
        }
    }
    return alphabet;
};

const getInitials = (name: string) => {
    return name.split(' ').map((word) => word[0]).join('');
};

const checkString = (data: { str: string; id: string; name: string; }) => {
    const numericAlphabet = findAlphabete(data.id);
    if (!numericAlphabet.includes(data.str[0])) {
        return 'Cadena no valida';  
    }
    if (!data.str.endsWith('.' + data.id)) {
        return 'Cadena no valida';
    }
    if (data.str.indexOf(getInitials(data.name)) === -1) {
        return 'Cadena no valida';
    }
    let pastSymbol;
    const alphanumericAlphabet = '.' + findAlphabete(data.name) + numericAlphabet;
    for (let i = 1; i < data.str.length - 8; i++) {
        if (!alphanumericAlphabet.includes(data.str[i])) {
            return 'Cadena no valida';
        }
        pastSymbol = data.str[i-1];
        if (pastSymbol === '.' && data.str[i] === '.') {
            return 'Cadena no valida';
        }
    }
    return 'Cadena valida';
}