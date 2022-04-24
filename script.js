// select query for h3, class color1, and class color2 from input  
/*
* Variable initialization for background generator
* @variable {object} h3
* @variable {object} color1
* @variable {object} color2
* @variable {object} body
* @variable {object} randomize
* @variable {string} gradientText
*/
const h3 = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");
const randomize = document.getElementById("randomize");

/*
* This function return the text for linear-gradient with value of color1 and color2
*
* @param {nothing}
* @return {string} linear-gradient with color1 and color2 value
*/
const gradientText = () => `linear-gradient(to right, ${color1.value}, ${color2.value})`;

/*
* This function prints the gradient colors to the web page screen 
*
* @param {nothing}
* @return {nothing}
*/
const printGradient = () => h3.textContent = gradientText() + ";";

/*
* This function change the gradient color and call on print gradient
*
* @param {nothing}
* @return {nothing}
*/
const changeGradientColor = () => {
  body.style.background = gradientText();
  printGradient();
}

/*
* This function randomize gradient using random color and changing it to color1 and color2
*
* @param {nothing}
* @return {nothing}
*/
const randomizeGradient = () => {
  /*
  * This closure return a random hex color
  * 
  * @param {nothing}
  * @return {string} random hex color 
  */
 const randomColor = () => {
    const randomHexColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomHexColor}`;
  }

  // set a random color1 value
  color1.value = randomColor();
  
  // then set a random color2 value
  color2.value = randomColor();
  
  // call on changeGradientValue() function after setting color
  changeGradientColor();
}

// print the initial gradient 
printGradient();

// add event listener of input when changing color1 and color2
color1.addEventListener("input", changeGradientColor);
color2.addEventListener("input", changeGradientColor);

// add event listener of click when user click on randomize button
randomize.addEventListener("click", randomizeGradient);
