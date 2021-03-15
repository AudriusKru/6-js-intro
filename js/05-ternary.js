/*
TERNARY OPERATOR: ? (klaustukas)


palyginimas ? ka daryti jei teikina logika: ka daryti jei logikos netenkina?
palyginimas ? true : false

if else atitikmuo tik if else,!!!!! ne if else... if else... if else
let reiksme galima keisti. o const reikmes keist ne 


*/


const a = 5;
const b = 7;

let ats = '';

if ( a > b ) {
    ats = 'daugiau';
} else {
    ats = 'ne daugiau';
}

console.log(ats);


/////

const c = 3;
const d = 5;

const ats2 = c > d ? 'daugiau' : 'ne daugiau';

console.log(ats2);




const pazymiai = [5, 10, 7];
const suma = pazymiai[0] + pazymiai[1] + pazymiai[2];

const vidurkis = suma / pazymiai.length;
console.log(vidurkis);