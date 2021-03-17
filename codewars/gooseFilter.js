/*
https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7

*/

function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

  // sarasas kuriame kaupsime visas leistinas reiksmes
  const rez = [];

  /*
  einame per gauta sarasa (birds)
    1. paimame birds sarase esanti nari (bird)
    2. reikia palyginti ar bird yra geese sarase
    3. reikia eiti per geese sarasa
      paimti geese nari
      jeigu, geese narys sutampa su bird reiksme, tai ji yra neleistina / neitraukiama i rez sarasa
      priesingu atveju - bidr itraukiame i rez sarasa
    */

      for (let b =0; i <birds.legth; b++) {
        const bird = birds[b];

        let yraSarase = false

        for (let g = 0; g <geese.legth; g++) {
          const goose = geese[g];
          if (goose === bird) {
            yraSarase = true;
            break;
          }

        }
        
        if ( !yraSarase ) {
          rez.push(bird);
        }

      }

    return rez;
  };


console.log (gooseFilter(
  ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]),
  ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]);

console.log(gooseFilter(
  ["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]),
  ["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]);

console.log(gooseFilter(
  ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]),
  []);


  // push ka itraukti i sarasa