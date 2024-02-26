//Calculer le factorielle d'un nombre a l'aide d'une boucle for, while puis a l'aide d'une algo récursive
//Calculer la somme d'un tableau a l'aide d'une boucle for, while puis a l'aide d'une algo récursive
//Calculer le fibonnaci du n-ieme nombre a l'aide d'une boucle for, while puis a l'aide d'une algo récursive

// Que remarque t-on q propos des fonctions recursive ?

// Fonction factorielleFor utilisant une boucle for pour calculer la factorielle
function factorielleFor(n) {
  let resultat = 1;

  // Boucle for itérant de 1 à n inclus pour calculer la factorielle
  for (let i = 1; i <= n; i++) {
    resultat *= i;
  }
  return resultat;
}

// Fonction factorielleWhile utilisant une boucle while pour calculer la factorielle
function factorielleWhile(n) {
  let resultat = 1;
  let i = 1;

  // Boucle while itérant jusqu'à ce que i soit égal à n pour calculer la factorielle
  while (i <= n) {
    resultat *= i;
    i++;
  }
  return resultat;
}

// Fonction factorielleRecursive utilisant une approche récursive pour calculer la factorielle
function factorielleRecursive(n) {
  if (n === 0) {
    return 1;
  } else {
    // Appel récursif de factorielleRecursive jusqu'à ce que n soit égal à 0
    return n * factorielleRecursive(n - 1);
  }
}

// Appel de la fonction factorielleRecursive avec un argument de 40 et affichage du résultat
console.log(factorielleRecursive(40));
