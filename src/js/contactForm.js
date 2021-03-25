const contactForm = document.getElementById("contact-form");

function validateForm() {
  const nameInput = document.getElementById("userName");
  const emailInput = document.getElementById("userEmail");
  const checkbox = document.getElementById("checkbox");

  if (nameInput.value === "") {
    nameInput.classList.add("invalid");
    console.log("läuft");
    return false;
  }
  if (emailInput.value === "") {
    emailInput.classList.add("invalid");
    console.log("Jo");
    return false;
  }

  if (emailInput.contains("@") === false) {
    emailInput.classList.add("invalid");
    return false;
  }

  if (checkbox.checked === false) {
    alert("Please acceept the Privacy Link");
    return false;
  }
  return true;
}

contactForm.addEventListener("submit", function (evt) {
  evt.preventDefault("FehlendeEingabe");
});

export default validateForm;
