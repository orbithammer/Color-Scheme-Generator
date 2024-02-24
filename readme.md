Sure, here's a README.md for your code:

```markdown
# Color Scheme Generator

This project is a color scheme generator that uses the [Color API](https://www.thecolorapi.com/docs#schemes) to generate color schemes based on a given hex color code.

## Features

- Input field for hex color code
- Button to fetch color scheme
- Dropdown menu to select color scheme mode
- Display area for color scheme
- Display area for hex codes

## How to Use

1. Enter a hex color code in the input field.
2. Click the 'Get Color' button to fetch the color scheme.
3. The color scheme will be displayed in the color display area.
4. The corresponding hex codes will be displayed in the hex display area.
5. Click on a hex code to copy it to the clipboard.

## Event Listeners

- Click events: If the clicked element has a 'btn' dataset, its value is copied to the clipboard.
- 'Get color' button: Checks if the input field has a valid hex code. If it does, it updates the hex color and fetches the color scheme. If it doesn't, it uses the value of the color input field.
- Keypress event on input field: If the 'Enter' key is pressed, it behaves the same way as the 'Get color' button.
- Dropdown menu: Changes the color scheme mode when a different option is selected.
- Input field: Updates the hex color whenever the input field changes.

## Functions

- `copyToClipboard(hexCode)`: Copies the given hex code to the clipboard.
- `isValidHexCode(str)`: Checks if a string is a valid hex code.
- `fetchColorScheme(hexColor)`: Fetches the color scheme from the API.
- `displayHex()`: Displays the hex codes.
- `getColorHtml()`: Returns the HTML for each color in the color scheme.
- `render()`: Renders the color scheme and hex codes.

## Note

This project uses the Fetch API to get data from the Color API. Make sure your browser supports these APIs before running the project.
```