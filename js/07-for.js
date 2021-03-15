/*
FOR LOOP (ciklas)

for () {kiekvieno ciklo (iteracijos metu)}


*/


const abc = ['r', 'y', 't', 'a', 's'];

let zodis = '';
let abcIndex = 0

zodis += abc[abcIndex++];
zodis += abc[abcIndex++];
zodis += abc[abcIndex++];
zodis += abc[abcIndex++];
zodis += abc[abcIndex++];

console.log(zodis);

for (let i = 0; i <= 7; i++) {
    console.log(i);
}

console.log('ciklo pabaiga');

console.log('------');

const abc2 = ['a', 'b', 'c', 'd'];

for ( let i = 0; i < abc2.length; i++ ) {
    const raides = abc2[i];
    
    console.log('abc2');
}

console.log('------');

const marks = [5, 7, 10, 4, 2, 10];
let sum = 0;


for (let i = 0; i < marks.length; i++) {
    const pazymys = marks[i];
    sum += pazymys;
}

const average = sum / marks.length;

console.log(sum, '/', marks.length, '=', average);



console.log('------');


