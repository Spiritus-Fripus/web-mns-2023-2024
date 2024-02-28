// Exercice 4:
// Écrivez une fonction qui prend un tableau de noms et renvoie une nouvelle liste de noms qui commencent par la lettre "A".

const name = ["Jean", "Annie", "Aurelie", "Loic", "Jordan", "Amelie"]

function sort(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        let firstLetter = array[i].toLowerCase().slice(0, 1)
        if (firstLetter === "a") {
            newArray.push(array[i].toLowerCase())
        }
    }
    console.log(newArray)
}

function filtered(array) {
    const nameA = array.filter((name) => {
        return name.startsWith("A");
    });
    console.log(nameA);
}


sort(name);
filtered(name);