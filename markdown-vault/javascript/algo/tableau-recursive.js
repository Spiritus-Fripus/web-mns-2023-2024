//Calculer le factorielle d'un nombre a l'aide d'une boucle for, while puis a l'aide d'une algo récursive
//Calculer la somme d'un tableau a l'aide d'une boucle for, while puis a l'aide d'une algo récursive
//Calculer le fibonnaci du n-ieme nombre a l'aide d'une boucle for, while puis a l'aide d'une algo récursive

// Que remarque t-on q propos des fonctions recursive ?

function tableauRecursive(tab) {
	if (tab.length === 0) {
		return 0
	} else {
		const firstNumber = tab[0];
		const restOfArray = tab.slice(1);
		return firstNumber + tableauRecursive(restOfArray);
	}
}

const array = [1, 2, 3, 4, 5];
const result = tableauRecursive(array);
console.log(tableauRecursive(array));
