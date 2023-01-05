// API DOCUMENTATION
// https://www.thecolorapi.com/docs#schemes

const colorInput = document.getElementById("color-input")
const getColorBtn = document.getElementById("get-color-btn")
const dropdownMenu = document.getElementById("dropdown")
const colorDisplay = document.getElementById("color-display")
const hexDisplay = document.getElementById("hex-display")

let colorSchemeArray = []
let hexColor = colorInput.value
let mode = "analogic"

document.addEventListener("click", e => {
    if(e.target.dataset.btn) {
        copyToClipboard(e.target.dataset.btn)
    }
})

function copyToClipboard(hexCode) {
    navigator.clipboard.writeText(hexCode)
        .then(() => alert(`${hexCode} copied to clipboard.`))
}

getColorBtn.addEventListener("click", () => {
    fetchColorScheme(colorInput.value)
})

dropdownMenu.addEventListener("click", (e) => {
    mode = e.target.value
})

function fetchColorScheme(hexColor) {
    const colorStr = hexColor.substring(1)
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorStr}&mode=${mode}`)
        .then(res => res.json())
        .then(data => {
            colorSchemeArray = data.colors.map(elem => elem.hex.value)
            render()
        })
}

function displayHex() {
    hexDisplay.innerHTML = colorSchemeArray.map(hexCode => `<button data-btn=${hexCode}>${hexCode}</button>`).join("")
}

function getColorHtml() {
    return colorSchemeArray.map(hexColor => {
        return `<div style="background-color: ${hexColor};"> </div>`
    })
} 

function render() {
    colorDisplay.innerHTML = getColorHtml().join("")
    displayHex()
}

fetchColorScheme(hexColor)