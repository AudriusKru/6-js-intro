const pazymiai = [5, 10, 7];

const suma = pazymiai[0] + pazymiai[1] + pazymiai[2];

const vidurkis = suma / pazymiai.length;
console.log(vidurkis);

console.log('---------')

const marks = [10, 8, 6, 4];

const count = marks.length;
const sum = 0;
console.log('sum', suma);

sum = sum + marks[0];    //// 0 + 10
console.log('sum', suma);

sum = sum + marks[1]; //// 10 + 8
console.log('sum', suma);

sum = sum + marks[2]; //// 18 + 6 
console.log('sum', suma);

sum = sum + marks[3]; //// 24 + 4
console.log('sum', suma);


const average = sum / count;
console.log(average);



console.log('----------');

const marks2 = [2, 4, 6, 8];

const sum2 = 0;
console.log(sum2);


sum2 += marks[0];  // 0 + 2
console.log(sum2);

sum2 += marks[1];  // 2 + 4
console.log(sum2);

sum2 += marks[2];  // 6 + 6
console.log(sum2);

sum2 += marks[3];  // 12 + 8
console.log(sum2);

//// prie saves prisidek papildoma skai2iu... += -+ /= *=

console.log('----------');

const marks3 = [2, 4, 6, 8];

const sum3 = 0;
let markIndex3 = 0;
console.log(sum2);


sum3 += marks3[markIndex3];  // 0 + 2
console.log(sum2);

markIndex3 += 1
sum3 += marks3[markIndex3];  // 2 + 4
console.log(sum2);

markIndex3 += 1
sum3 += marks3[markIndex3];  // 6 + 6
console.log(sum2);

markIndex3 += 1
sum3 += marks3[markIndex3];  // 12 + 8
console.log(sum2);

console.clear();
console.log('----------');

const abc = ['r', 'y', 't', 'a', 's'];

let zodis = '';
let abcIndex = 0

zodis += abc[abcIndex];
console.log(zodis);

abcIndex ++
zodis += abc[abcIndex];
console.log(zodis);

abcIndex ++
zodis += abc[abcIndex];
console.log(zodis);

abcIndex ++
zodis += abc[abcIndex];
console.log(zodis);