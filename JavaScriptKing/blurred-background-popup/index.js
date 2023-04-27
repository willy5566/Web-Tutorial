const buttonEl = document.querySelector(".btn");
const closeIconEl = document.querySelector(".close-icon");
const containerEl = document.querySelector(".container");
const popupContainer = document.querySelector(".popup-container");

buttonEl.addEventListener("click", () => {
    containerEl.classList.add("active");
    popupContainer.classList.remove("active");
})

closeIconEl.addEventListener("click", () => {
    containerEl.classList.remove("active");
    popupContainer.classList.add("active");
})