//Calculer le factorielle d'un nombre a l'aide d'une boucle for, while puis a l'aide d'une algo récursive
//Calculer la somme d'un tableau a l'aide d'une boucle for, while puis a l'aide d'une algo récursive
//Calculer le fibonnaci du n-ieme nombre a l'aide d'une boucle for, while puis a l'aide d'une algo récursive

// Que remarque t-on q propos des fonctions recursive ?

// Définition de la fonction factoRecursive qui calcule la factorielle d'un nombre
function factoRecursive(number) {
  // Si le nombre est égal à zéro, la factorielle est 1, donc on retourne 1
  if (number === 0) {
    return 1;
  } else {
    // Sinon, on retourne le nombre multiplié par la factorielle du nombre précédent (nombre - 1)
    return number * factoRecursive(number - 1);
  }
}

// Appel de la fonction factoRecursive avec un argument de 5 et affichage du résultat
console.log(factoRecursive(5));
