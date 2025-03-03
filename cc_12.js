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
addCustomerCard("Jenny Tran");
addCustomerCard("Jaden Ly");
