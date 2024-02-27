function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("[type='number']");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxes = document.getElementById("boxes");


createBtn.addEventListener("click", () => {
  if (Number(input.value) > Number(input.max) || Number(input.value) < Number(input.min)){
    alert("Don't worry, you are in if's block");
} else {
    createBoxes(input.value);
    input.value = "";
  }
  })

function createBoxes(value) {
  const arrBoxes = [];
  let sizeDefault = 30;

  for (let i = 0; i < value; i++){
    const div = document.createElement("div");
    sizeDefault += 10;
    div.classList = "item";
    div.style.width = `${sizeDefault}px`;
    div.style.height = `${sizeDefault}px`;
    div.style.backgroundColor = getRandomHexColor();
    arrBoxes.push(div);
    console.log(arrBoxes);
  }

  boxes.append(...arrBoxes);
}

destroyBtn.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  input.value = "";
  boxes.innerHTML = "";
}

