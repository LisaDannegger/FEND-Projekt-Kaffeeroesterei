
// let myForm = document.getElementById("contact-form");
// let userName = document.getElementById("input-username");
// myForm.addEventListener('submit', function (event) {
//     let error = false;

//     if(error)   {
//         event.preventDefault();
//         userName.focus();
//         return false;

//     }
// });

//Jedes Feld überprüfen: Was ins Feld eingegeben wird, wird über den value bestimmt. Stimmt der Value
//mit der Eingabe des Users nicht überein mach das (färbe den Background rot, gib eine Fehlermeldung aus). 
//Wenn er übereinstimmt, färbe den Background grün, springe ins nächste Feld.

// const form = document.getElementById("contact-form");

// for (const i = 0; i < form.clientHeight; i++)   {
//     form[i].addEventListener('invalid', function(e) {
//         e.preventDefault();
//     }, true);
// }





// function validation()   {

//     var userName = document.getElementById("input-username");
//     var userMail = document.getElementById("input-usermail");


//     if (userName.value == "")    {
//         userName.style.backgroundColor = rgb(255, 0, 0);
//     }

//     if(userMail.value == "")    {
//         userName.style.backgroundColor = rgb(255, 0, 0);
    
    
//     } else {
//         //Hintergrund-Farbe grün
//     }
// }

// validation();

const contactForm = document.querySelector("form");


//Leere Felder prüfen
function validateForm()  {
    const nameInput = document.getElementById("userName");
    const emailInput = document.getElementById("userEmail");
    const checkbox = document.getElementById("checkbox");

    if(nameInput.value == "") {
        alert("Please enter your Username");
        return false;
    }
    if(emailInput.value == "") {
        alert("Please enter you Email");
        return false;
    }

    if(emailInput.contains("@") === false)  {
        alert("Please enter a valid Emailadress");
    }

    if(checkbox.checked === false)  {
        alert("Please acceept the Privacy Link");
    }

    alert("All datas are valid!, send it to the server!")

    return true;
}


document.getElementById('contact-form').addEventListener ("submit", function (evt) {
    // Eingaben nicht korrekt
    evt.preventDefault("FehlendeEingabe");
    //
});


export default validateForm;




