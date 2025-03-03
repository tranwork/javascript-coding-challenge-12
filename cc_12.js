// Task 1: Business Dashboard – DOM Element Selection and Creation

// Select the dashboard container
const dashboard = document.getElementById("dashboard");

// Function to create metric cards dynamically
function createMetricCard(id, title, value) {
    const card = document.createElement("div");
    card.setAttribute("class", "metric-card");
    card.setAttribute("id", id);
    card.innerHTML = `<h3>${title}</h3><p>${value}</p>`;
    dashboard.appendChild(card);
}

// Create Revenue, Profit, and Expenses cards
createMetricCard("revenueCard", "Revenue", "$3000");
createMetricCard("profitCard", "Profit", "$2000");
createMetricCard("expensesCard", "Expenses", "$0");


// Task 2: Updating Dashboard Metrics – Working with NodeLists and Arrays

// Select all metric cards
const metricCards = document.querySelectorAll(".metric-card");
const metricCardsArray = Array.from(metricCards);

// Update each card’s inner text and style
metricCardsArray.forEach(card => {
    card.innerHTML += " - Updated";
    card.style.backgroundColor = "#d4edda";
});


// Task 3: Dynamic Inventory Management – Adding and Removing Items

// Select the inventory list
const inventoryList = document.getElementById("inventoryList");

// Function to add an inventory item
function addInventoryItem(itemName) {
    const item = document.createElement("li");
    item.setAttribute("class", "product-item");
    item.innerText = itemName;
    item.addEventListener("click", () => removeInventoryItem(item));
    inventoryList.appendChild(item);
}

// Function to remove an inventory item
function removeInventoryItem(item) {
    inventoryList.removeChild(item);
}


// Task 4: Business Customer Section – Handling Event Bubbling

// Select the customer section
const customerSection = document.getElementById("customerSection");

// Function to create a customer card
function addCustomerCard(customerName) {
    const card = document.createElement("div");
    card.setAttribute("class", "customer-card");
    card.innerText = customerName;
    
    // Prevent event bubbling
    card.addEventListener("click", (event) => {
        console.log("Customer card clicked");
        event.stopPropagation();
    });
    
    customerSection.appendChild(card);
}

// Event listener for the customer section (demonstrating event bubbling)
customerSection.addEventListener("click", () => {
    console.log("Customer section clicked");
});

// Add some initial customer cards
addCustomerCard("Customer 1");
addCustomerCard("Customer 2");
addCustomerCard("Customer 3");
addCustomerCard("Customer 4");