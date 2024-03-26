// Initialize a flag to track if the countdown is active
let isCountdownActive = false;

// HANDLE WHICH TIME BUTTON IS SELECTED
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".time-section__time-choice__button");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove selected class from all buttons
      buttons.forEach((btn) => btn.classList.remove("time-section__time-choice__button--selected"));

      // Add selected class to the clicked button
      this.classList.add("time-section__time-choice__button--selected");

      // Start the countdown with the selected time
      const selectedTime = parseInt(this.textContent); // Assuming the button text is the time in minutes or seconds
      startCountdown(selectedTime);
    });
  });

  // Modify the click event listener for the game section button
  document.querySelector(".game-section__click-area__button").addEventListener("click", () => {
    if (isCountdownActive) {
      // Only increment clicks if the countdown is active
      const clickCounter = document.querySelector(".click-counter-section__counter");
      clickCounter.textContent = parseInt(clickCounter.textContent) + 1;
    }
  });
});

// Function to start and display the countdown
function startCountdown(duration) {
  isCountdownActive = true; // Set the flag to true when the countdown starts
  let timer = duration,
    minutes,
    seconds;
  const timeDisplay = document.querySelector(".time-section__time-display");
  const interval = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    timeDisplay.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      clearInterval(interval);
      timeDisplay.textContent = "Time's up!";
      isCountdownActive = false; // Set the flag to false when the countdown finishes
    }
  }, 1000);
}
