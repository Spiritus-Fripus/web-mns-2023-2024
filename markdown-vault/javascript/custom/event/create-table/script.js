let cpt = 1;

document.getElementById("btn").addEventListener("click", () => {
  if (cpt == 1) {
    let table = document.createElement("table");
    table.setAttribute("id", "table");
    document.body.append(table);
  }
  if (cpt % 5 == 1) {
    let tr = document.createElement("tr");
    document.getElementById("table").append(tr);
  }
  let td = document.createElement("td");
  td.innerText = cpt;
  document.getElementById("table").lastElementChild.append(td);
  cpt++;
});
