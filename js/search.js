document.getElementById("search-form").addEventListener("submit", function(event) {
  event.preventDefault();
  var searchQuery = document.getElementById("searchInput").value.trim().toLowerCase();
  searchProducts(searchQuery);
});

function searchProducts(query) {
  var products = document.querySelectorAll(".pro-1"); 
  products.forEach(function(product) {
      var productName = product.querySelector(".women h6").textContent.toLowerCase(); 
      if (productName.includes(query)) {
          product.style.display = "block";
      } else {
          product.style.display = "none";
      }
  });
}

