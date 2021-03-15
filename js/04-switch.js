/*

SWITCH STATEMENT:

switch () { case, break, default }
(KLAUSIMAS) {ATSAKYMAS}
*/

// pvz: SWITCH


const animal = 'dog';
switch (animal) {
    case 'dog':
        console.log('Bark bark');
        break;

        case "cat":
            console.log('Meow meow');
            break;

        default:
            console.log('Unknow animal');
            break;
}

console.log('----------')

const day = 1;
switch (day) {
    case 1:
        console.log('pirm');
        break;
    case 2:
        console.log('ant');
        break;
    case 3:
        console.log('trec');
        break;
    default:
            console.log('tokia diena savaiteje neegzistuohja');
}
// atitikmuo:

if (day === 1 || day === 2 || day === 3 || day === 4 || day === 5 ) {
    console.log('darbo diena');
} else if ( day === 6 || day === 7) {
    console.log('savaitgalio diena');
} else {
    console.log('Tokia diena svetaineje neegzistuoja');
}

switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('darbo diena');
        break;
    case 6:
    case 7:
        console.log('savaitgalio diena');
        break;
    default:
        console.log('tokia diena savaiteje neegzistuohja');
}

const process = 1;

if ( process = 1 ) {
    console.log('paimti bateli');
} else if ( process = 2 ) {
    console.log('isideti arbatos');
} else if ( process = 3 ) {
        console.log('isimesti cukraus');
} else if ( process = 4 ) {
    console.log('isipilti vandens');
} else if ( process = 5 ) {
        console.log('isimaisyti');
} else if ( process = 6 ) {
    console.log('gerti');
}



switch (process) {
    case 1:
        console.log('paimti bateli');
        break;
    case 2:
        console.log('isideti arbatos');
        break;
    case 3:
        console.log('isimesti cukraus');
        break;
    case 4:
        console.log('isipilti vandens');
        break;
    case 5:
        console.log('isimaisyti');
        break;
    case 6:
        console.log('gerti');
        break;
    default:
        console.log('Tai jau viska sekmingai atlikai')
}
