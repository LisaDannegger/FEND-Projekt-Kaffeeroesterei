function toggleMenu(menu) {
  const openMenu = menu.classList.contains("show");

  if (openMenu) {
    menu.classList.remove("show");
  } else {
    menu.classList.add("show");
  }
}

function navigation() {
  const menuButton = document.getElementById("nav-closed");
  const menu = document.querySelector(".mobile-navigation");
  // const burgerButton = document.getElementById("nav-open");

  menuButton.addEventListener("click", () => toggleMenu(menu));
}

export default navigation;

// const hamburger = {
//     const navToggle = document.querySelector('.nav-closed'),
//     const mobileMenu = document.querySelector('mobile-navigation'),

//     function navigation() {
//       e.preventDefault();
//       navToggle.classList.toggle('expanded');
//       nav.classList.toggle('expanded');
//     }
//   };

//   hamburger.navToggle.addEventListener('click', function(e) { hamburger.doToggle(e); });
//   hamburger.nav.addEventListener('click', function(e) { hamburger.doToggle(e); });

// }());

// window.addEventListener("load", function () {
//   let steuerungselement = document.getElementById("main-nav");
//   let abstandvonoben = steuerungselement.offsetTop;

//   function scrollueberwachung() {
//     let aktuelleYposition = window.pageYOffset;
//     if (aktuelleYposition >= abstandvonoben) {
//       steuerungselement.classList.add("festkleben");

//       let navItems = document.getElementsByClassName("navitem_white");
//       navItems.style.color = "#000";
//     } else {
//       steuerungselement.classList.remove("festkleben");
//     }
//     document.getElementById("ylage").innerHTML =
//       abstandvonoben + " / " + aktuelleYposition;
//   }
//   window.addEventListener("scroll", scrollueberwachung);
// });
