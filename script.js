const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm_password");
const submitButton = document.querySelector(".create-account-btn");

function validatePasswords() {
    if (password.value !== confirmPassword.value) {
        password.style.borderColor = 'red';
        confirmPassword.style.borderColor = 'red';
    } else {
        password.style.borderColor = 'green';
        confirmPassword.style.borderColor = 'green';
    }
}

confirmPassword.addEventListener("input", validatePasswords);