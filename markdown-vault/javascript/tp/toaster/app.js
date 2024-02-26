const btnSuccessEL = document.querySelector("#btnSuccess");
const btnErrorEl = document.querySelector("#btnError");
const container = document.querySelector("#toasterContainer");
const fadeDuration = 3000; // Durée du fondu en millisecondes
const fadeStep = 50; // Intervalle de temps entre chaque étape du fondu

function createSuccess() {
  const newElem = document.createElement("div");
  newElem.innerHTML = "LAMBADA";
  newElem.style.color = "green";
  newElem.style.fontSize = "40px";
  container.appendChild(newElem);
  fadeIn(newElem);
  setTimeout(() => removeEl(newElem), fadeDuration);
}

function createError() {
  const newElem = document.createElement("div");
  newElem.innerHTML = "MACARENA";
  newElem.style.color = "red";
  newElem.style.fontSize = "40px";
  container.appendChild(newElem);
  fadeIn(newElem);
  setTimeout(() => removeEl(newElem), fadeDuration);
}

function fadeIn(element) {
  let opacity = 0;
  const fadeInStep = fadeStep / fadeDuration; // Calculer le pas d'opacité pour chaque étape
  (function updateOpacity() {
    if (opacity < 1) {
      opacity += fadeInStep;
      element.style.opacity = opacity;
      setTimeout(updateOpacity, fadeStep);
    }
  })();
}

function removeEl(element) {
  container.removeChild(element);
}

btnSuccessEL.addEventListener("click", createSuccess);
btnErrorEl.addEventListener("click", createError);
