function formatDate(date) {
  console.log(date);
  return date.toISOString().split("T")[0];
}

function displayTicketInfo(ticketData) {
  document.getElementById("ticket-id").innerText = ticketData.ticketID;
  document.getElementById("person-name").innerText = ticketData.name;
  document.getElementById("number-of-guests").innerText = ticketData.number_of_guests;
  
  document.getElementById("event-date").innerText = formatDate(ticketData.registered_at);
  document.getElementById("event-location").innerText = ticketData.eventLocation;

  // ticket expires in 1 week
  let expiryDate = new Date(ticketData.registered_at);
  expiryDate.setDate(expiryDate.getDate() + 7);
  document.getElementById("expiry-date").innerText = formatDate(expiryDate);
}

// Get the 'tid' from the URL
const urlParams = new URLSearchParams(window.location.search);
const ticketID = urlParams.get('tid');

const ticketData = JSON.parse(localStorage.getItem(`tid_${ticketID}`));

if (ticketData) {
  ticketData.ticketID = ticketID;
  ticketData.registered_at = new Date(ticketData.registered_at); // Ensure it's a Date object
  ticketData.eventLocation = "Safari Zone";

  displayTicketInfo(ticketData);
} else {
  document.getElementById("ticket").classList.add("d-none");
  document.getElementById("ticket-error").classList.remove("d-none");
}
