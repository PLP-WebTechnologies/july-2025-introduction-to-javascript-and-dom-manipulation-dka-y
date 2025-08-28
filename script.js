// script.js

// ===================
// Part 1: Variables and Conditionals
// ===================

// Variable declarations
const age = 25;
const isStudent = true;

// Conditional to check eligibility for a discount
let message = "";
if (age < 18) {
  message = "You are a minor and eligible for a discount.";
} else if (age >= 18 && age <= 25 && isStudent) {
  message = "You are a student eligible for a discount.";
} else {
  message = "Sorry, you are not eligible for a discount.";
}

// Display the message in the DOM
const conditionResult = document.getElementById("conditionResult");
conditionResult.textContent = message;


// ===================
// Part 2: Custom Functions
// ===================

// Function to greet user by name (simple example)
function greetUser(name) {
  return `Hello, ${name}! Welcome to this interactive page.`;
}

// Function to clear text content of an element
function clearTextContent(elementId) {
  const elem = document.getElementById(elementId);
  if (elem) {
    elem.textContent = "";
  }
}

// Setup event listener for greet button
const greetBtn = document.getElementById("greetBtn");
const greetOutput = document.getElementById("greetOutput");
greetBtn.addEventListener("click", () => {
  clearTextContent("greetOutput");
  // Prompt for name (could be improved but keep simple)
  const userName = prompt("Please enter your name:");
  if (userName && userName.trim() !== "") {
    greetOutput.textContent = greetUser(userName.trim());
  } else {
    greetOutput.textContent = "Hello! Please enter a valid name next time.";
  }
});


// ===================
// Part 3: Loops
// ===================

// Function to populate a list with numbers 1 to n using a for loop
function showNumbers(n) {
  const numberList = document.getElementById("numberList");
  // Clear existing list
  numberList.innerHTML = "";

  for (let i = 1; i <= n; i++) {
    const li = document.createElement("li");
    li.textContent = i;
    numberList.appendChild(li);
  }
}

// Function to demonstrate a while loop - count down from n to 1 and log to console
function countdown(n) {
  let count = n;
  console.log("Countdown starts:");
  while (count > 0) {
    console.log(count);
    count--;
  }
  console.log("Countdown ended.");
}

// Setup event listener for loop button
const loopBtn = document.getElementById("loopBtn");
loopBtn.addEventListener("click", () => {
  showNumbers(5);
  countdown(5);
});


// ===================
// Part 4: DOM Interactions
// ===================

// Function to change page background color based on user input
function changeBackgroundColor(color) {
  // Check if the color is valid by trying to set it on a temporary element
  const tempElem = document.createElement("div");
  tempElem.style.color = color;
  // If the browser accepted the color value, style.color will be set
  if (tempElem.style.color !== "") {
    document.body.style.backgroundColor = color;
    return true;
  }
  return false;
}

const changeColorBtn = document.getElementById("changeColorBtn");
const colorInput = document.getElementById("colorInput");
const colorFeedback = document.getElementById("colorFeedback");

changeColorBtn.addEventListener("click", () => {
  const color = colorInput.value.trim();
  if (color === "") {
    colorFeedback.textContent = "Please enter a color.";
    return;
  }
  if (changeBackgroundColor(color)) {
    colorFeedback.textContent = `Background color changed to ${color}.`;
  } else {
    colorFeedback.textContent = "Invalid color value. Try again.";
  }
});
