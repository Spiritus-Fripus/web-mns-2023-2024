// Exercice 11:
// const firstNames = ["Noé", "Marc", "Dave", "Eva", "Jean", "Alex", "Ada", "Lia", "Maé", "Mya", "Noa"];

// 1) Trier le tableau dans l'ordre Alphabetique
// 2) Associer un attribut "type":"humain" a chaque élève
// 3) Associer à chaque élève une note aléatoire
// 4) Classer les élèves par note croissante
// 5) Calculer la moyenne des élèves

const firstNames = ["Noé", "Marc", "Dave", "Eva", "Jean", "Alex", "Ada", "Lia", "Maé", "Mya", "Noa"];

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const students = firstNames.map((firstname) => {
    return {firstname, type: "humain", mark: randomIntFromInterval(0, 20)}
}).sort((a, b) => a.mark - b.mark);

let sum = 0
students.forEach((student) => sum += student.mark)
const average = (sum / students.length).toFixed(1)

/*
const sum = students.reduce((acc, student) => {
    return acc + student.mark
}, 0)
*/

console.log(students, average)

