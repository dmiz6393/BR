window.addEventListener("DOMContentLoaded", event => {
  console.log("DOM fully loaded and parsed");
  formHandler();
});

const formHandler = () => {
  form = document.querySelector(".form");
  form.addEventListener("submit", e => handleFormSubmission(e));
};

const handleFormSubmission = e => {
  e.preventDefault();
  let first = e.target.first.value;
  let last = e.target.last.value;
  let email = e.target.email.value;
  console.log(`First Name:${first}, Last Name: ${last}, Email:${email}`);
};
