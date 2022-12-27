var fromValue = document.querySelector(".feedback-from");
var feedbackValue = document.querySelector(".feedback-content");
var nameField = document.querySelector("#nameinput");
var feedbackField = document.querySelector("#other-info");
var form = document.querySelector(".contact-form");
var feedbackPreview = document.querySelector(".feedback-preview");
var submitButton = document.querySelector(".submitbutton");

function completePreview() {
  if (form.checkValidity() === true) {
    submitButton.className = "submitbutton show";
  }
}

/*
completePreview();
*/

/* create event listener for changes to form */
form.addEventListener("change", completePreview, false);