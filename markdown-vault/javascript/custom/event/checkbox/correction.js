// Déclaration des constantes qui représentent les éléments HTML
const input = document.querySelector("#input"); // Input pour ajouter une tâche
const select = document.querySelector("#select"); // Sélecteur de priorité
const parentEl = document.querySelector("#parent"); // Parent des colonnes de priorité

// Sélection des colonnes de priorité
const urgentCol = document.querySelector(".URGENT");
const normalCol = document.querySelector(".NORMAL");
const optionnalCol = document.querySelector(".OPTIONNEL");

// Événement déclenché lorsqu'une nouvelle tâche est ajoutée
input.addEventListener("change", (e) => {
  // Création des éléments HTML pour la nouvelle tâche et sa priorité
  const divTache = document.createElement("div");
  const spanPriority = document.createElement("span");

  // Ajout du texte de la tâche dans la div créée
  divTache.innerHTML = e.target.value;

  // Ajout du texte de priorité dans un span et insertion avant le texte de la tâche
  spanPriority.innerHTML = select.value + " : ";
  divTache.prepend(spanPriority);

  // Attribution d'une couleur en fonction de la priorité
  let color;
  if (select.value === "urgent") {
    color = "red";
  } else if (select.value === "normal") {
    color = "green";
  } else if (select.value === "optionnel") {
    color = "blue";
  }
  divTache.style.color = color;

  // Ajout d'un effet de soulignement au clic sur une tâche
  divTache.style.cursor = "pointer";
  divTache.addEventListener("click", () => {
    if (divTache.style.textDecoration === "line-through") {
      divTache.style.textDecoration = "unset";
    } else {
      divTache.style.textDecoration = "line-through";
    }
  });

  // Attribution de la colonne de priorité appropriée en fonction de la priorité sélectionnée
  let colPriority;
  switch (select.value) {
    case "optionnel":
      colPriority = optionnalCol;
      break;
    case "normal":
      colPriority = normalCol;
      break;
    case "urgent":
      colPriority = urgentCol;
      break;
  }

  // Ajout de la tâche à la colonne de priorité appropriée
  colPriority.append(divTache);

  // Effacement du contenu de l'input après ajout de la tâche
  input.value = "";
});
