const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmpassword");
const tel = document.getElementById("tel");
const age = document.getElementById("age");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const firstnameValue = firstname.value.trim();
  const lastnameValue = lastname.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const confirmPasswordValue = confirmPassword.value.trim();
  const telValue = tel.value.trim();
  const ageValue = age.value.trim();

  if (firstnameValue === "") {
    setError(firstname, "Firstname is Required");
  } else {
    setSuccess(firstname);
  }

  if (lastnameValue === "") {
    setError(lastname, "Lastname is Required");
  } else {
    setSuccess(lastname);
  }
  if (emailValue === "") {
    setError(email, "Email is Required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
  } else {
    setSuccess(email);
  }

  if (passwordValue === "") {
    setError(password, "Password is Required");
  } else if (passwordValue.length < 5 || passwordValue.length > 10) {
    setError(password, "Password must between 8 and 10 characters");
  } else {
    setSuccess(password);
  }

  if (confirmPasswordValue === "") {
    setError(confirmPassword, "Password confirmation is Required");
  } else if (
    confirmPasswordValue.length < 5 ||
    confirmPasswordValue.length > 10
  ) {
    setError(password, "Password must between 8 and 10 characters");
  } else if (confirmPasswordValue !== passwordValue) {
    setError(confirmPassword, "Password does not match");
  } else {
    setSuccess(confirmPassword);
  }
  if (telValue === "") {
    setError(tel, "Tel no. is Required");
  } else {
    setSuccess(tel);
  }
  if (ageValue < 1) {
    setError(age, "Age is invalid");
  } else if (age === "") {
    setError(age, "Age is required");
  } else {
    setSuccess(age);
  }
};
