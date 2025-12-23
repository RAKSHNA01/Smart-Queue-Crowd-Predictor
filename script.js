let count = 24;

function updateUI() {
  document.getElementById("count").innerText =
    count + " People Inside";

  let status = document.getElementById("status");

  if (count <= 10) {
    status.innerText = "Low";
    status.className = "low";
  } else if (count <= 25) {
    status.innerText = "Moderate";
    status.className = "moderate";
  } else {
    status.innerText = "High";
    status.className = "high";
  }
}

function checkIn() {
  count++;
  updateUI();
}

function checkOut() {
  if (count > 0) count--;
  updateUI();
}

updateUI();
