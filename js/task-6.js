function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


// Напиши скрипт створення й очищення колекції елементів з наступним функціоналом.



// Є input, у який користувач вводить бажану кількість елементів. 
// Після натискання на кнопку Create має рендеритися(додаватися в DOM) колекція з відповідною кількістю елементів 
// і очищатися значення в інпуті.При повторному натисканні на кнопку Create поверх старої колекції має рендеритись нова.
// Після натискання на кнопку Destroy колекція елементів має очищатися.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Після натискання користувачем на кнопку Create треба провалідувати значення в input, воно має бути в межах від 1 до 100 включно. Тільки якщо воно задоволяє умову, мають додаватися нові <div> елементи в DOM.

// Для рендеру елементів на сторінці створи функцію createBoxes(amount), яка приймає один параметр — число, що зберігає кількість елементів для рендеру.



// Функція має створювати стільки <div> елементів, скільки вказано в параметрі amount і додавати їх у DOM дочірніми елементами для div#boxes.

// Розміри першого <div> елемента мають бути 30px на 30px.
// Кожен наступний елемент повинен бути ширшим і вищим від попереднього на 10px.
// Усі елементи повинні мати випадковий колір фону. Використовуй готову функцію getRandomHexColor() для отримання випадкового кольору.


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

