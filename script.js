let count = 9;

function updateUI() {
  document.getElementById("count").innerText =
    count + " People Inside";

  let status = document.getElementById("status");
  let suggestion = document.getElementById("suggestion");

  if (count <= 10) {
    status.innerText = "Low";
    status.className = "low";
    suggestion.innerText = "Best time to visit now.";
  } else if (count <= 25) {
    status.innerText = "Moderate";
    status.className = "moderate";
    suggestion.innerText = "Moderate crowd – short wait.";
  } else {
    status.innerText = "High";
    status.className = "high";
    suggestion.innerText = "Crowded now – try later.";
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

function navigate(page) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.querySelectorAll(".bottom-nav button")
    .forEach(b => b.classList.remove("active"));

  document.getElementById(page).classList.add("active");

  const index = ["live","history","smart","location"].indexOf(page);
  document.querySelectorAll(".bottom-nav button")[index]
    .classList.add("active");
}

function changeLocation(loc) {
  document.getElementById("headerText").innerText = loc;
}

updateUI();
