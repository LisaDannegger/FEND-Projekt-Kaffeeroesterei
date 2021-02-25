import products from "./products.json";

function handleCartButtonClick(event) {
  const productId = parseInt(this.dataset.productId, 10);
  const chosenProduct3 = products.find(function (product) {
    if (product.id === productId) {
      return true;
    }
    return false;
  });

  const chosenProduct = products.find((product) => {
    if (product.id === productId) {
      return true;
    }
    return false;
  });

  const chosenProduct2 = products.find((product) => product.id === productId);

  const currentCart = JSON.parse(localStorage.getItem("cart"));

  console.log(currentCart);

  if (currentCart !== null) {
    const updatedCart = [...currentCart, chosenProduct];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  } else {
    localStorage.setItem("cart", JSON.stringify([chosenProduct]));
  }
}

function shopDetail() {
  const productContainer = document.querySelector(
    ".main__kaffeesorten--flexbox-shop"
  );
  const productTemplate = `
     ${products
       .map(
         (product) => `
          <section class="main__kaffeesorten--flexitems">
          <div>
             <img src="../Images/${product.image["img"]}" alt="${
           product.image["alt"]
         }" class="main__kaffeesorten--costarica-img"/>
          </div>
  
          <div class="main__kaffeesorten-beschreibung--item">
            <div>
              <h3>
                <span class="main__kaffeesorten-beschreibung--main">${
                  product.productName
                }</span>
                <span class="main__kaffeesorten-beschreibung--sub">${
                  product.price / 100
                }€</span>
              </h3>
            </div>
            <p class="main__kaffeesorten-beschreibung">${
              product.description
            }</p>
            <div>
                <img src="../Images/${
                  product.sym1["sym"]
                }" class="shop-svg" alt="${product.sym1["alt"]}">
                <img src="../Images/${
                  product.sym2["sym"]
                }" class="shop-svg" alt="${product.sym2["alt"]}">
                <img src="../Images/${
                  product.sym3["sym"]
                }" class="shop-svg" alt="${product.sym3["alt"]}">
           </div>
          </section>
     `
       )
       .join("")} 
    `;

  productContainer.innerHTML = productTemplate;

  const addToCartButtons = document.querySelectorAll(".add-to-cart-button");

  addToCartButtons.forEach((cartButton) =>
    cartButton.addEventListener("click", handleCartButtonClick)
  );
}

export default shopDetail;
