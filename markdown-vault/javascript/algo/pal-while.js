//Calculer le factorielle d'un nombre a l'aide d'une boucle for, while puis a l'aide d'une algo récursive
//Calculer la somme d'un tableau a l'aide d'une boucle for, while puis a l'aide d'une algo récursive
//Calculer le fibonnaci du n-ieme nombre a l'aide d'une boucle for, while puis a l'aide d'une algo récursive

// Que remarque t-on q propos des fonctions recursive ?

const palindrome1 = "kayak";
const palindrome2 = "ressasser";

function is_palindrome(pal) {
	let lap = "";
	let i = 0;
	while (i !== pal.length) {
		lap = pal[i] + lap;
		i++;
	}
	if (lap === pal) {
		return "Palindrome";
	} else {
		return "NEIN";
	}
}

console.log(is_palindrome(palindrome2.toLowerCase()));
