function pazymiuVidurkis (vardas, pazymiai) {
    let suma = 0;

    for ( let i = 0; i <pazymiai.lenght; i++) {
        suma +=pazymiai[i];
    }

    const average = suma / pazymiai.lenght;

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

    pazymiuVidurkis(name,makrs);
}