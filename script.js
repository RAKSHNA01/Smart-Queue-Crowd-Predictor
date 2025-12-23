let count = 9;

function checkIn() {
    count++;
    alert("Checked In!");
}

function checkOut() {
    if (count > 0) count--;
    alert("Checked Out!");
}
