function generateTicketID() {
  return "TKT-" + Math.floor(Math.random() * 1000000);
}

function formatDate(date) {
  return date.toISOString().split("T")[0];
}

function displayTicketInfo(name, date, location) {
  document.getElementById("ticket-id").innerText = generateTicketID();
  document.getElementById("person-name").innerText = name;
  document.getElementById("event-date").innerText = date;
  document.getElementById("event-location").innerText = location;

  // ticket expires in 1 week
  const expiryDate = new Date();
  expiryDate.setDate(expiryDate.getDate() + 7);
  document.getElementById("expiry-date").innerText =
    formatDate(expiryDate);
}

const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get('name');

displayTicketInfo(
  name,
  formatDate(new Date()),
  "Safari Zone"
);