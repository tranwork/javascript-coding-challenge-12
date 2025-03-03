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