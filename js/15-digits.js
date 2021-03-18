
function digits( skaicius ) {
    // pirmas darbas visad patikrinti parametra( input validation)
    if (typeof skaicius !== 'number'){
        return 'ERROR: Turi buti skaiciaus tipas';
    }
    if ('' + skaicius === 'NaN') 
    //   isnan(skaicius) geriau naudot
    {
        return 'ERROR: nAN nera normalus skaicius';
    }
    if (!isFinite(skaicius)) {
        return `ERROR: ${skaicius} nera normalus skaicius`;
    }

    // antras zingsnis logic (logika)
    const absoliutas = Math.abs(skaicius);

    const teksinisSkaicius = '' + absoliutas;
    // jei prie teksto pridesim bet ka siuo atveju skaicus taps tekstu
    let skaitmenuKiekis = teksinisSkaicius.length;

    // jei skaicius turi desimtaine dali, tai sumaziname 1 vienetu
    if (skaicius % 1 !== 0 ) {
        skaitmenuKiekis--
    }


    // jei skaicius yra neigiamas tai sumaziname 1 vienetu
    if (skaicius < 0 ) {
        skaitmenuKiekis--;
    }

    // trecias return result


    return skaitmenuKiekis;
    
}

console.log(digits(true));
console.log(digits('asd'));
console.log(digits(NaN));
console.log(digits(Infinity));
console.log(digits(-Infinity));
console.log(digits());
console.log(digits(undefined));
console.log(digits(null));
console.log(digits([]));
console.log(digits(''));
console.log(digits([4624]));
console.log(digits(digits));
// null  simbolizuoja informacijos neturejima, bet as zinau kad tokia informacija imanoma ir kazkada ja gausiu


console.log(digits(5), '->', 1);
console.log(digits(781), '->', 3);
console.log(digits(37060123456), '->', 11);
console.log(digits(3.1415), '->', 5);
console.log(digits(-456), '->', 3);
console.log(digits(-3.1415), '->', 5);
// console.log(digits(10000000000000000000000000000),


console.log(digits(100000000000000000000000000000), '->', 30);

// %operatorius apskaiciujantis liekana



