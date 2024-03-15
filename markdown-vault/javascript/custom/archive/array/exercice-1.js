// Exercice 1:
// Créez un tableau vide appelé months. Ajoutez les douze mois de l'année en utilisant la méthode push.

const months = [];

const month = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "décembre"]
for (let i = 0; i < month.length; i++) {
    months.push(month[i])
    
}

console.log(months)