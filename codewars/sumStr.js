/*
https://www.codewars.com/kata/5966e33c4e686b508700002d/train/javascript


*/

function sumStr(a, b) {
    let pirmas = parseInt(a);
    let antras = parseInt(b);
    // const suma = pirmas + antras;
    // 

    if (isNaN(pirmas)) {
        pirmas =0;
    }
    if (isNaN(antras)) {
        antras =0;
    }

    return '' +pirmas + antras;
    // return '' = suma (pirmas + antras)


}

console.log(sumStr("4","5"), '-.', "9");
console.log(sumStr("34","5"), '->', "39");
console.log(sumStr("","5"), '->', "5");
console.log(sumStr("34",""), '->', "34");
console.log(sumStr("",""), '->', "0");