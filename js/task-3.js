const inputName = document.getElementById("name-input");
const outputName = document.getElementById("name-output");

const placeholder = () => {
    const trimmedValue = inputName.value.trim();
    outputName.textContent = trimmedValue !== "" ? trimmedValue : "Anonymous";
}

inputName.addEventListener("input", placeholder);


