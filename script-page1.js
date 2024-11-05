// ==========Re-enter password checker=================
var password = document.getElementById("password"),
  confirm_password = document.getElementById("confirm_password");

function validatePassword() {
  if (password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity("");
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

//==========email checker=================
clientmail.addEventListener("input", (event) => {
  if (clientmail.validity.typeMismatch) {
    clientmail.setCustomValidity("Please enter a correct email address");
    console.log(event);
  } else {
    clientmail.setCusomValidity("");
  }
});
