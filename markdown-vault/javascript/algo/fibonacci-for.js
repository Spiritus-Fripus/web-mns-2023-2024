//Calculer le factorielle d'un nombre a l'aide d'une boucle for, while puis a l'aide d'une algo récursive
//Calculer la somme d'un tableau a l'aide d'une boucle for, while puis a l'aide d'une algo récursive
//Calculer le fibonnaci du n-ieme nombre a l'aide d'une boucle for, while puis a l'aide d'une algo récursive

// Que remarque t-on q propos des fonctions recursive ?

// Définition de la fonction Fibonacci prenant un paramètre n pour le nombre de termes à générer
function Fibonacci(n) {
  // Initialisation du tableau fib avec les deux premiers termes de la suite de Fibonacci
  let fib = [0, 1];

  // Boucle for pour générer les termes suivants de la suite
  for (let i = 2; i < n; i++) {
    // Calcul du prochain nombre de Fibonacci en additionnant les deux précédents
    let nextNumber = fib[i - 1] + fib[i - 2];

    // Ajout du prochain nombre de Fibonacci au tableau fib
    fib.push(nextNumber);
  }

  // Retourne le tableau contenant les n premiers termes de la suite de Fibonacci
  return fib;
}

// Appel de la fonction Fibonacci avec un argument de 10 et affichage du résultat
console.log(Fibonacci(10));
