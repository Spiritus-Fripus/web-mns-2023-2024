//Calculer le factorielle d'un nombre a l'aide d'une boucle for, while puis a l'aide d'une algo récursive
//Calculer la somme d'un tableau a l'aide d'une boucle for, while puis a l'aide d'une algo récursive
//Calculer le fibonnaci du n-ieme nombre a l'aide d'une boucle for, while puis a l'aide d'une algo récursive

// Que remarque t-on q propos des fonctions recursive ?

// Définition du nombre dont on veut calculer la factorielle
let number = 10;

// Initialisation de la variable qui stockera le résultat de la factorielle
let facto = 1;

// Initialisation du compteur de la boucle
let i = 1;

// Boucle while pour calculer la factorielle
while (i !== number + 1) {
  // Multiplie le résultat actuel de la factorielle par le compteur de la boucle
  facto = facto * i;

  // Incrémente le compteur
  i++;
}

// Affichage du résultat
console.log(`le résultat de ${number}! est ${facto}`);
