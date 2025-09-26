function createcard(id, brand, img, name, price, stock, description) {
  let html = `<div class="card" id="card${id}">
        <span class="catagory">${brand}</span>
            <div class="imagecontainer">
              <img class="productimg" src="${img}" alt="" />
            </div>
            <h2 class="productname">${name}</h2>
            <div class="productrating">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <p class="productdescription">${description}</p>
            <div class="priceelme">
              <p class="productprice">₹${price}</p>
              <p class="productactualprice">₹${price * 3}</p>
            </div>
        <div class="stockelme">
          <p class="consttext">Total Stock Available:</p>
          <p class="stockquantity">${stock}</p>
        </div>
        <div class="quantityeleme">
          <p class="property">Quantity</p>
          <div class="stockelem">
            <button class="cart-minus" onclick="minus(this)">-</button>
              <p class="quantitynumb">1</p>
            <button class="cart-plus" onclick="plus(this)">+</button>
          </div>
        </div>
        <div class="order">
          <button class="add-to-cart" onclick="btn()">
            <i class="fa-solid fa-cart-shopping"></i> Add to Cart
          </button>
          <button class="buy-now" onclick="remove(this)">BUY NOW</button>
        </div>
      </div>`;

  return (document.querySelector(".card-area").innerHTML += html);
}

// createcard(
//   "1",
//   "Fire Bolt",
//   "https://m.media-amazon.com/images/I/71ITK-PG7CL._SX679_.jpg",
//   "Watch",
//   "1050",
//   "50",
//   "Fire-Boltt Brillia Pro Smart Watch with 51.3mm (2.02 inch) AMOLED Display, Bluetooth Calling, SpO2, Heart Rate Monitoring, 120+ Sports Modes, IP67 Waterproof, Long Battery Life (Silver Chain)"
// );
createcard (
         "1",
        "acer",
        "laptop2.jpg",
        "laptop",
        40000,
        50,
        "Acer Aspire 3 Laptop Intel Core Celeron N4500 Processor Laptop (8 GB LPDDR4X SDRAM/256 GB SSD/Win11 Home/38 WHR/HD Webcam) A324-45 with 35.56 cm 14 inch HD Display, Pure Silver, 1.3 KG",
        "laptop2.jpg"
);
    createcard(
         "2",
         "fire bolt",
         "https://m.media-amazon.com/images/I/71ITK-PG7CL._SX679_.jpg",
         "watch",
         1050,
         150,
         "Fire-Boltt Brillia Pro Smart Watch with 51.3mm (2.02 inch) AMOLED Display, Bluetooth Calling, SpO2, Heart Rate Monitoring, 120+ Sports Modes, IP67 Waterproof, Long Battery Life (Silver Chain)",
    );
    createcard(
         "3",
          "motorola",
         "https://m.media-amazon.com/images/I/315tYFCbYGL._SX300_SY300_QL70_FMwebp_.jpg",
         "mobile",
         49999,
         25,
         "Motorola razr 60 Ultra (Pantone Mountain Trail, 16 GB RAM, 512 GB Storage) | Moto AI | Snapdragon® 8 Elite Mobile Platform | 6.9 inch AMOLED 165Hz Display | 50 MP + 50 MP + 50MP Triple Camera",
    );
    createcard(
         "4",
         "adro",
         "https://m.media-amazon.com/images/I/71gK2Yn3R5L._SY879_.jpg",
         "t-shirt",
         499,
         200,
         "ADRO Tshirt for Men | Printed T Shirt for Men | 100% Cotton Regular Fit T-Shirt |Printed T Shirt",
    );
    createcard(
         "5",
         "GoSriKi",
         "https://m.media-amazon.com/images/I/61q5CWbukpL._SX679_.jpg",
         "women-kurti",
         699,
         40,
         "GoSriKi Women's Beautiful Rayon Viscose Anarkali Printed Kurta with Palazzo & Dupatta",
    );
    createcard(
         "6",
         "ALOXE",
         "https://m.media-amazon.com/images/I/61WejkoEgJL._SX679_.jpg",
         "cosmetics box",
         199,
         39,
         "ALOXE Cosmetic Organizer Box Drawers Storage Plastic Stationary Box | Make Up Organiser for Women",
    );
    createcard(
         "7",
          "	pTron",
          "https://m.media-amazon.com/images/I/51ZX74-s9DL._SX679_.jpg",
         "headphones",
         799,
         20,
         "pTron Studio Evo 70hrs Playtime Wireless Over-Ear Headphones with HD Mic, Low-Latency Game /Movie /Music Modes, Voice Assistant & Type-C Fast Charging (Black)",
    );
    createcard(
         "8",
         "echo",
         "https://m.media-amazon.com/images/I/5108OEjU5+L._SY300_SX300_.jpg",
         "amazon",
         5000,
         70,
         "Certified Refurbished Echo Dot (5th Gen) | Smart speaker with Bigger sound, Motion Detection, Temperature Sensor, Alexa and Bluetooth| Black",
    );
    createcard(
         "9",
         " Jacket",
         "https://m.media-amazon.com/images/I/71oM93QkFkL._SX679_.jpg",
         "rynox",
         5950,
         70,
         "Rynox Downtown Pro Jacket - Motorcycle Riding Jacket | Abrasion Resistance |Super Ventilated Shell | Urban Comfort Fit - Mid Night Black, Medium",
         
  );

function btn() {
  document.querySelector(".card-area").addEventListener("click", (e) => {
    let card = e.target.closest(".card");
    if (card) {
      console.log("Card ID clicked:", card.id);
    }
  });
}

// Function to add product to localStorage
// Function to add product to localStorage
function addToCart(product, card) {
  let cardId = product.id;

  // Get existing data from localStorage for this card (if any)
  let cart = JSON.parse(localStorage.getItem(cardId)) || [];

  // Get the quantity shown on the card (scoped to this card only)
  let qtyElem = card.querySelector(".quantitynumb");
  let addQty = qtyElem ? parseInt(qtyElem.innerText) : 1;

  // Check if product already exists in this card's storage
  let existing = cart.find((item) => item.id === product.id);
  if (existing) {
    existing.quantity += addQty; // Increase by shown number
  } else {
    product.quantity = addQty; // Start with shown number
    cart.push(product);
  }

  // Save updated cart to localStorage with cardId as key
  localStorage.setItem(cardId, JSON.stringify(cart));

  console.log(`Cart Updated for ${cardId}:`, cart);
}


// Event delegation for all Add to Cart buttons
document.querySelector(".card-area").addEventListener("click", (e) => {
  if (e.target.closest(".add-to-cart")) {
    let card = e.target.closest(".card");

    // Collect card details
    let product = {
      id: card.id,
      brand: card.querySelector(".catagory").textContent,
      name: card.querySelector(".productname").textContent,
      price: parseInt(
        card.querySelector(".productprice").textContent.replace("₹", "")
      ),
      stock: card.querySelector(".stockquantity").textContent,
      img: card.querySelector(".productimg").src,
      description: card.querySelector(".productdescription").textContent,
    };

    // Pass both product + card
    addToCart(product, card);
    window.location.reload()
  }
});


window.onload = function showcart() {
  let cartlength = localStorage.length;
  document.querySelector(
    ".addtocart"
  ).innerHTML = `<i class="fa-solid fa-cart-shopping"></i> ${cartlength}`;
};

function plus(btn) {
  let card = btn.closest(".card");
  let stock = card.querySelector(".stockquantity").innerText;
  let num = card.querySelector(".quantitynumb");
  if (parseInt(num.innerText) < parseInt(stock)) {
    num.innerText = parseInt(num.innerText) + 1;
  }
}

function minus(btn) {
  let card = btn.closest(".card");
  let num = card.querySelector(".quantitynumb");
  if (parseInt(num.innerText) > 1) {
    num.innerText = parseInt(num.innerText) - 1;
  }
}

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
