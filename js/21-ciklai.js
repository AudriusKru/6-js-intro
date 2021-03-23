/*
JS galimi ciklai ir "cikliskos" funkcijos/metodai:
(JS funkcijos)
- for
- for-of
- for-in
- while
- do-while

(metodai)
- foreach
- map
- filter
- reduce
- sort

*/

const list = [1, -5, 78, 2, 11, -14, 0, -3];
// sarasas skaiciu


// su FOR
// break: nutraukia ciklo darba
// continue :eiti i sekancia ciklo iteracija, jei tokia yra


for (let i = 0; i < list.length; i++) {
    const item = list[i];
    // jeigu
    if (item > 0) {       // item < -10
        continue;         // break
        // break: nutraukia ciklo darba
    }
    console.log(item);
}

console.clear();

// FOR-IN
// (const index in list)  pakeista is  (const index in list) 

for (const index in list) {
    const item = list[i];
    if (item > 0) {         // item < -10
        continue;            // break
    }
    console.log(i, item);
}


console.clear();


// FOR-OF
// break: nutraukia ciklo darba
// continue :eiti i sekancia ciklo iteracija, jei tokia yra

for (const indem of list) {
    if (item > 0) {           //item < -10
        continue;                  //break
    }
    console.log(item);
}


console.clear();

// WHILE
// per kiek dienu pastatysi nama, viskas priklauso nuo resursu ir kitu veiksniu, ar viskas yra idealu, tol kol gali dirbt, kuo viskas praciau tuo viskas ilgiau tesiasi
// kaip viskas idealu, bet buna ir isimciu
// Math.random visad galima naudoti kai nori random skaiciaus


let randomNumber = 0;     
console.log(randomNumber); // kiek kartu reikia bandyti mesti atsitiktini skaiciu , kol iskriskris skaicius didesnis daugiau nei 0.9
// tada ateina while
let randomNumberCount = 0;

while (randomNumber < 0.9) {
    randomNumber = Math.random();       // [0..1) nuo nuluo imtinai iki 1 ne imtinai (intervalas) 
    randomNumberCount++;
    console.log(randomNumber);
}


console.clear

let i = 0;
while (i < list.length) {
    const item = list[i];
if (item < -10) {         // item > 0
    break;                  // continue; sitas dalykas neegzistuoja. kompas suskasi non stop
}                                       // break galimas
    console.log(item);
    i++;
}

console.clear();


// do while   // pirmiausia klausia poto daro{} poto salyga ()
// break: nutraukia ciklo darba

let dwi = 0;            // dowhile indekas

do {
    console.log(dwi);
    dwi++;          // kaip keisti iteracija
} while (dwi < 5 )      // ar galima testi darba
// ar bus galima daryti tol kol dwi didesnis uz 5 (dwi > 5) spausdina nuli, viska igivendino bet darbo testi negali
// galima padaryti tik karta o ar galima daugiau kartu testi nurodo salyga
// do while pirma daro poto klausia ar gali kartoti


// visus ciklus galima realizuoti su for bet reikia zinoti kaip 

console.clear();


// FOREACH

list.forEach((item, i) => console.log(i, item))


const duobleList = [[1, 5], [8, 99], [-8, -7, 15, 4], [3]];
let dlSuma = 0;

duobleList.forEach(
    innerList => innerList.forEach(
        n =>dlSuma += n
    )
);
console.log(dlSuma);

console.clear();

// MAP
// map () metodas perejes per duota sara grazina tokios pacio dydzio sarasa, tik su pakeistomis rieksmemis

const mapList = [1, 2, 3, 4, 5, 6];
const forListSquare = [];

for (const num of mapList) {
    forListSquare.push(num * num);

}
console.log(forListSquare);

const mapListSquare = mapList.map(n => n*n);
console.log(mapListSquare);

console.clear();

/******************/
// uzdavinys : visi neigiami skaiciai turi buti konvertuoti i nuli, o teigiami palikti tokie kokie yra

const pazymiai = [10, -8, 2, -6, 8, -2];

const konvertuotiPazymiai = pazymiai.map(n => n < 0 ? 0 : n); // jei matau ? : (pirmaoj daly klausima) prie 
console.log(pazymiai);
console.log(konvertuotiPazymiai);

const desimtainiai = [3.14, 5, 6.7, -14.7, -8, 0.001];
// noriu grazint sveikus skaicius
const sveikieji = desimtainiai.map(n => Math.round(n));
console.log(desimtainiai);
console.log(sveikieji);



// map tik ant arrays (skaiciu)
/*
const zodis = 'labas';

const Zodis = zodis.map(l => console.log(l));
*/

/************** */

// FILTER
// atrinkti tik tikrus pazymius t.y. [1.. 10]

const marks = [10, -8, 2, -6, 8, -2];

const filteredMarks = marks.filter(m => m >= 1 && m <= 10 && m % 1 === 0);

console.log(marks);
console.log(filteredMarks);

/***** */

// palikti zodziu is didziosio raides

const dictionary = ['labas', 'rytas', 'Lietuva', 'sakau', 'tau'];

const isDidziosios = dictionary.filter(word => word[0] === word[0].toUpperCase());

console.log(dictionary);
console.log(isDidziosios);

/***** */

// REDUCE
// eina per sarasa, paima visas reiksmes is eiles ir su jomis padaro viena bendra rezultata
// pvz: jei turim pazymiu sara, tai eina per pazymius ir suskaiciuoja pazymiu suma

const petriukoPazymiai = [10, 2, 8, 6, 4];

// FOR each pavyzdys kaip alternatyva
let petriukoPazymiuSuma = 20;
petriukoPazymiai.forEach(p => petriukoPazymiuSuma += p);
console.log(petriukosPazymiuSuma);
//alternatyviai

const reducedPazymiai = petriukoPazymiai.reduce((total, paz) => total + paz, 20); // trumpint t ir p
console.log(reducedPazymiai);

/*******************************/

// koks gausis tekstas, jei sujungsime visu zodziu pirmas raides

const dictionary2 = ['labas', 'rytas', 'Lietuva', 'sakau', 'tau'];

const short = dictionary2.reduce((total, word) => total + word[0], '');

console.log(shorts);

// total -- pirmas saraso narys 