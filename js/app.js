// Define DOM elements

const firstNameInput = document.getElementById("fname");
const lastNameInput = document.getElementById("lname");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const firstNameError = document.getElementById("error-fname");
const lastNameError = document.getElementById("error-lname");
const emailError = document.getElementById("error-email");
const passwordError = document.getElementById("error-password");
const successToast = document.getElementById("toast");

// Set Up inputs

let userFirstName = "";
let userLastName = "";
let userEmail = "";
let userPassword = "";

// Get input from text field. If previous attempt resulted in a failure, remove the errors when typing starts.

function getFirstName() {
  userFirstName = firstNameInput.value;
  if (userFirstName != "" && firstNameError.classList.contains("active")) {
    firstNameError.classList.remove("active");
  }
}

function getLastName() {
  userLastName = lastNameInput.value;
  if (userLastName != "" && lastNameError.classList.contains("active")) {
    lastNameError.classList.remove("active");
  }
}

function getEmail() {
  userEmail = emailInput.value;
  if (userEmail != "" && emailError.classList.contains("active")) {
    emailError.classList.remove("active");
  }
}

function getPassword() {
  userPassword = passwordInput.value;
  if (userPassword != "" && passwordError.classList.contains("active")) {
    passwordError.classList.remove("active");
  }
}

// validate the user input. If input is blank or email doesnt validate, throw error.
// If all inputs are complete and email validates, send the form

function validateForm() {
  const validateEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (userFirstName == "") {
    firstNameError.classList.add("active");
  } else {
    firstNameError.classList.remove("active");
  }

  if (userLastName == "") {
    lastNameError.classList.add("active");
  } else {
    lastNameError.classList.remove("active");
  }

  if (userEmail.match(validateEmail) || (userEmail.match(validateEmail) && emailError.classList.contains("active"))) {
    emailError.classList.remove("active");
  } else {
    emailError.classList.add("active");
  }

  if (userPassword == "") {
    passwordError.classList.add("active");
  } else {
    passwordError.classList.remove("active");
  }

  if (userFirstName != "" && userLastName != "" && userEmail !== "" && userEmail.match(validateEmail) && userPassword != "") {
    sendForm();
  }
}

// handle success toast and clear form

function handleSuccessToast() {
  successToast.style.display = "block";
  setTimeout(() => {
    successToast.style.display = "none";
  }, 3000);
}

// reset the form

function resetForm() {
  setTimeout(() => {
    firstNameInput.value = "";
    lastNameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
  }, 3000);
}

// Send form function
function sendForm() {
  // add post request stuff here.
  // this isnt how you would normally handle the data. Just for challenge purposes.
  handleSuccessToast();
  resetForm();

  console.log("Sent!", { firstName: userFirstName, lastName: userLastName, email: userEmail, password: userPassword });
}
