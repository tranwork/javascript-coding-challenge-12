// Task 1: Business Dashboard – DOM Element Selection and Creation

// Select the dashboard container
const dashboard = document.getElementById("dashboard");

// Create a new metric card for Revenue
const revenueCard = document.createElement("div");
revenueCard.setAttribute("class", "metric-card");
revenueCard.setAttribute("id", "revenueCard");
revenueCard.innerHTML = "<h3>Revenue</h3><p>$0</p>";

// Append the new metric card to the dashboard
dashboard.appendChild(revenueCard);


// Task 2: Updating Dashboard Metrics – Working with NodeLists and Arrays

// Select all metric cards
const metricCards = document.querySelectorAll(".metric-card");
const metricCardsArray = Array.from(metricCards);

// Update each card’s inner text and style
metricCardsArray.forEach(card => {
    card.innerHTML += " - Updated";
    card.style.backgroundColor = "#d4edda";
});
