// Exercice 6:
// Écrivez une fonction qui prend un tableau d'entiers et renvoie un nouveau tableau sans nombres pairs.

const arrayInt = [1, 2, 3, 4, 5, 6];

function odd(array) {
    let newArray = [];
    array.forEach((number) => {
        if (number % 2 !== 0) {
            newArray.push(number);
        }
    });
    console.log(newArray);
}

function oddFilter(array) {
    const oddNumber = array.filter((num) => {
        return num % 2 !== 0
    })
    console.log(oddNumber)
}

odd(arrayInt);
oddFilter(arrayInt);