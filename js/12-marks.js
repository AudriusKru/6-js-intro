function pazymiuVidurkis (vardas, pazymiai) {
    let suma = 0;

    for (let i = 0; i < pazymiai.length; i++) {
        suma +=pazymiai[i];
    }

    const average = suma / pazymiai.length;

    // Vardenis: pazymiu vidurkis yra 6.
    console.log(`${vardas}: pazymiu vidurkis yra ${average}.`);
}

//pazymiuVidurkis('Petriukas', [10, 2, 8, 4]);
//pazymiuVidurkis('Maryta', [10, 8, 6, 4]);

const mokykla = [
    ['Petriukas', [10, 2, 8, 4]],
    ['Maryta', [10, 8, 6, 4]],
];


for (let i = 0; i <= mokykla.length; i++) {
    const mokinys = mokykla[i];
    const name = mokinys[0];
    const marks = mokinys[1];

    pazymiuVidurkis(name,marks);
    pazymiuVidurkis(mokykla[i][0], mokykla[i[1]]);
}