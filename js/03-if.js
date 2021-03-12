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

loginiai operatoriai : &&, ||
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

const akys = 'Zalios';

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


if (akys === 'Melynos') {
    console.log('Oj kokie fainulkos!!!');
} 

if (akys === 'Zalios') {
    console.log('Sexy');
}

if (akys === 'Rudos') {
    console.log('Melagis?');
} 

if (akys === 'Pilkos') {
    console.log('nieko neipatingi');
}

if (akys === 'Raudonos') {
    console.log('Nu ir nieko...');
}

if (akys !== 'Melynos' &&
    akys !== 'Zalios' && 
    akys !== 'Rudos' && 
    akys !== 'Pilkos' && 
    akys !== 'Raudonos') {
    console.log('A turi akis?');
}


/*
Pratimas if'ams:
išspausdinti patarimą ką su savimi pasiimti, kai:
- lauke šviečia / nešviečia saulė
- lyja / nelyja
- stovi vilkas / jo nėra
*/

// 1.

const saule = 'lauke nesviecia';

if (saule === 'lauke sviecia') {
    console.log('Nepapamirsti saules akiniu!');
}
if (saule === 'lauke nesviecia') {
    console.log('Nepamirsti prozektoriaus');
}
if (saule !== 'lauke sviecia' &&
    saule !== 'lauke nesviecia') {
        console.log('O gal eiti pamiegot?')
}

// 2.

const lauke = 'lyja';

if (lauke === 'lyja') {
    console.log('Pasiimti sketi!');
}
if (lauke === 'nelyja') {
    console.log('Pasiimti skrybele');
}
if (lauke !== 'lyja' &&
    lauke !== 'nelyja') {
        console.log('Ar Tu juokauji?');
}

// 3.

const miske = 'Stovi vilkas';

if (miske === 'Stovi vilkas') {
    console.log('Nepamirsti sautuvo');
}
if (miske === 'Vilko nera') {
    console.log('Pasiimti krepsi grybams');
}
if (miske !== 'Stovi vilkas' &&
    miske !== 'Vilko nera') {
        console.log('Rasiu baravyka!');
}