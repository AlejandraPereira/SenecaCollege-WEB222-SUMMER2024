/**
 * WEB222 – Assignment 06
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       <Alejandra Pereira>
 *      Student ID: <139273221>
 *      Date:       <08/16/24>
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { products, categories } = window;

// For debugging, display all of our data in the console
console.log({ products, categories }, "Store Data");

function createProductCard(product) {
  const card = document.createElement("div");
  card.classList.add("card");

  const productImage = document.createElement("img");
  productImage.src = product.URL;
  productImage.classList.add("card-image");
  card.appendChild(productImage);

  const cardContent = document.createElement("div");
  cardContent.classList.add("card-content");
  card.appendChild(cardContent);

  const productTitle = document.createElement("h2");
  productTitle.classList.add("card-title");
  productTitle.textContent = product.title;
  cardContent.appendChild(productTitle);

  const productDescription = document.createElement("p");
  productDescription.classList.add("card-description");
  productDescription.textContent = product.description;
  cardContent.appendChild(productDescription);

  const productPrice = document.createElement("span");
  productPrice.classList.add("card-price");
  productPrice.textContent =
    new Intl.NumberFormat("en-CA", {
      style: "currency",
      currency: "CAD"
    }).format(product.price) + " CAD";
  cardContent.appendChild(productPrice);

  const productStatus = document.createElement("p");
  productStatus.classList.add("card-status");
  productStatus.textContent = product.discontinued ? "Not Available" : "Available";
  if (product.discontinued) {
    productStatus.classList.add("discontinued");
  }
  cardContent.appendChild(productStatus);

  const addToCartButton = document.createElement("button");
  addToCartButton.classList.add("cart-button");
  addToCartButton.textContent = "🛒";
  addToCartButton.addEventListener("click", () => {
    alert(`Added ${product.title} to cart!`);
  });
  cardContent.appendChild(addToCartButton);

  card.addEventListener("click", () => {
    document.querySelectorAll(".card.expanded").forEach((expandedCard) => {
      if (expandedCard !== card) {
        expandedCard.classList.remove("expanded");
      }
    });

    card.classList.toggle("expanded");
  });

  return card;
}

function displayCategoryProducts(categoryId) {
  const productCardsContainer = document.getElementById("product-cards");
  productCardsContainer.innerHTML = "";

  const selectedCategory = categories.find(
    (category) =>
      category.id === categoryId ||
      category.subcategories.find((subcategory) => subcategory.id === categoryId)
  );

  if (selectedCategory) {
    const filteredProducts = products.filter((product) => product.categories.includes(categoryId));

    const selectedCategoryTitle = document.getElementById("selected-category");
    selectedCategoryTitle.textContent = selectedCategory.subcategories
      ? selectedCategory.subcategories.find((subcat) => subcat.id === categoryId).name
      : selectedCategory.name;

    filteredProducts.forEach((product) => {
      const productCard = createProductCard(product);
      productCardsContainer.appendChild(productCard);
    });
  }
}

function initializeMenu() {
  const menuItems = document.querySelectorAll(".btn-group button");
  menuItems.forEach((button) => {
    button.addEventListener("click", () => {
      const categoryId = button.id;
      const selectedCategory = categories.find((category) => category.id === categoryId);

      if (selectedCategory) {
        const menu = button.nextElementSibling;
        menu.innerHTML = "";
        selectedCategory.subcategories.forEach((subcategory) => {
          const item = document.createElement("a");
          item.className = "dropdown-item";
          item.href = "#";
          item.textContent = subcategory.name;
          item.addEventListener("click", () => displayCategoryProducts(subcategory.id));
          menu.appendChild(item);
        });

        displayCategoryProducts(categoryId);
      }
    });
  });
}

function handleDocumentClick(event) {
  const productCardsContainer = document.getElementById("product-cards");
  if (productCardsContainer && !productCardsContainer.contains(event.target)) {
    document.getElementById("selected-category").textContent = "";
  }
}

function handleFormSubmission() {
  const form = document.getElementById("newsletter-form");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const emailInput = form.querySelector('input[type="email"]');
      if (emailInput && emailInput.value.trim() === "") {
        alert("Please enter your email address.");
        return;
      }
      alert("Thank you for being part of Sportify!");
      form.reset();
    });
  }
}

function handleProductRequestForm() {
  const form = document.getElementById("product-request-form");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const formData = new FormData(form);

      fetch("https://httpbin.org/post", {
        method: "POST",
        body: formData
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          alert("Your product request has been submitted!");
          form.reset();
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("There was a problem with your request.");
        });
    });
  }
}

function initialize() {
  initializeMenu();
  document.addEventListener("click", handleDocumentClick);
  handleFormSubmission();
  handleProductRequestForm();
}

document.addEventListener("DOMContentLoaded", initialize);
