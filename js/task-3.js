const inputName = document.getElementById("name-input");
inputName.style.marginBottom = "16px";
inputName.style.marginTop = "16px";
const outputName = document.getElementById("name-output");

inputName.addEventListener("input", () => {
    inputName.value !== "" ? outputName.textContent = event.currentTarget.value.trim() : inputName.value = "Anonymous";
})

// inputName.addEventListener("input", () => {
//     const trimmedInput = inputName.value.trim();
//     outputName.textContent = trimmedInput !== "" ? trimmedInput : "Anonymous";
// });
