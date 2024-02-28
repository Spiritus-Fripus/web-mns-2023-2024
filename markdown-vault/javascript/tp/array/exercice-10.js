// Exercice 10:
// Écrivez une fonction qui prend un tableau de nombres et renvoie un tableau contenant seulement les nombres premiers.

const numbers = [1, 15, 252, 2, 5, 66, 625]

function isPrime(number) {
    let primeNumbers = [];
    for (let i = 0; i < number.length; i++) {
        if (number[i] < 2 || number[i] % i === 0) {
        } else {
            primeNumbers.push(number[i]);
        }
    }
    console.log(primeNumbers)
}

isPrime(numbers);