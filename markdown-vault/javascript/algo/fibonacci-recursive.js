//Calculer le factorielle d'un nombre a l'aide d'une boucle for, while puis a l'aide d'une algo récursive
//Calculer la somme d'un tableau a l'aide d'une boucle for, while puis a l'aide d'une algo récursive
//Calculer le fibonnaci du n-ieme nombre a l'aide d'une boucle for, while puis a l'aide d'une algo récursive

// Que remarque t-on q propos des fonctions recursive ?

function fibonacci(number) {
	if (number < 2) {
		return number;
	} else {
		return fibonacci(number - 1) + fibonacci(number - 2);
	}
}

const n = 100;

for (let i = 0; i < n; i++) {
	console.log(fibonacci(i));
}
