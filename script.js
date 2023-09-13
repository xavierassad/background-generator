const css = document.querySelector("h3");
const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const body = document.getElementById("gradient");

css.textContent = "linear-gradient(to right, rgb(255, 0, 0), rgb(255, 255, 0));";

function linearGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    // display the text values of the gradient in a format that can be copy-pasted for CSS
    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", linearGradient);

color2.addEventListener("input", linearGradient);
