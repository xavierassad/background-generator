let cssHeading = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.querySelector("#gradient");

// color1.addEventListener("input", () => {
//     // console.log(color1.value);
//     body.style.background = "linear gradient(to right, " + color1.value + ", " + color2.value + ")";
// });

// color2.addEventListener("input", () => {
//     // console.log(color2.value);
//     body.style.background = "linear gradient(to right, " + color1.value + ", " + color2.value + ")";
// });

color1.value = "#00ff00";  // the initial color value - resets upon page refresh
color2.value = "#ff0000";  // the initial color value - resets upon page refresh

const gradientBackground = () => {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";   // semicolon is not needed in this CSS string here

    cssHeading.textContent = body.style.background + ";";
}

gradientBackground();   // call function to produce CSS textContent of the initial color values

color1.addEventListener("input", gradientBackground);   // use named callback function (no longer anonymous)

color2.addEventListener("input", gradientBackground);