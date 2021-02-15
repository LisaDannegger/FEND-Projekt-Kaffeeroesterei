
"use strict"
// import myFunction, { multiply } from "./myModule";

// myFunction();

// const result = multiply(2, 5);

// console.log(result);


// const submitButton = document.getElementById("submit-button");
// console.dir(submitButton)

document.getElementById('contact-form').addEventListener ("submit", function (evt) {
    	// Eingaben nicht korrekt
    	evt.preventDefault("FehlendeEingabe");
    	//
});

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



// const submitButton = document.getElementById("submit-button");
// console.dir(submitButton);

// submitButton.addEventListener("click", () => {
//     alert("Button wurde geklickt");
// })


//Navigation
window.addEventListener("load", function() {
    let steuerungselement = document.getElementById("main-nav");
    let abstandvonoben = steuerungselement.offsetTop;
    
    function scrollueberwachung() {
      let aktuelleYposition = window.pageYOffset;
      if (aktuelleYposition >= abstandvonoben) {
          steuerungselement.classList.add("festkleben")

          let navItems = document.getElementsByClassName("navitem_white");
          navItems.style.color = "#000";

      } else {
          steuerungselement.classList.remove("festkleben");
      }
      document.getElementById('ylage').innerHTML = abstandvonoben + " / " + aktuelleYposition;
    }	
    window.addEventListener("scroll", scrollueberwachung);
    });