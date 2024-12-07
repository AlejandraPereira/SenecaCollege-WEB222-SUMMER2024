/**
 * WEB222 – Assignment 04
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
 *      Date:       <19-07-2024>
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { products, categories } = window;

// For debugging, display all of our data in the console
console.log({ products, categories }, "Store Data");

document.addEventListener("DOMContentLoaded", init);

function init() {
  createCategoryButtons();
  // Initialize with an empty product list
  clearProductList();

  // Add event listener for clicks outside the table to clear the product list
  document.addEventListener("click", handleDocumentClick);
}

function createCategoryButtons() {
  const categoryHeaders = document.getElementById("category-headers");

  window.categories.forEach((category) => {
    const button = document.createElement("button");
    button.textContent = category.name;
    button.addEventListener("click", (event) => {
      event.stopPropagation(); // Prevent event from bubbling up to the document
      showProducts(category.id);
    });
    const th = document.createElement("th");
    th.appendChild(button);
    categoryHeaders.appendChild(th);
  });
}

function showProducts(categoryId) {
  const selectedCategory = window.categories.find((category) => category.id === categoryId);
  const selectedCategoryTitle = document.getElementById("selected-category");
  selectedCategoryTitle.textContent = selectedCategory ? selectedCategory.name : "";

  const productTableBody = document.getElementById("category-products");
  productTableBody.innerHTML = ""; // Clear the current content

  const filteredProducts = window.products.filter((product) =>
    product.categories.includes(categoryId)
  );

  filteredProducts.forEach((product) => {
    const tr = document.createElement("tr");

    tr.addEventListener("click", (event) => {
      event.stopPropagation(); // Prevent event from bubbling up to the document
      console.log(product);
    });

    const tdTitle = document.createElement("td");
    tdTitle.textContent = product.title;
    tr.appendChild(tdTitle);

    const tdDescription = document.createElement("td");
    tdDescription.textContent = product.description;
    tr.appendChild(tdDescription);

    const tdPrice = document.createElement("td");
    const priceInDollars = (product.price / 100).toFixed(2);
    tdPrice.textContent = new Intl.NumberFormat("en-CA", {
      style: "currency",
      currency: "CAD"
    }).format(priceInDollars);
    tr.appendChild(tdPrice);

    const tdStatus = document.createElement("td");
    tdStatus.textContent = product.discontinued ? "Not Available" : "Available";
    if (product.discontinued) {
      tdStatus.classList.add("discontinued");
    }
    tr.appendChild(tdStatus);

    productTableBody.appendChild(tr);
  });
}

function clearProductList() {
  const productTableBody = document.getElementById("category-products");
  productTableBody.innerHTML = ""; // Ensure the list is empty
}

function handleDocumentClick(event) {
  const productTable = document.querySelector("table");
  if (!productTable.contains(event.target)) {
    clearProductList();
    document.getElementById("selected-category").textContent = "";
  }
}
