// variables
const sendBtn = document.querySelector("#sendBtn"),
  email = document.querySelector("#email"),
  subject = document.querySelector("#subject"),
  message = document.querySelector("#message");
const resetBtn = document.querySelector("#resetBtn");
const form = document.querySelector("#email-form");

eventListeners();

// eventListeners
function eventListeners() {
  // app initialization
  document.addEventListener("DOMContentLoaded", appInit);
  // validating fields
  email.addEventListener("blur", validateField);
  subject.addEventListener("blur", validateField);
  message.addEventListener("blur", validateField);

  // reset Btn
  resetBtn.addEventListener("click", resetForm);

  // submit form and show gif
  form.addEventListener("submit", submitForm);
}

// sending email and submit the form
function submitForm(e) {
  e.preventDefault();

  // show the spinner
  const spinner = document.getElementById("spinner");
  spinner.style.display = "block";

  // make second gif
  const sendEmailImg = document.createElement("img");
  sendEmailImg.src = "../img/mail.gif";
  sendEmailImg.style.display = "block";
  
  // show the email send img
  setTimeout(() => {
    // hide first spinner
    spinner.style.display = "none";

    // appended img to the html
    const loaders = document.querySelector("#loaders");
    loaders.appendChild(sendEmailImg);

    // reset form and remove
    setTimeout(() => {
      resetForm();
      sendEmailImg.remove();
    }, 5000);
  }, 3000);
}

// functions
function appInit() {
  // disabled send button on load
  sendBtn.disabled = true;
}

// validating field
function validateField() {
  // validate Length of fields
  validateLength(this);

  // validate email field
  if (this.type === "email") {
    validateEmail(this);
  }

  let error = document.querySelectorAll(".error");
  if (email.value !== "" && subject.value !== "" && message.value !== "") {
    if (error.length == 0) {
      sendBtn.disabled = false;
    }
  }
}

// validate Length of fields
function validateLength(field) {
  if (field.value.length > 0) {
    field.style.borderBottomColor = "green";
    field.classList.remove("error");
  } else {
    field.style.borderBottomColor = "red";
    field.classList.add("error");
  }
}

// validate email field content @
function validateEmail(field) {
  const emailTxt = field.value;

  if (emailTxt.includes("@")) {
    field.style.borderBottomColor = "green";
    field.classList.remove("error");
  } else {
    field.style.borderBottomColor = "red";
    field.classList.add("error");
  }
}

// reset form using button
function resetForm() {
  form.reset();
}
