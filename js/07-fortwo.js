
for (let i = 5; i <= 10; i++) {
    console.log(i);
}
 console.log('ciklo pabaiga');

 console.log('------');

 marks = [5, 8, 10, 8, 4];

 for (let i = 0; i < marks.length; i++) {
    console.log(marks[i]);
 }

 console.log('-------');

 const abc = ['Si', 'claro', 'claro', 'cesi', '?'];

 for (let i = 0; i< abc.length; i++) {
     const raidziuKratinys = abc[i];
     console.log(raidziuKratinys);
 }

 console.log('-------');
 
 marks1 = [5, 8, 10, 8, 4, 6, 5, 2];
 let sum = 0;

 for (let i = 0; i < marks1.length; i++) {
     const skaiciai = marks1[i];
     sum += skaiciai;
    

 }
const average = sum / marks1.length
 console.log(average);

 console.log('-------');


 let raidziuMisraine = 'asdfghjkl';
 let kratinys = '';

 for (let i = raidziuMisraine.length-1; i >= 0 ; i--) {
    kratinys = raidziuMisraine[i];
    console.log(kratinys);
 }