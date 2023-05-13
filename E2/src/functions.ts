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

function getLastNamesInitials (name: string): string {
    const words = name.trim().split(' ')
    const lastWord = words[words.length - 1];
    const secondLastWord = words[words.length - 2];
    return `${secondLastWord.charAt(0)}${lastWord.charAt(0)}`;
}

const getFirstName = (name: string) => {
    const nameParts = name.trim().split(' ');
    return nameParts[0];
}

const checkString = (data: { str: string; id: string; name: string; }) => {
    const firstName = getFirstName(data.name)
    const initials = getLastNamesInitials(data.name);
    const inverseInitials = initials[1] + initials[0];
    const pattern = new RegExp(`^${data.id}(${initials})+${data.id}(${inverseInitials}${inverseInitials})+${firstName}${firstName}$`);
    if (!pattern.test(data.str)) {
        return 'Cadena no valida';
    }
    const initialsPattern = new RegExp(`(${initials}){1,}\\d`, "g");
    const count = data.str.match(initialsPattern);
    const inverseInitialsPattern = new RegExp(`(${inverseInitials}){1,}${firstName[0]}`, "g");
    const inverseCount = data.str.match(inverseInitialsPattern);
    if (!(count && inverseCount)) {
        return 'Cadena no valida';
    }
    if ((count[0].length - 1) * 2 === inverseCount[0].length - 1) {
        return 'Cadena valida';
    }
    return 'Cadena no valida';
}