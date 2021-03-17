/*
https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/javascript

Introduction
The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.

Task :
Given a year, return the century it is in.

Input , Output Examples ::
centuryFromYear(1705)  returns (18)
centuryFromYear(1900)  returns (19)
centuryFromYear(1601)  returns (17)
centuryFromYear(2000)  returns (20)
Hope you enjoy it .. Awaiting for Best Practice Codes

Enjoy Learning !!!
*/

function century(year) {
    /*
    // finish this
    // amziur is esmes yra / 100
        const amzius = year / 100;
        console.log(amzius);

    // suapvalinti jog neliktu po kablelio liekanos
        amzius = Math.floor(amzius);

    // jei egzistuoja dalybos liekana, tai +1 amzius
        if (year % 100 > 0) {
            amzius++;
        }
    return amzius;
    */
   return Math.ceil(year / 100);
}

console.log(century(1705), '->', 18);
console.log(century(1900), '->', 19);
console.log(century(1601), '->', 17);
console.log(century(2000), '->', 20);
console.log(century(89), '->', 1);

// math biblioteka
/*
math.floor - apvalinimas iki grindu kas iki kablelio apvalinimas (i blogesne)
math.ceil - apvalinimas iki lubu i (geresne puse)
math.round - jei 0.49 apvalins i mazesne puse jei jau 0.5 tai jau i didesne
*/