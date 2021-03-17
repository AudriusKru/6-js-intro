function daugyba(a, b) {
    // parametru validacija
    // jeigu, a yra ne skaicius, grazinti klaidos pranesima (mintyse if turi buti galvoji)
    if (typeof  a !== 'number') {
        return 'pirmasis parametras turi buti skaiciaus tipo';
        //grazinti klaidos pranesima
    }
    // isnan yra number (skaicius ar skaiciaus tipo)
    if (!isFinite(a)) {
        return `pirmasis parametras turi buti  normalus skaicius ir negali buti ${a}`;
    }


    // jeigu, b yra ne skaicius, grazinti klaidos pranesima
    if (typeof  b !== 'number') {
        return 'antrasis parametras turi buti skaiciaus tipo';
    }
    if (isNaN(b) || b === Infinity || b === -Infinity) {
        return `antrasis parametras turi buti  normalus skaicius ir negali buti ${b}`;
    }
 // isNAN eilute sutaupoma uzrasymo !

    // logika
    const rez = a * b;
    
    // rezultato grazinimas
    return rez;
}

console.log(  daugyba (4, 5) );

console.log(  daugyba (44, 5), '->', 20 );  
console.log(  daugyba (-44, -55), '->', 220  );
console.log(  daugyba (-44, 55), '->', 2420  );
console.log(  daugyba (-44, 0), '->', -2420  );

// tekstine daugyba negalima, nan gaunama!! 
console.log(  daugyba ('trys', 'penki'));

/*
infinity begalybe 
isNAN -tai yra netikras skaicius
NaN - yra skaicius (skaiciaus tipas) 
(pavyzdys virsuje)
typeof 5 ---> 'number'
typeof dasfd ---> 'string'
typeof [] ---> 'object'
typeof true / false ----> 'boolean'

//
(skaiciaus konvertavimas i teksta)
'' + a === 'NaN'
        '' + [5, 8]
                "5,8"

absoliutus skaicius

Math.abs(a) === infinity
//
sutraukimas
pvz virsuj
 priekyje butinai -  !  - isFinite(a) ar tai yra baigtinis dalykas, skaicius

*/