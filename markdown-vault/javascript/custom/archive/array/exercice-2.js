// Exercice 2:
// Écrivez une fonction qui prend un tableau de nombres et renvoie la somme de tous les éléments.

const array = [1, 2, 5, 6, 22, 22, 452, 12, 1];


function count(n) {
    let result = 0;
    for (let i = 0; i < n.length; i++) {
        result += n[i];
    }
    console.log(result);
}

function countEach(n) {
    let somme = 0;
    n.forEach((number) => {
        somme += number;
    });
    console.log(somme)
}

function machineMagique(jouet) {
    let result = jouet.reduce((a, b) => a + b, 0);
    console.log(result);
}


count(array);
countEach(array)
machineMagique(array);
