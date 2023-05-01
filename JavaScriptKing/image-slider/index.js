const imageContainerEl = document.querySelector(".image-container");
const imgsEl = document.querySelectorAll("img");
const btnPrev = document.querySelector(".btn.prev");
const btnNext = document.querySelector(".btn.next");

let NextImg = 1;
let timeout;

btnNext.addEventListener("click", () => {
  NextImg++;
  clearTimeout(timeout);
  updateImage();
});

btnPrev.addEventListener("click", () => {
  NextImg--;
  clearTimeout(timeout);
  updateImage();
});

window.addEventListener("keydown", (event) => {
  if (event.key == "ArrowRight") {
    NextImg++;
    clearTimeout(timeout);
    updateImage();
  } else if (event.key == "ArrowLeft") {
    NextImg--;
    clearTimeout(timeout);
    updateImage();
  }
});

updateImage();

function updateImage() {
  if (NextImg > imgsEl.length) {
    NextImg = 1;
  } else if (NextImg < 1) {
    NextImg = imgsEl.length;
  }
  imageContainerEl.style.transform = `translateX(${-NextImg + 1}00%)`;

  timeout = setTimeout(() => {
    NextImg++;
    updateImage();
  }, 3000);
}
