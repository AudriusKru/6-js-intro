// iprasta funkcija

function suma(a, b) {
    return a + b;
}
const atsSuma = suma(8, 5);
console.log(atsSuma);

/********************/

// bevardes funkcijos priskirimas kintamajam

const atimtis = function (a, b) {
    return a - b;
}
// kai kintamajam yra pirskirta anonimines fukcijos logika
const atsAtimtis = atimtis(8, 5);
console.log(atsAtimtis);


// paziuret video 2021/03/23 11:13
// pirmas uzrasymo budas geresnis


/********************/

// arrow function priskirimas kintamajam

const daugyba = (a, b) => { /// istrinu function ir parasau +>
    return a * b;
}
const atsDaugyba = daugyba(8, 5);
console.log(atsDaugyba);

// logikos bloke suskaiciuoti

/********* */
// arrow function priskirimas kintamajam
// jei logika turi tik viena procedura, tai galima nerasyti {} ir return jei bus return ar {} bus klaida

const dalyba = (a, b) => a / b;

const atsDalyba = dalyba(8, 5);
console.log(atsDalyba);

/********************/

// arrow function priskirimas kintamajam
// jei logika turi tik viena procedura, tai galima nerasyti {} ir return jei bus return ar {} bus klaida
// jeigu parametru yra tik 1, tai galima nerasyti ()
                 // va cia
const kvadratu = (a) => a * a;

const atsKvadratu = kvadratu(8);
console.log(atsKvadratu);


/********************/
/********************/
/********************/

const vardas = 'vardenis';

const pirmaRaide = name => name[0];

const raide = pirmaRaide(vardas);
console.log(raide);