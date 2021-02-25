function toggleMenu(menu) {
  const isMenuOpen = menu.classList.contains("show");

  if (isMenuOpen) {
    menu.classList.remove("show");
    //remove show class
  } else {
    menu.classList.add("show");
    //else add show class
  }
}

function navigation() {
  const menuButton = document.getElementById("nav-closed");
  const menu = document.querySelector(".mobile-navigation");

  menuButton.addEventListener("click", () => toggleMenu(menu));
}

export default navigation;

//ScrollEvent
// window.addEventListener("load", function() {
//     let steuerungselement = document.getElementById("main-nav");
//     let abstandvonoben = steuerungselement.offsetTop;

//     function scrollueberwachung() {
//       let aktuelleYposition = window.pageYOffset;
//       if (aktuelleYposition >= abstandvonoben) {
//           steuerungselement.classList.add("festkleben")

//           let navItems = document.getElementsByClassName("navitem_white");
//           navItems.style.color = "#000";

//       } else {
//           steuerungselement.classList.remove("festkleben");
//       }
//       document.getElementById('ylage').innerHTML = abstandvonoben + " / " + aktuelleYposition;
//     }
//     window.addEventListener("scroll", scrollueberwachung);
//     });
