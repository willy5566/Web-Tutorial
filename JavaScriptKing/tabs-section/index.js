const tabsEl = document.querySelector(".tabs");

tabsEl.addEventListener("click", (event) => {
  console.log(event.target.dataset.id);
});
