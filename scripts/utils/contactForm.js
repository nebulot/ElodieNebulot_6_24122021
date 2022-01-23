// DOM element
async function displayPhotoModal() {
  const modal = document.getElementById("contact__modal");
  const btn = document.querySelector(".photographer-page__contact__button");
  const btn2 = document.getElementsByClassName("close")[0];
  const firstNameInput = document.getElementById("firstname");
  const lastNameInput = document.getElementById("lastname");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const submitBtn = document.getElementById("form-submit-button");

  /*display on click 
function displayModal() {
const modal = document.getElementById("contact__modal");  
	modal.style.display = "block";
}*/

  btn.onclick = function () {
    modal.style.display = "block";
  };

  /*display close on click
function closeModal() {
 const modal = document.getElementById("contact__modal");
    modal.style.display = "none";
}*/

  btn2.onclick = function () {
    modal.style.display = "none";
  };

  //submit form
  if (submitBtn) {
    submitBtn.addEventListener("click", function (event) {
      event.preventDefault();
      console.log(
        `L'utilisateur ${firstNameInput.value} ${lastNameInput.value} avec l'adresse mail suivante ${emailInput.value} vous adresse le message suivant : ${messageInput.value}`
      );
      modal.style.display = "none";
    });
  }
}
