// DOM element
function displayModal() {
  const modal = document.getElementById("background_modal");
  const closeIcon = document.getElementById("close");
  const submitForm = document.getElementById("form-submit_btn");
  const firstNameInput = document.getElementById("firstname");
  const lastNameInput = document.getElementById("lastname");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const btn = document.getElementById("contact_button");
      
   //open the form when click on the button "contact me"
     
  btn.onclick = function () {
    modal.style.display = "block";
    
    }
   

  //close the form when click on the icon X
  closeIcon.onclick = function () {
    modal.style.display = "none";
  };

  //close the form when click anywhere outside
  window.onclick = function (e) {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  };

  //submit form when click on the button "send"

  if (submitForm) {
    submitForm.addEventListener("click", function (e) {
      e.preventDefault();
      console.log(
        `L'utilisateur ${firstNameInput.value} ${lastNameInput.value} avec l'adresse mail suivante ${emailInput.value} vous adresse le message suivant : ${messageInput.value}`
      );
      modal.style.display = "none";
    });
  }
}
