let menu = document.getElementById("menu-btn");
let navbar = document.querySelector(".header .navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

var swiper = new Swiper(".home-slider", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let loadMoreBtn = document.querySelector(".packages .load-more .btn");
let currentItem = 6;

loadMoreBtn.onclick = () => {
  let boxes = [...document.querySelectorAll(".packages .box-container .box")];

  for (var i = currentItem; i < currentItem + 3; i++) {

    boxes[i].style.display = "inline-block";
  };
  currentItem += 3;
  console.log(currentItem);
  if (currentItem >= boxes.length) {
    loadMoreBtn.style.display = "none";
  }
}
