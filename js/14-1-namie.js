//[1,-4,7,12]
/*
count pasitiveSum = [1,-4,7,12];

function positiveSum([1,-4,7,12]) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] > 0) {
       sum += arr[i];
     }
    }
   return sum;
   }
*/

const skaiciai = [1,-4,7,12];

function teigiamiskaiciai(arrejus) {
    let sum = 0;
    for (let i = 0; i <= arrejus.lenght; i++) {
        if(arrejus[i] > 0) {
            sum += arrejus[i];
        }
    }
    return sum;
}