const prompt = require('prompt-sync')({sigint: true});


export const main = () => {
    let exitOption = true;
    while (exitOption) {
        const data = getInfo();
        console.log(data);
        let alphabet = 
    
        exitOption = false;
    } 
};

export const getInfo = () => {    
    while (true) {
        let fullName: string = prompt('Nombre: ').toLowerCase();
        let id: string = prompt('Matricula: ');
        if (/^\d+$/.test(id) && id.length === 7 && /^[a-z]+$/.test(fullName)) {
            fullName.trim()
            return {
                name: fullName,
                id: id,
            };
        }
    }
};

main();