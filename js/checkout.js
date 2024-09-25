const form = document.querySelector("#checkout-form");

function displayError(elementId, message) {
  const errorElement = document.getElementById(elementId);
  errorElement.textContent = message;
}

function clearErrors() {
  const errorElements = document.querySelectorAll(".text-danger");
  errorElements.forEach(function (el) {
    el.textContent = "";
  });
}

function generateTicketID() {
  return Math.floor(Math.random() * 1000000);
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  clearErrors();

  const fullName = document.getElementById("fname").value;
  const email = document.getElementById("email").value;
  const address = document.getElementById("adr").value;
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;
  const zip = document.getElementById("zip").value;
  const numberOfGuests = document.getElementById("guests").value;
  const cardName = document.getElementById("cname").value;
  const cardNumber = document.getElementById("ccnum").value;
  const expMonth = document.getElementById("expmonth").value;
  const expYear = document.getElementById("expyear").value;
  const cvv = document.getElementById("cvv").value;

  let hasError = false;

  if (!fullName) {
    displayError("fname-error", "Full Name is required.");
    hasError = true;
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailPattern.test(email)) {
    displayError("email-error", "Please enter a valid email address.");
    hasError = true;
  }
  if (!address) {
    displayError("adr-error", "Address is required.");
    hasError = true;
  }
  if (!city) {
    displayError("city-error", "City is required.");
    hasError = true;
  }
  if (!state) {
    displayError("state-error", "State is required.");
    hasError = true;
  }
  if (!zip) {
    displayError("zip-error", "Zip code is required.");
    hasError = true;
  }
  if (!numberOfGuests || isNaN(numberOfGuests) || numberOfGuests <= 0) {
    displayError("guests-error", "Please enter a valid number of guests.");
    hasError = true;
  }
  if (!cardName) {
    displayError("cname-error", "Name on Card is required.");
    hasError = true;
  }
  const cardPattern = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
  if (!cardNumber || !cardPattern.test(cardNumber)) {
    displayError("ccnum-error", "Please enter a valid credit card number in the format: 1111-2222-3333-4444.");
    hasError = true;
  }
  if (!expMonth) {
    displayError("expmonth-error", "Expiration month is required.");
    hasError = true;
  }
  if (!expYear) {
    displayError("expyear-error", "Expiration year is required.");
    hasError = true;
  }
  if (!cvv) {
    displayError("cvv-error", "CVV is required.");
    hasError = true;
  }

  if (hasError) {
    return;
  }

  const ticketID = generateTicketID();

  const formData = {
    name: fullName,
    number_of_guests: numberOfGuests,
    registered_at: new Date(),
  };

  localStorage.setItem(`tid_${ticketID}`, JSON.stringify(formData));

  // redirect to ticket page with ticket ID
  window.location.href = `ticket.html?tid=${ticketID}`;
});