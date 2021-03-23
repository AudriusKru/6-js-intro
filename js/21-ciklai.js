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

for (const index of list) {
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