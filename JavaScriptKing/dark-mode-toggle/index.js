const bodyEl = document.querySelector("body");
const dotEl = document.querySelector(".dot");
const btnEl = document.querySelector(".btn");

let IsActive = false;

btnEl.addEventListener("click", () => {
  if (!IsActive) {
    bodyEl.classList.add("active");
    dotEl.classList.add("active");
  } else {
    bodyEl.classList.remove("active");
    dotEl.classList.remove("active");
  }
  IsActive = !IsActive;
});
