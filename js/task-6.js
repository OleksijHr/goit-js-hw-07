const input = document.querySelector("[type='number']");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxes = document.getElementById("boxes");


createBtn.addEventListener("click", () => {
  if (Number(input.value) <= Number(input.max) && Number(input.value) >= Number(input.min)){
    createBoxes(input.value);
    input.value = "";
  };
})

function createBoxes(value) {
  boxes.innerHTML = "";
  const arrBoxes = [];
  let boxSize = 40;

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

  for (let i = 0; i < value; i++){
    const div = document.createElement("div");
    boxSize += 10;
    div.classList = "item";
    div.style.width = `${boxSize}px`;
    div.style.height = `${boxSize}px`;
    div.style.backgroundColor = getRandomHexColor();
    arrBoxes.push(div);
  }

  boxes.append(...arrBoxes);
}

function destroyBoxes() {
  input.value = "";
  boxes.innerHTML = "";
}

destroyBtn.addEventListener("click", destroyBoxes);

