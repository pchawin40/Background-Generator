// select query for h3, class color1, and class color2 from input  
const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");

// body.style.background = "red";
const printGradient = () => css.textContent = `linear-gradient(to right, ${color1.value}, ${color2.value})` + ";";

// have color1 and color2 have event listener (listen to what color it has change to)
const changeGradientColor = () => {
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  // css.textContent = body.style.background + ";";
  printGradient();
}

printGradient();

color1.addEventListener("input", changeGradientColor);

color2.addEventListener("input", changeGradientColor);

// BONUS: Add a random button which generates two random numbers for the colour inputs

const randomize = document.getElementById("randomize");

// 1. When click on randomize button...
// call on randomizeGradient function that: 
const randomizeGradient = () => {
  const randomColor = () => {
    const randomHexColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomHexColor}`;
  }
  /* color: (0, 0, 0); */
  // 2. set a random color1 value
  color1.value = randomColor();

  // 3. then set a random color2 value
  color2.value = randomColor();

  // 4. call on changeGradientValue() function after setting color
  changeGradientColor();
}

randomize.addEventListener("click", randomizeGradient);
