//Calculer le factorielle d'un nombre a l'aide d'une boucle for, while puis a l'aide d'une algo récursive
//Calculer la somme d'un tableau a l'aide d'une boucle for, while puis a l'aide d'une algo récursive
//Calculer le fibonnaci du n-ieme nombre a l'aide d'une boucle for, while puis a l'aide d'une algo récursive

// Que remarque t-on q propos des fonctions recursive ?

const palindrome1 = "kayak";
const palindrome2 = "ressasser";

// Boucle for //

function isPalindromeFor(word) {
	let isPalindrome = false;

	for (let i = 0; i < word.length / 2; i++) {
		if (word[i] !== word[word.length - 1 - i]) {
			return false;
		}
		isPalindrome = word[i] === word[word.length - 1 - i];
	}
	return isPalindrome;
}

// Boucle while //

function isPalindromeWhile(word) {
	let isPalindrome = false;
	let start = 0;
	let end = word.length - 1;

	while (start < end) {
		if (word[start] !== word[end]) {
			return false;
		}
		isPalindrome = word[start] === word[end];
		start++;
		end--;
	}
	return isPalindrome;
}

console.log(isPalindromeWhile(palindrome1));
