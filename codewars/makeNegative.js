/*


In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Example:

makeNegative(1); // return -1
makeNegative(-5); // return -5
makeNegative(0); // return 0
makeNegative(0.12); // return -0.12
Notes:

The number can be negative already, in which case no change is required.
*/

function makeNegative(num) {
    if (num <= 0 ) {
        return num;
    }
   // console.log(num);
    // return undefined;
    // return -42;
    return num * -1;
}
console.log(makeNegative(42), '->', -42);
console.log(makeNegative(9), '->', -9);

// vietoj visko return num <= 0? num :-num; po function;;;