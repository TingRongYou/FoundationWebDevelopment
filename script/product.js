function updateQuantity(button, change) {
    // Find the parent product card
    var productCard = button.closest('.product-card');
  
    // Find the quantity element within the product card
    var quantityElement = productCard.querySelector('.quantity');
  
    // Find the price elements within the product card
    var priceBeforeElement = productCard.querySelector('.price-before');
    var priceAfterElement = productCard.querySelector('.price-after');
  
    // Get the current quantity value
    var currentQuantity = parseInt(quantityElement.textContent);
  
    // Update the quantity value
    var newQuantity = currentQuantity + change;
  
    // Ensure the quantity is not less than 1
    newQuantity = Math.max(1, newQuantity);
  
    // Update the quantity element
    quantityElement.textContent = newQuantity;
  
    // Update the prices based on the quantity
    var unitPrice = parseFloat(priceAfterElement.dataset.unitPrice);
    var totalPrice = unitPrice * newQuantity;
    priceAfterElement.textContent = 'RM' + totalPrice.toFixed(2);
  
    // Update the original price based on the quantity
    var originalUnitPrice = parseFloat(priceBeforeElement.getAttribute('data-unit-price'));
    var totalOriginalPrice = originalUnitPrice * newQuantity;
    priceBeforeElement.textContent = 'RM' + totalOriginalPrice.toFixed(2);
  
    // Log the changes to the console for debugging
    console.log('Change:', change);
    console.log('New Quantity:', newQuantity);
    console.log('Total Price:', totalPrice.toFixed(2));
    console.log('Total Original Price:', totalOriginalPrice.toFixed(2));
  }