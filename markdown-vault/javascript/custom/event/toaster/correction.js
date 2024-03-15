const btnSuccess = document.querySelector("#btnSuccess");
const btnError = document.querySelector("#btnError");
const container = document.querySelector("#toasterContainer");

function createAndDeleteToast(typeofToast) {
  const div = document.createElement("div");
  if (typeofToast === "SUCCESS") {
    div.innerHTML = "SUCCESS";
    div.style.backgroundColor = "green";
  } else {
    div.innerHTML = "ERROR";
    div.style.backgroundColor = "red";
  }
  container.append(div);

  setTimeout(() => {
    div.remove();
  }, 3000);
}

btnSuccess.addEventListener("click", () => createAndDeleteToast("SUCCESS"));
btnError.addEventListener("click", () => createAndDeleteToast("ERROR"));
