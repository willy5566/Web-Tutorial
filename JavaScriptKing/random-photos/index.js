const imageContainer = document.querySelector(".image-container");
const btnEl = document.querySelector(".btn");

let imageNum = 10;

btnEl.addEventListener("click", () => {

    addNewImages()
});

addNewImages();

function addNewImages() {

    for (let index = 0; index < imageNum; index++) {
        const newImage = document.createElement("img");
        newImage.src = "https://picsum.photos/300?random=" + index;
        imageContainer.appendChild(newImage);
    }
}