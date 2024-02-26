const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", submitHandler);

function submitHandler(event) {
    event.preventDefault();

    const profile = {};

    const email = event.currentTarget.elements.email;
    const password = event.currentTarget.elements.password;

    if (email.value === "" || password === "") {
        alert("All form fields must be filled in");
    } else {
        profile.email = email.value;
        profile.password = password.value;

        console.log(profile);
    }

    event.currentTarget.reset();
}