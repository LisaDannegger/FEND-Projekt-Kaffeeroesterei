import products from "./products.json";
import productImages from "../Images/*.jpg";

function fillTemplate(product) {
  return `
    <img class="main__kaffeesorten--costarica-img" 
    src="${productImages[product.image["img"]]}" 
    alt="Eine Packung unseres Kaffees ${product.productName}">
  `;
}


function shop() {
  const productContainer = document.querySelector(
    ".main__kaffeesorten--flexbox-shop"
  );

  const productTemplate = `
   ${products //Product.json-Inhalt
     .map(
       (product) => `
        
      <section class="main__kaffeesorten--flexitems-shop">

        <div class="main__kaffeesorten--costarica-shop">

           <img src="${
             productImages[product.image["img"]]
           }" alt="Eine Packung unseres Kaffees ${product.image["alt"]}">
       }" class="main__kaffeesorten--costarica-img-shop"/>
       
        </div>

        <div class="main__kaffeesorten-beschreibung--item">
          <div>
            <h3 class="main__kaffeesorten-beschreibung">
              <span class="main__kaffeesorten-beschreibung--main">${
                product.productName
              }</span>
              <span class="main__kaffeesorten-beschreibung--sub">${
                product.price / 100
              }€</span>
            </h3>
          </div>
         
          <div class=".main__produktvorstellung--icon-container">

              <img src="${
                productImages[product.sym1["sym"]]
              }" class="shop-svg" alt="${product.sym1["alt"]}">

              <img src="${
                productImages[product.sym1["sym"]]
              }" class="shop-svg" alt="${product.sym1["alt"]}">

              <img src="${
                productImages[product.sym1["sym"]]
              }" class="shop-svg" alt="${product.sym1["alt"]}">

         </div>
        </section>
   `
     )
     .join("")} 
  `;

  //Warenkorb
  productContainer.innerHTML = productTemplate;

  const addToCartButtons = document.querySelectorAll(".add-to-cart-button");

  addToCartButtons.forEach((cartButton) =>
    cartButton.addEventListener("click", handleCartButtonClick)
  );
}

export default shop;