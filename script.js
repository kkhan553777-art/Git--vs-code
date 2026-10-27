// This script runs when the page loads
// Wait for the page to fully load before running code
document.addEventListener("DOMContentLoaded", function () {
  // Get the button element by its id
  const button = document.getElementById("alertButton");

  // Add a click event listener to the button
  button.addEventListener("click", function () {
    // Show an alert when the button is clicked
    alert("Hello! You clicked the button.");
  });
});