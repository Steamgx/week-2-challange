// Select DOM elements
const itemInput = document.getElementById("item-input");
const shoppingList = document.getElementById("shopping-list");
const refreshButton = document.getElementById("refresh");
const toggleDarkModeButton = document.getElementById("toggle-dark-mode");

// Function to add an item to the list
function addItem() {
    const itemValue = itemInput.value.trim();

    if (itemValue === "") {
        alert("Please enter an item and its price.");
        return;
    }

    // Create a new list item
    const listItem = document.createElement("li");
    listItem.textContent = itemValue;

    // Add a remove button to the list item
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.style.marginLeft = "10px";
    removeButton.onclick = () => listItem.remove();

    listItem.appendChild(removeButton);
    shoppingList.appendChild(listItem);

    // Clear the input field
    itemInput.value = "";
}

// Function to clear the list
function clearList() {
    shoppingList.innerHTML = "";
}

// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    // Change button text based on the current mode
    const isDarkMode = document.body.classList.contains("dark-mode");
    toggleDarkModeButton.textContent = isDarkMode
        ? "PRESS FOR LIGHT MODE"
        : "PRESS FOR DARK MODE";
}

// Event listeners
itemInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addItem();
    }
});

refreshButton.addEventListener("click", clearList);
toggleDarkModeButton.addEventListener("click", toggleDarkMode);


