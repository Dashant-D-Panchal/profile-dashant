document.addEventListener('DOMContentLoaded', () => {
    // Your code that calls showcart goes here
    showcart();
});

function showcart() {
  let container = document.querySelector(".cart-area");
  container.innerHTML = ""

for (let i = 0; i < localStorage.length; i++) {
  let key = localStorage.key(i);
  if (key.startsWith("card")) {
    let cart = JSON.parse(localStorage.getItem(key)) || [];
    if (cart.length > 0) {
      let item = cart[0];
      let html = `
        <div class="card" id="${item.id}">
          <div class="information">
            <div>
              <span class="catagory">${item.brand}</span>  
            </div>
            <div class="imagecontainer">
              <img class="productimg" src="${item.img}" alt="" />
            </div>
            <h2 class="productname">${item.name}</h2>
            <p class="productprice">₹${item.price * item.quantity}</p>
            <div class="stockelem">
              <button class="cart-minus">-</button>
              <p class="quantitynumb">${item.quantity}</p>
              <button class="cart-plus" onclick="plus(this)">+</button>
            </div>
            <button class="remove-to-cart" onclick="remove(this)">Remove</button>
          </div>
        </div>`;
        // console.log(item);
        
      container.innerHTML += html;
    }
  }
}

}

window.onload = function showcards() {
  let cartlength = localStorage.length;
  document.querySelector(
    ".addtocart"
  ).innerHTML = `<i class="fa-solid fa-cart-shopping"></i> ${cartlength}`;
};

function remove(btn) {
  let card = btn.closest(".card");
  for (i = 0; i <= localStorage.length; i++) {
    let cart = JSON.parse(localStorage.getItem(`card${i}`)) || [];
    let ids = cart.map((item) => item.id === card.id);
    console.log(card.id);
    localStorage.removeItem(card.id)
    window.location.reload();
  }
}

window.onload = function getAllPrices() {
  function getTotalPrice() {
  let total = 0;
  document.querySelectorAll(".card .productprice").forEach((priceElem) => {
    // Remove currency symbol and convert to number
    let price = parseInt(priceElem.textContent.replace("₹", "").trim());
    total += price;
  });
  return total
  
}
console.log(getTotalPrice());
document.querySelector(".productsubtotal").innerHTML = getTotalPrice()
document.querySelector(".producttax").innerHTML = (document.querySelector(".productsubtotal").innerHTML * 18)/100
document.querySelector(".productfinaltotal").innerHTML = `₹${parseInt(document.querySelector(".productsubtotal").innerHTML )+ parseInt(document.querySelector(".producttax").innerHTML)}`
  
}

window.onload = function showcart() {
  let cartlength = localStorage.length;
  document.querySelector(
    ".addtocart"
  ).innerHTML = `<i class="fa-solid fa-cart-shopping"></i> ${cartlength}`;
};