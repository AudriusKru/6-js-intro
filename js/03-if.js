/*
IF STATEMENT:

logikos sablonai 
if () {} 
if () {} else {}


palyginimo operatoriai:
- visi; <, >, <=, =>, ==(LYGU), !=(NELYGU), ===(tekstas su skaiciais), !==, !, ...
- naudotini; <, >, <=, <=, ===, !==, !
- nenaudotini; ==, != (nes nera tikrinamas reiksmiu tipas)
*/

const a = 7;
const b = 4;

if (a > b) {
    const ats = `${a} yra daugiau uz ${b}`;
    console.log(ats)
}
// if   () - skaiciu  palyginimo operacija  {} -logikos blokas

///
console.log('----------');
///

const c = 7;
const d = 4;

if (c < d) {
    const cdMaziau = `${c} yra maziau uz ${d}`;
    console.log(cdMaziau);
} else {
    const cdNeMaziau = `${c} yra NE maziau uz ${d}`;
    console.log(cdNeMaziau);
}


////
console.log('----------');
////

const e = 8;
const f = 9;

if (e > f) {
    console.log('TAIP');
} else {
    console.log('NE');
}

////
console.log('----------');
////

const g = '89';
const h = 89;

if (g !== h) {
    console.log('TAIP');
} else {
    console.log('NE');
}

///
console.log('----------');
///

const cookiesAgreed = false;

if (cookiesAgreed === false) {
    console.log('Ismetame cookies sutikimo bloka...1');
}

if (!cookiesAgreed) {
    console.log('Ismetame cookies sutikimo bloka...2');
}

///
console.log('----------');
///


const userLoggedIn = false;

if (userLoggedIn) {
    console.log('Log out');
} else {
    console.log('Log in');
}