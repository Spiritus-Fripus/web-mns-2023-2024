// Exercice 10:
// Écrivez une fonction qui prend un tableau de nombres et renvoie un tableau contenant seulement les nombres premiers.

const numbers = Array.from(Array(100).keys())

function isPrime(number) {
    let primeNumbers = [];
    number.forEach((prime) => {
        if (prime === 0) return;
        for (let i = 2; i < prime; i++) {
            if (prime % i === 0) return;
        }
        primeNumbers.push(prime);

    });
    console.log(primeNumbers)
}

isPrime(numbers);