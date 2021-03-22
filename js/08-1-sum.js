/*

ats: 
intervale nuo 0 iki 4 suma yra 10.

0 - 4               = 10 
-50 - 50            = 0
0 - 100             = 5050
574 - 815           = labai didelis skaicius
-70 - 30            = santykininai didelis neigiamas skaicius (-2020)
0 - 0               = 0
*/

const nr1 = 0;
const nr2 = 4;
let suma = 0;

for (let i = nr1; i <= nr2; i++) {
    suma+= i;
}
const ats = `Intervale nuo ${nr1} iki ${nr2} suma yra ${suma}`;

console.log(ats);

console.log('-----');


const nr3 = -50;
const nr4 = 50;
let suma1 = 0;

for (let i = nr3; i <= nr4; i++) {
    suma1+= i;
}
const ats1 = `Intervale nuo ${nr3} iki ${nr4} suma yra ${suma1}`;

console.log(ats1);
