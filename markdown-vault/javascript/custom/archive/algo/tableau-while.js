//Calculer le factorielle d'un nombre a l'aide d'une boucle for, while puis a l'aide d'une algo récursive
//Calculer la somme d'un tableau a l'aide d'une boucle for, while puis a l'aide d'une algo récursive
//Calculer le fibonnaci du n-ieme nombre a l'aide d'une boucle for, while puis a l'aide d'une algo récursive

// Que remarque t-on q propos des fonctions recursive ?

let array = [1, 2, 3, 4, 5];
let arrayTot = 0;
let i = 0;

while (i !== array.length) {
	arrayTot = array[i] + arrayTot;
	i++;
}

console.log(arrayTot);

