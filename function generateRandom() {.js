function generateRandom() {
    const randomColor1 = getRandomColor();
    const randomColor2 = getRandomColor();

    document.body.style.background = `linear-gradient(to right, ${randomColor1}, ${randomColor2})`;

    // Display the colors used
    displayColorsUsed(randomColor1, randomColor2);
}

function generateCustom() {
    const color1 = prompt("Enter the first color code:");
    const color2 = prompt("Enter the second color code:");

    if (isValidColorCode(color1) && isValidColorCode(color2)) {
        document.body.style.background = `linear-gradient(to right, ${color1}, ${color2})`;

        // Display the colors used
        displayColorsUsed(color1, color2);
    } else {
        alert("Invalid color codes. Please enter valid HEX color codes.");
    }
}

function displayColorsUsed(color1, color2) {
    const colorsUsedDiv = document.getElementById("colors-used");
    colorsUsedDiv.innerHTML = `Colors Used: ${color1} and ${color2}`;
}

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function isValidColorCode(color) {
    const colorRegex = /^#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})$/;
    return colorRegex.test(color);
}
