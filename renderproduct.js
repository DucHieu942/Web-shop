

var productsApi = "./TestData/DataProducts.json"
// var productsApi = " http://localhost:3000/products"

function start() {
  getProducts(renderProducts,productsApi);


}

start();

/* function */
function getProducts(callback,url) {

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(callback);
}

function renderProducts(products) {
  var listProductsBlock = document.querySelector(".products-list");

  //  console.log(products);
  var html = products.map(function (product) {
    return `
      <div class="grid__column-2-4">
        <div class="home-product-item" >
          <div class="home-product-item__image">
            <img src="${product.img}" width="190" height="190" alt="">
          </div>
          <h4 class="home-product-name" >${product.name}</h4>
          <div>
            <span class="home-product-item__price">${product.price}</span>
          </div>
          <div class="home-product-item__action">
            <button onclick="addtobag(${product.id})" class="home-product-item__buy"> + ADD TO BAG</button>
            <div class="home-product-item__rating">
              <i class="star-gold fas fa-star"></i>
              <i class="star-gold fas fa-star"></i>
              <i class="star-gold fas fa-star"></i>
              <i class="star-gold fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
          </div>
        </div>
      </div>
      `;
  });
  listProductsBlock.innerHTML = html.join("");
}
