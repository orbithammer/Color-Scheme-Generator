// API DOCUMENTATION
// https://www.thecolorapi.com/docs#schemes

// Get HTML elements by their IDs
const colorInput = document.getElementById("color-input") // Input field for color
const getColorBtn = document.getElementById("get-color-btn") // Button to fetch color scheme
const dropdownMenu = document.getElementById("dropdown") // Dropdown menu to select color scheme mode
const colorDisplay = document.getElementById("color-display") // Display area for color scheme
const hexDisplay = document.getElementById("hex-display") // Display area for hex codes
const hexInput = document.getElementById("hex-input") // Get the input field

// Initialize variables
let colorSchemeArray = [] // Array to store color scheme
let hexColor = colorInput.value // Get initial color from input field
let mode = "analogic" // Set initial color scheme mode

// Add event listener for click events
document.addEventListener("click", e => {
    if(e.target.dataset.btn) {
        copyToClipboard(e.target.dataset.btn) // If clicked element has a 'btn' dataset, copy its value to clipboard
    }
})

// Function to copy text to clipboard
function copyToClipboard(hexCode) {
    navigator.clipboard.writeText(hexCode)
        .then(() => alert(`${hexCode} copied to clipboard.`)) // Show alert when text is copied
}

// Function to check if a string is a valid hex code (with '#')
function isValidHexCode(str) {
    return /^#[0-9A-F]{3}$|^#[0-9A-F]{6}$/i.test(str);
}

// Add event listener for 'get color' button
getColorBtn.addEventListener("click", () => {
    // Check if hexInput has a valid hex code (without '#')
    if (isValidHexCode(hexInput.value)) {
        hexColor = hexInput.value; // Update hexColor with the value of hexInput
    } else {
        hexColor = colorInput.value; // If hexInput is not valid, use the value of colorInput
    }
    fetchColorScheme(hexColor); // Fetch color scheme
});

// Add event listener for 'keypress' event on hexInput
hexInput.addEventListener("keypress", (e) => {
    // Check if the key pressed is 'Enter'
    if (e.key === 'Enter') {
        // Check if hexInput has a valid hex code (with '#')
        if (isValidHexCode(hexInput.value)) {
            hexColor = hexInput.value; // Update hexColor with the value of hexInput
        } else {
            hexColor = colorInput.value; // If hexInput is not valid, use the value of colorInput
        }
        fetchColorScheme(hexColor); // Fetch color scheme
    }
});

// Add event listener for dropdown menu
dropdownMenu.addEventListener("click", (e) => {
    mode = e.target.value // Change color scheme mode when a different option is selected
})

hexInput.addEventListener("input", () => {
    hexColor = hexInput.value // Update hexColor whenever the input field changes
})

// Function to fetch color scheme from API
function fetchColorScheme(hexColor) {
    const colorStr = hexColor.substring(1) // Remove '#' from start of hex color
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorStr}&mode=${mode}`) // Fetch color scheme from API
        .then(res => res.json())
        .then(data => {
            colorSchemeArray = data.colors.map(elem => elem.hex.value) // Store fetched color scheme in array
            render() // Render color scheme and hex codes
        })
}

// Function to display hex codes
function displayHex() {
    hexDisplay.innerHTML = colorSchemeArray.map(hexCode => `<button data-btn=${hexCode}>${hexCode}</button>`).join("") // Display each hex code as a button
}

// Function to get HTML for each color in the color scheme
function getColorHtml() {
    return colorSchemeArray.map(hexColor => {
        return `<div style="background-color: ${hexColor};"> </div>` // Return a div with the background color set to the hex color
    })
} 

// Function to render color scheme and hex codes
function render() {
    colorDisplay.innerHTML = getColorHtml().join("") // Display color scheme
    displayHex() // Display hex codes
}

// Fetch initial color scheme
fetchColorScheme(hexColor)
