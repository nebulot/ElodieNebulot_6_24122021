// DOM element
async function displayModal() {
  const modal = document.getElementById("contact_modal");
  const btn = document.querySelector(".contact_button");
  const closeBtn = document.getElementsByClassName(".close");
  const firstNameInput = document.getElementById("firstname");
  const lastNameInput = document.getElementById("lastname");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const submitBtn = document.getElementById("form-submit_btn");

  //open the form when the user click on the button "contact me"
  btn.onclick = function () {
    modal.style.display = "block";
  };

  //close the form when the user click on the button "X"
  closeBtn.onclick = function () {
    modal.style.display = "none";
  };

  //close the form if the user click on an other part of the window

  window.onclick = function (e) {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  };

  document.addEventListener("keydown", function (e) {
    let keyCode = e.key;
    if (keyCode === "Escape") {
      modal.style.display = "none";
    }
  });

  //submit form with insputs values
  if (submitBtn) {
    submitBtn.addEventListener("click", function (e) {
      e.preventDefault();
      console.log(
        `L'utilisateur ${firstNameInput.value} ${lastNameInput.value} avec l'adresse mail suivante ${emailInput.value} vous adresse le message suivant : ${messageInput.value}`
      );
      modal.style.display = "none";
    });
  }
}
