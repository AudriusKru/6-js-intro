/*
FOR LOOP (ciklas)

for () {kiekvieno ciklo (iteracijos metu)}


*/


const abc = ['r', 'y', 't', 'a', 's'];

let zodis = '';
let abcIndex = 0

zodis += abc[abcIndex];
console.log(zodis);

zodis += abc[abcIndex++];
zodis += abc[abcIndex++];
zodis += abc[abcIndex++];
zodis += abc[abcIndex++];
zodis += abc[abcIndex++];

console.log(zodis);

for (let i = 0; i < 5; i++) {
    console.log(i);
}

