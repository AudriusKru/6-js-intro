console.clear();
const spread1 = [5, 9];
console.log(spread1);

// const spread2 = [5, 9, 7];
const spread2 = [...spread1, 7];
console.log(spread2);

// const spread3 = [7, 5, 9];
const spread3 = [7, ...spread1];
console.log(spread3);

/************************/

console.clear();

// rest operatorius 
// dazniausiai naudojimas funkcijoj kai nori surinkt visus likusius parametrus

const average = (...list) => {
    const sum = list.reduce((total, num) => total + num, 0);
    return sum / list.length
    // console.log(list);
}
//  average([10, 2, 8, 4, 6]);
// average(10, 2, 8, 4, 6);
const ave = average(10, 2, 8, 4, 6);
console.log(ave);

const apieMane = (name, age, ...list) => {
    return `Sveiki, as esu ${name}, man yra ${age} metu ir as megstu: ${list.join(', ')}`;
}

const petras = apieMane('Petras', 55, 'obuoli', 'kriause'); // nebutina apskliausti [obuolio ir kriauses] ...list parasyt viska paims kas po amziaus
console.log(petras);

/************************/
// primityvios reiksmes
console.clear();

let a = 5;                     //     a          b 
let b = 9999;                  //     5          9      nubriaukiu
                               //    (  7  )       ( 5 )
b = a;

console.log(a);
console.log(b);

a = 777;

console.log(a);
console.log(b);


console.log('*******');

// kompleksine reiksmes

let cc = [4, 44];
let dd = [8, 88];

console.log(cc);
console.log(dd);

dd = cc; 

console.log(cc);
console.log(dd);

// kas bus jeigu cc[0]

cc[0] = 11111; 

console.log(cc);
console.log(dd);

// kompleksiniai kintamieji  dd = cc;  tos pacios atminties dalijimasis 

console.clear();

const desimtainiai = [3.14, 5, 6.7, -14.7, -8, 0.001];

//  const sveikieji = desimtainiai.map(n => Math.round(n));

// desimtainiai.forEach((n, i) => Math.round(n));
desimtainiai.forEach((n, i) => desimtainiai[i] = Math.round(n));

console.log(desimtainiai);
// console.log(sveikieji);

