// https://docs.google.com/document/d/1UnM5MzO7KPf-atlz3HXPJN8XlaN37nlUJ7fp6GwvIZ8/edit

const nuo = 0;
const iki = 11;
const daliklis = 3;
let kiekis = 0;

for (let i = nuo; i <= iki; i++) {
    if (i % daliklis === 0);{
        kiekis++;
    }
}

const ats = `skaiciu intervale trap ${nuo} ir ${iki}, besidalijanciu be liekanos ir ${daliklis} yra ${kiekis} vienetai.`;

console.log(ats);