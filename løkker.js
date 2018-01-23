let i = 1;

while (i < 25) {
    console.log(i);
    i++
}

do {
    console.log(i);
    i++
} while (i <= 25)

for (i; i <= 25; i++) {
    console.log(i)
}

do {
    console.log(i)
    i++
} while (i <= 10)

let year = 2017;

for (year; year >= 1917; year--) {
    console.log(year)
}

let ugen = ["mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag", "søndag"]

for (i = 0; i <= ugen.length - 1; i++) {
    console.log(ugen[i])
}

let navne = ["Andreas", "Johannes", "Thor", "Balder", "Georg", "David", "Simone"]

navne.forEach(function (navn) {
    console.log(navn)
})

let kunstner = ["Polyphia", "Bloodbath", "Lil Peep", "Lil Xan"]

kunstner.forEach(function (navn, index) {
    console.log(navn + " er placeret på plads " + index)
})

let numbers = [1, 22, 30, 140, 21, 9, 10, 70, 23, 15]
numbers.forEach(function (number, index) {
    if (numbers[index + 1] != undefined) {



        if (number > numbers[index + 1]) {

            console.log(number + " er større end " + numbers[index + 1]);

        } else {
            console.log(number + " er mindre en d" + numbers[index + 1]);
        }
    }
    else {
        console.log(number + " har ingen efterfølger")
    }

})
