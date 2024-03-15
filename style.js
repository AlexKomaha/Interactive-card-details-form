// Function to update the display of the cardholder name on the card
function updateCardholderName() {
  var inputName = document.getElementById("cardholder-name").value;
  var cardHolderDisplay = document.querySelector(".card-holder-display");
  cardHolderDisplay.textContent = inputName || "Your Name";
}

// Function to set up event listeners
function setupEventListeners() {
  var cardholderNameInput = document.getElementById("cardholder-name");
  cardholderNameInput.addEventListener("input", updateCardholderName);
}

// Calling the function to set up event listeners after the page is loaded
window.addEventListener("load", function() {
  setupEventListeners();
});

function formatCardNumber(event) {
  var cardNumberInput = event.target;
  var formattedValue = cardNumberInput.value.replace(/\D/g, "").replace(/(.{4})/g, "$1 ");
  cardNumberInput.value = formattedValue.trim();
  updateCardNumberDisplay(formattedValue.trim());
}

function updateCardNumberDisplay(value) {
  var cardNumberDisplay = document.querySelector(".card-number-display");
  cardNumberDisplay.textContent = value || "0000 0000 0000 0000";
}
