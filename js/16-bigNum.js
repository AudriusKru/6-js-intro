function bigNum (list) {
    // input validation
    if (Array.isArray(list)) {
        return 'ERROR: netinkamas tipas, turi buti array (sarasas)'
    }
    if (list === null) {
        return 'ERROR: netinkama reiksme (null)'
    }

    // logic

    // result

    return 0;
}


console.log(bigNum('pomidoras'));
console.log(bigNum(484562));
console.log(bigNum(true));
console.log(bigNum(false));
console.log(bigNum(undefined));
console.log(bigNum());
console.log(bigNum(bigNum));
console.log(bigNum(null));

console.log(bigNum({}));
console.log(bigNum([]));

/*
onsole.log(bigNum([1]), '->', 1 );
console.log(bigNum([ 1, 2, 3 ]), '->', 3);
console.log(bigNum([ -5, 78, 14, 0, 18]), '->', 78);
console.log(bigNum([ 69, 69, 69, 69, 66]), '->', 69);
console.log(bigNum([ -1, -2, -3, -4, -5, -6, -7, -8]), '->', -1);
console.log(bigNum([])) ;
*/


