// namu darbu apzvalga


/*
ats: 
intervale nuo 0 iki 4 suma yra 10.

0 - 4               = 10 
-50 - 50            = 0
0 - 100             = 5050
574 - 815           = labai didelis skaicius
-70 - 30            = santykininai didelis neigiamas skaicius (-2020)
0 - 0               = 0
0 - 999999999999999 = astronomiskaaaaai didelis skaicius

*/

const nuo = 1;
const iki = 4;
let suma = 0;

if (nuo <= iki) {

for (let i = nuo; i <= iki; i++) {
    suma +=i;
    }
} else {
    for (let i = iki; i <= nuo; i++) {
    suma +=i;
    }
    
}

// pavyzdys    const ats = 'Intervale nuo' + nuo + ' iki ' + iki + ' suma yra ' + suma + ' . ';

const ats = ` Intervale nuo ${nuo} iki ${iki} suma yra ${suma}.`;

console.log(ats);

/*
for (let i = nuo; i <= iki; i++) {
    console.log(i);
}

*/


