// DOM element
function displayModal() {
  const modal = document.getElementById("background_modal");
  const closeIcon = document.getElementById("close");
  const submitForm = document.getElementById("form-submit_btn");
  const btn = document.getElementById("contact_button");
  
  

  //open the form when click on the button "contact me"

  btn.onclick = () => {
    modal.style.display = "block";
    
  };

  //close the form when click on the icon X
  closeIcon.focus();
  closeIcon.onclick = () => {
    modal.style.display = "none";
  };
  closeIcon.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      closeDisplayModal(e);
    }
  });

  function closeDisplayModal(e) {
    e.preventDefault();
    let mainContent = document.getElementByClass("main");
    const modal = document.getElementById("background_modal");
    mainContent.setAttribute("aria-hidden", "true");
    modal.classList.remove("back_modal");
    modal.innerHTML = "";
  }

  //close the form when click anywhere outside
  window.onclick =  (e) => {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  };

  //submit form when click on the button "send"

  if (submitForm) {
    submitForm.addEventListener("click", (e) => {
      e.preventDefault();
      const modal = document.getElementById("background_modal");
      const firstNameInput = document.getElementById("firstname").value;
      const lastNameInput = document.getElementById("lastname").value;
      const emailInput = document.getElementById("email").value;
      const messageInput = document.getElementById("message").value;
      console.log(
        "Prénom: " + firstNameInput,
        ", Nom: " + lastNameInput,
        ", Email: " + emailInput,
        ", Message: " + messageInput
      );

      modal.classList.remove("back_modal");
      modal.innerHTML = "";
    });
  }
}
