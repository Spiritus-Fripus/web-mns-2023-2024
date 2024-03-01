// Exercice 8:
// Écrivez une fonction qui prend un tableau d'entiers et renvoie le plus grand nombre.

const arrayInt = [21, 2, 34, 5, 11, 1];

function bigInt(array) {
    let bigNumber = 0;
    array.forEach((number) => {
        if (bigNumber < number) {
            bigNumber = number
        }
    });
    console.log(bigNumber)
}

function mathUse(array) {
    let biggestNumber = Math.max(...array)
    console.log(biggestNumber)
}

mathUse(arrayInt)
bigInt(arrayInt)
