// création d'une todo list
// 1: ajout d'element depuis l'input
// 2: pouvoir check l'input
// 3: pouvoir associer l'input à qqn avec le select

const input = document.querySelector("#input");
const select = document.querySelector("#select");
const parentEl = document.querySelector("#parent");

input.addEventListener("change", (e) => {
  console.log(e.target.value, select.value);
  // ajout d'élement depuis l'input
  const div = document.createElement("div");
  const span = document.createElement("span");
  // target de la valeur de l'input
  div.innerHTML = e.target.value;
  // checkbox
  if (select.value === "John") {
    span.innerHTML = " [ ] pour John";
  } else if (select.value === "Pascal") {
    span.innerHTML = " [ ] pour Pascal";
  } else if (select.value === "Marie") {
    span.innerHTML = " [ ] pour Marie";
  }
  parentEl.append(div);
  div.append(span);
  // modification de la checkbox au click
  span.addEventListener("click", () => {
    span.innerHTML = " [X]";
  });
  // reset de l'input
  input.value = "";
});
