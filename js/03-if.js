/*
IF STATEMENT:

logikos sablonai 
if () {} 
if () {} else {}
if () {} else if {}
if () {} else if {}... else if {}
if () {} else if {}... else if {} else


palyginimo operatoriai:
- visi; <, >, <=, =>, ==(LYGU), !=(NELYGU), ===(tekstas su skaiciais), !==, !, ...
- naudotini; <, >, <=, <=, ===, !==, !
- nenaudotini; ==, != (nes nera tikrinamas reiksmiu tipas)
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


////
console.log('----------');
////

const e = 8;
const f = 9;

if (e > f) {
    console.log('TAIP');
} else {
    console.log('NE');
}

////
console.log('----------');
////

const g = '89';
const h = 89;

if (g !== h) {
    console.log('TAIP');
} else {
    console.log('NE');
}

///
console.log('----------');
///

const cookiesAgreed = false;

if (cookiesAgreed === false) {
    console.log('Ismetame cookies sutikimo bloka...1');
}

if (!cookiesAgreed) {
    console.log('Ismetame cookies sutikimo bloka...2');
}

///
console.log('----------');
///


const userLoggedIn = true;

if (userLoggedIn) {
    console.log('Log out');
} else {
    console.log('Log in');
}

/// Kintamuju palyginimas
console.log('----------');
///

const pomidoras = 'pomidoras';
const pomidoroIlgis = pomidoras.length;

console.log(pomidoroIlgis);

///
console.log('----------');
///

const akys = 'Raudonos';

if (akys === 'Melynos') {
    console.log('Oj kokie fainulkos!!!');
} else if ( akys === 'Zalios') {
    console.log('Sexy');
} else if (akys === 'Rudos') {
    console.log('Melagis?');
} else if (akys === 'Pilkos') {
    console.log('niekuo neypatingi...');
} else if (akys === 'Raudonos') {
    console.log('nu ir nieko...');
} else {
    console.log('A turi akis?')
}


// kitaip!

//pirmas blogas
/*
if (akys === 'Melynos') {
    console.log('Oj kokie fainulkos!!!');
} else {
    if (akys === 'Zalios') {
        console.log('Sexy');
    } else {
        if (akys === 'Rudos') {
            console.log('Melagis?');
        } else {
            if (akys === 'Pilkos') {
                console.log('nieko neypatingi...');
            } else {
                (akys === 'Raudonos') {          **** !!! if truksta!!!
                console.log('nu ir nieko...');
                } else {
                    console.log('A turi akis?');
                }
            }
        }
    }
}
*/

// geras

if (akys === 'Melynos') {
    console.log('Oj kokie fainulkos!!!');
} else {
    if (akys === 'Zalios') {
        console.log('Sexy');
    } else {
        if (akys === 'Rudos') {
            console.log('Melagis?');
        } else {
            if (akys === 'Pilkos') {
                console.log('nieko neipatingi');
            } else {
                if (akys === 'Raudonos') {
                    console.log('nu ir nieko...');
                } else {
                    console.log('A turi akis?');
                }
            }
        }
    }
}
