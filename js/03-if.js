/*
IF STATEMENT:

logikos sablonai 
if () {} 
if () {} else {}


palyginimo operatoriai:
- visi;
- naudotini;
- nenaudotini;
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