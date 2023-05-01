const containerEl = document.querySelector(".container");
const careers = ["Youtuber", "Wed Developer", "Freelancer", "Instruct"];

let carerersIndex = 0;

let cahracterIndex = 0;

updateText();

function updateText() {
  cahracterIndex++;
  containerEl.innerHTML = `
    <h1>I am ${checkFirst()} ${careers[carerersIndex].slice(
    0,
    cahracterIndex
  )}</h1>
    `;

  if (careers[carerersIndex].length === cahracterIndex) {
    carerersIndex++;
    cahracterIndex = 0;
  }

  if (careers.length === carerersIndex) {
    carerersIndex = 0;
  }
  setTimeout(() => {
    updateText();
  }, 400);
}

function checkFirst() {
  if (
    careers[carerersIndex].slice(0, 1) === "A" ||
    careers[carerersIndex].slice(0, 1) === "E" ||
    careers[carerersIndex].slice(0, 1) === "I" ||
    careers[carerersIndex].slice(0, 1) === "O" ||
    careers[carerersIndex].slice(0, 1) === "U"
  ) {
    return "an";
  } else {
    return "a";
  }
}
