document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("#payment-form form");
  
  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const fullName = document.getElementById("fname").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("adr").value;
    const city = document.getElementById("city").value;
    const state = document.getElementById("state").value;
    const zip = document.getElementById("zip").value;
    const cardName = document.getElementById("cname").value;
    const cardNumber = document.getElementById("ccnum").value;
    const expMonth = document.getElementById("expmonth").value;
    const expYear = document.getElementById("expyear").value;
    const cvv = document.getElementById("cvv").value;

    if (!fullName || !email || !address || !city || !state || !zip || !cardName || !cardNumber || !expMonth || !expYear || !cvv) {
      alert("Please fill out all fields.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const cardPattern = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
    if (!cardPattern.test(cardNumber)) {
      alert("Please enter a valid credit card number in the format: 1111-2222-3333-4444");
      return;
    }

    window.location.href = `ticket.html?name=${fullName}`;
  });
});