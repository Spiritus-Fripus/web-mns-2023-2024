const student = ["Noé", "Marc", "Dave", "Eva", "Jean", "Alex", "Ada", "Lia", "Maé", "Mya", "Noa"];

function random(min, max) {
    return Math.random() * (min, max);
}

function addType(objectStr, cheater) {


    const newStudentType = objectStr.map((name) => ({name, type: "humain", notes: parseInt(random(0, 20))}));

    const cheat = newStudentType.find((isCheater) => isCheater.name === cheater)
    console.log(cheat, "Avant le cheat")
    if (cheat) {
        cheat.notes += 1
    }

    // tri par notes (a = objet entier (name : , type: , notes:) b = objet entier) donc comparaison entre a & b
    newStudentType.sort((a, b) => {
        return a.notes - b.notes
    })

    // moyenne générale
    let totalNotes = 0;
    newStudentType.forEach((student) => {
        totalNotes += student.notes
    });
    const moyenne = totalNotes / newStudentType.length


    console.log(newStudentType)
    console.log("la moyenne de la classe est de :", moyenne.toFixed(1))
}

addType(student, "Lia")