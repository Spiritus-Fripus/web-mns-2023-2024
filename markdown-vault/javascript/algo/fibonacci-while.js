//Calculer le factorielle d'un nombre a l'aide d'une boucle for, while puis a l'aide d'une algo récursive
//Calculer la somme d'un tableau a l'aide d'une boucle for, while puis a l'aide d'une algo récursive
//Calculer le fibonnaci du n-ieme nombre a l'aide d'une boucle for, while puis a l'aide d'une algo récursive

// Que remarque t-on q propos des fonctions recursive ?

function Fibonacci(n) {
	let fib = [0, 1];
	let i = 2;
	while (i !== n) {
		let nextNumber = fib[i - 1] + fib[i - 2];
		fib.push(nextNumber);
		i++;
	}
	return fib;
}

console.log(Fibonacci(10));
