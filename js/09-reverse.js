///  2. panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
// pvz.: “abcdef” -> “fedcba”

const text = 'abcdef';
let reverse = '';

for (let i = 0; i < text.length; i++) {
    console.log(i, text[i]);
    reverse += text[i];

}
console.log(text, '->', reverse);

/// text.lenght (teksto ilgis)