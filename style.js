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

// Function to update the CVC display on the card
function updateCvcDisplay() {
  var cvcInput = document.getElementById("cvc").value;
  var cvcDisplay = document.querySelector(".cvc-display");
  cvcDisplay.textContent = cvcInput || "000";
}

// Function to set up event listeners for CVC input
function setupCvcEventListener() {
  var cvcInput = document.getElementById("cvc");
  cvcInput.addEventListener("input", updateCvcDisplay);
}

// Calling the function to set up event listeners after the page is loaded
window.addEventListener("load", function() {
  setupCvcEventListener();
});


// Function to show the thank you message
function showThankYouMessage() {
  var thankYouMessage = document.getElementById("thank-you");
  thankYouMessage.classList.remove("hidden");
}

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault();
  showThankYouMessage();
}

// Function to set up event listener for form submission
function setupFormSubmitEventListener() {
  var submitButton = document.getElementById("submit");
  submitButton.addEventListener("click", handleSubmit);
}

// Calling the function to set up event listener for form submission after the page is loaded
window.addEventListener("load", function() {
  setupFormSubmitEventListener();
});
