// DOM element
function displayModal() {
  const modal = document.querySelector("#contact_modal").style.display = "block";
  const close = document.getElementsByClassName(".close");
  const firstNameInput = document.getElementById("firstname");
  const lastNameInput = document.getElementById("lastname");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const submitBtn = document.getElementById("form-submit_btn");

  close.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function(e) {
    if (e.target == modal){
      modal.style.display = "none";
    }
  };

    //submit form
  if (submitBtn) {
    submitBtn.addEventListener("click", function(e) {
      e.preventDefault();
      console.log(
        `L'utilisateur ${firstNameInput.value} ${lastNameInput.value} avec l'adresse mail suivante ${emailInput.value} vous adresse le message suivant : ${messageInput.value}`
      );
      modal.style.display = "none";
    });
  }
}
