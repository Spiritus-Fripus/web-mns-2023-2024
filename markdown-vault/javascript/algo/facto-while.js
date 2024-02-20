//Calculer le factorielle d'un nombre a l'aide d'une boucle for, while puis a l'aide d'une algo récursive
//Calculer la somme d'un tableau a l'aide d'une boucle for, while puis a l'aide d'une algo récursive
//Calculer le fibonnaci du n-ieme nombre a l'aide d'une boucle for, while puis a l'aide d'une algo récursive

// Que remarque t-on q propos des fonctions recursive ?

let number = 10;
let facto = 1;
let i = 1;

// factorielle :

while (i !== number + 1) {
	facto = facto * i;
	i++;
}

console.log(`le résultat de ${number}! est ${facto}`);