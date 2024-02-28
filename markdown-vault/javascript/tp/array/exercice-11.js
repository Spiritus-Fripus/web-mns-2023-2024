// Exercice 11:
// const firstNames = ["Noé", "Marc", "Dave", "Eva", "Jean", "Alex", "Ada", "Lia", "Maé", "Mya", "Noa"];

// 1) Trier le tableau dans l'ordre Alphabetique
// 2) Associer un attribut "type":"humain" a chaque élève
// 3) Associer à chaque élève une note aléatoire
// 4) Classer les élèves par note croissante
// 5) Calculer la moyenne des élèves

const firstNames = ["Noé", "Marc", "Dave", "Eva", "Jean", "Alex", "Ada", "Lia", "Maé", "Mya", "Noa"];


function addType(objectStr) {
    objectStr.sort()

    function random(min, max) {
        return Math.random() * (min, max);
    }

    const newObjetType = objectStr.map((name) => ({name, type: "humain", notes: random(0, 20).toFixed(1)}));
    console.log(newObjetType)
}

addType(firstNames);
