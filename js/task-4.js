const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", submitHandler);

function submitHandler(event) {
    event.preventDefault();

    const email = event.currentTarget.elements.email;
    const password = event.currentTarget.elements.password;

    if (email.value === "" || password.value === "") {
        alert("All form fields must be filled in");
    } else {
        const profile = {};

        profile.email = email.value.trim();
        profile.password = password.value.trim();

        console.log(profile);
        event.currentTarget.reset();
    }
}