let count = 9;

function updateUI() {
  document.getElementById("count").innerText =
    count + " People Inside";

  let status = document.getElementById("status");
  let suggestion = document.getElementById("suggestion");

  if (count <= 10) {
    status.innerText = "Low";
    status.className = "low";
    suggestion.innerText = "Best time to visit now – minimal waiting.";
  } else if (count <= 25) {
    status.innerText = "Moderate";
    status.className = "moderate";
    suggestion.innerText = "Moderate crowd – short waiting time.";
  } else {
    status.innerText = "High";
    status.className = "high";
    suggestion.innerText = "High crowd – try after peak hours.";
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

function showTab(tab) {
  document.querySelectorAll(".tab").forEach(t => t.classList.add("hidden"));
  document.getElementById(tab).classList.remove("hidden");
}

function changeLocation(loc) {
  document.getElementById("location").innerText = loc + " – Live Status";
}

updateUI();
