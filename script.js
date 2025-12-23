let count = 9;

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

function updateLevel() {
    let level = document.getElementById("level");
    let text = "LOW";

    if (count > 15) text = "HIGH";
    else if (count > 10) text = "MEDIUM";

    level.textContent = text;
    level.className = text.toLowerCase();
    document.getElementById("count").textContent = count;
}

function checkIn() {
    count++;
    updateLevel();
}

function checkOut() {
    if (count > 0) count--;
    updateLevel();
}

/* Chart */
const ctx = document.getElementById('chart');
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['10AM','11AM','12PM','1PM','2PM','3PM'],
        datasets: [{
            label: 'Crowd Count',
            data: [5, 10, 20, 25, 15, 8],
            borderWidth: 2
        }]
    }
});
