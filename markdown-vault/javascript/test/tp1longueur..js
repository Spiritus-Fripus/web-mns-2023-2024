// Ecrire la fonction "lenght(word)" qui calcule la taille d'un mot. si word n'est pas une chaine de caractère alors retourner -1
// - avec un for
// - avec un while

const myWord = "Nathan";

function length(word){
	let strlength = 0;

	if (typeof word !== "string") {
		return -1;
	}

	for (let i= 0;i < word.length; i++) {
		strlength = i + 1;
	}
	return strlength
}

const strcalc = length(myWord);

console.log(strcalc)
