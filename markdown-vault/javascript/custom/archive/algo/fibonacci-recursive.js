//Calculer le factorielle d'un nombre a l'aide d'une boucle for, while puis a l'aide d'une algo récursive
//Calculer la somme d'un tableau a l'aide d'une boucle for, while puis a l'aide d'une algo récursive
//Calculer le fibonnaci du n-ieme nombre a l'aide d'une boucle for, while puis a l'aide d'une algo récursive

// Que remarque t-on q propos des fonctions recursive ?

// Définition de la fonction récursive fibonacci qui calcule le nombre de Fibonacci d'un nombre donné
function fibonacci(number) {
  // Si le nombre est inférieur à 2, le nombre de Fibonacci est égal au nombre lui-même
  if (number < 2) {
    return number;
  } else {
    // Sinon, le nombre de Fibonacci est la somme des deux nombres de Fibonacci précédents
    return fibonacci(number - 1) + fibonacci(number - 2);
  }
}

// Définition de la valeur maximale de la suite de Fibonacci à générer
const n = 100;

// Boucle for pour générer et afficher les nombres de Fibonacci jusqu'au nombre spécifié
for (let i = 0; i < n; i++) {
  console.log(fibonacci(i));
}
