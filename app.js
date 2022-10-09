const sorch = document.getElementById("ciqish");
const button = document.querySelectorAll(".btn1");
const chiqish = document.querySelector(".btns");
const onclic = document.querySelector(".onclic-btn");
const none = document.querySelector(".none");
sorch.addEventListener("click", () => {
  onclic.classList.add("none");
});
chiqish.addEventListener("click", () => {
  onclic.classList.add("none");
});
button.forEach( (button) => {
    button.addEventListener("click", () => {
        onclic.classList.remove("none");
    });
})
document.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    onclic.classList.add("none");
  }
});
