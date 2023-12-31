// Retrieve the parameters from the query string
const urlParams = new URLSearchParams(window.location.search);
const image = urlParams.get("image");
const title = urlParams.get("title");
const price = urlParams.get("price");
const oldPrice = urlParams.get("oldPrice");

// Set the values on the page
const productImage = document.getElementById("product-image");
const productTitle = document.getElementById("product-title");
const productPrice = document.getElementById("product-price");
const productOldPrice = document.getElementById("product-old-price");

productImage.src = image;
productTitle.textContent = title;
productPrice.textContent = price;
productOldPrice.textContent = oldPrice;

// Handle form submission
const form = document.getElementById("order-form");
const submitButton = document.getElementById("submit-button");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  submitButton.disabled = true;

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const address = document.getElementById("address").value;
  const payment = document.getElementById("payment").value;

  // Set values on the bill
  document.getElementById("bill-product").textContent = title;
  document.getElementById("bill-price").textContent = price;
  document.getElementById("bill-name").textContent = name;
  document.getElementById("bill-email").textContent = email;
  document.getElementById("bill-address").textContent = address;
  document.getElementById("bill-payment").textContent = payment;

  // Show the bill and hide the form
  document.getElementById("main-content").style.display = "none";
  document.getElementById("bill").style.display = "block";
}); 