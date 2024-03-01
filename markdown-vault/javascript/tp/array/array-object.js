const dw1 = [
  {
    firstName: "Jean",
    gender: "male",
    js: {
      mark: 12,
      rate: 3,
    },
    english: {
      mark: 7,
      rate: 2,
    },
  },
  {
    firstName: "Marc",
    gender: "male",
    js: {
      mark: 9,
      rate: 3,
    },
    english: {
      mark: 19,
      rate: 2,
    },
  },
  {
    firstName: "Amar",
    gender: "male",
    js: {
      mark: 16,
      rate: 3,
    },
    english: {
      mark: 2,
      rate: 2,
    },
  },
  {
    firstName: "Oscar",
    gender: "male",
    js: {
      mark: 16,
      rate: 3,
    },
    english: {
      mark: 12,
      rate: 2,
    },
  },
  {
    firstName: "Juliette",
    gender: "female",
    js: {
      mark: 10,
      rate: 3,
    },
    english: {
      mark: 11,
      rate: 2,
    },
  },
];
const dw2 = [
  {
    firstName: "Jordan",
    gender: "male",
    js: {
      mark: 12,
      rate: 3,
    },
    english: {
      mark: 4,
      rate: 2,
    },
  },
  {
    firstName: "Baptiste",
    gender: "male",
    js: {
      mark: 12,
      rate: 3,
    },
    english: {
      mark: 9,
      rate: 2,
    },
  },
  {
    firstName: "Hélène",
    gender: "female",
    js: {
      mark: 13,
      rate: 3,
    },
    english: {
      mark: 20,
      rate: 2,
    },
  },
  {
    firstName: "Paola",
    gender: "female",
    js: {
      mark: 12,
      rate: 3,
    },
    english: {
      mark: 7,
      rate: 2,
    },
  },
];

// 1. Combien y a-t-il d'élève dans la classe dw1 puis dw2 et dans toutes les classes ?
// 2. Lister l'ensemble des élèves des deux classes dans l'ordre alphabétique
// 3. Prendre les 3 premiers élèves de la classe dw1
// 4. Prendre le dernier élève de la classe dw1
// 5. Moyenne générale de chaque élève
// 6. Moyenne de la classe dw1 en js ?
// 7. Moyenne des deux classes en js ?
// 8. Meilleure moyenne de la classe en js ?
// 9. Meilleur élève des deux classes
// 10. Meilleure fille des deux classes en anglais
// 11. Meilleur garcon en moyenne générale
// 12. Qui a la note médiane en anglais parmi dw1 ?
// 12.a. Donner la position de Jean dans la classe
// 13. Qui a la moyenne médiane générale dw1 + dw2 ?
// 14. Moyenne générale des filles et moyenne générale des garcons ?
// 15. Qui sont les meilleurs en js, les filles ou les garcons ?
// 16. Récupérer les filles des classes dw1 et dw2 et les classer dans l'ordre de leurs moyennes générales

const devweb = dw1.concat(dw2);

console.log();
console.log("il y a " + dw1.length + " élèves en dw1");
console.log("il y a " + dw2.length + " élèves en dw2");
console.log("il y a " + devweb.length + " élèves en tout");
console.log();

let studentNames = [];
devweb.forEach((names) => {
  studentNames.push(names.firstName);
});

console.log("Le prénom des élèves des 2 classes dans l'ordre alphabétique :");
console.log(studentNames.sort());
console.log();

function sumMarks(student) {
  return (
    student.js.mark * student.js.rate +
    student.english.mark * student.english.rate
  );
}

dw1.forEach((student) => {
  student.totalMarks = sumMarks(student);
});
dw2.forEach((student) => {
  student.totalMarks = sumMarks(student);
});

const top3Dw1 = dw1.sort((a, b) => b.totalMarks - a.totalMarks).slice(0, 3);

const worstOfDw1 = dw1.sort((a, b) => a.totalMarks - b.totalMarks).slice(0, 1);

console.log("Les 3 meilleurs élève de dw1 sont : ");
top3Dw1.forEach((student) => console.log(student.firstName));
console.log();
console.log("Le pire élève de dw1 est : ");
worstOfDw1.forEach((student) => console.log(student.firstName));
console.log();

function generalAverage(student) {
  return student.totalMarks / 5;
}

devweb.forEach((student) => {
  student.genAverage = generalAverage(student);
});

console.log("La moyenne générale pour chaque élève est de : ");
devweb.forEach((student) =>
  console.log(student.firstName + " : " + student.genAverage)
);
console.log();

function jsAverage(student) {
  let average = [];
  student.forEach((student) => {
    average.push(student.js.mark);
  });
  return (totalAverage = (
    average.reduce((a, b) => a + b, 0) / student.length
  ).toFixed(2));
}

console.log("La moyenne en JS de la classe dw1 est : ");
console.log(jsAverage(dw1));
console.log();

console.log("La moyenne des 2 classes en JS est :");
console.log(jsAverage(devweb));
console.log();

const bestAverage = devweb
  .sort((a, b) => b.genAverage - a.genAverage)
  .slice(0, 1);

console.log("Le meilleur élève des 2 classes est de : ");
bestAverage.forEach((student) =>
  console.log(
    student.firstName + " avec " + student.genAverage + " de moyenne générale"
  )
);
console.log();
