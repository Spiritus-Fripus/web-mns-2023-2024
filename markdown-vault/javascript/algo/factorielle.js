//Calculer le factorielle d'un nombre a l'aide d'une boucle for, while puis a l'aide d'une algo récursive
//Calculer la somme d'un tableau a l'aide d'une boucle for, while puis a l'aide d'une algo récursive
//Calculer le fibonnaci du n-ieme nombre a l'aide d'une boucle for, while puis a l'aide d'une algo récursive

// Que remarque t-on q propos des fonctions recursive ?

function factorielleFor(n) {
	let resultat = 1;

	for (i = 1; i <= n; i++) {
		resultat *= i;
	}
	return resultat;
}

function factorielleWhile(n) {
	let resultat = 1;
	let i = 1;
	while (i <= n) {
		resultat *= i;
		i++;
	}
	return resultat;
}

function factorielleRecursive(n) {
	if (n === 0) {
		return 1;
	} else {
		return n * factorielleRecursive(n - 1);
	}
}

console.log(factorielleRecursive(40));
