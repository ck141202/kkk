// Get all the number elements
var numberElements = document.querySelectorAll(".number-counter");
console.log(numberElements.length);
// Create an array to hold the final number for each element
var finalNumbers = [];

// Initialize the final number for each element from the data attribute
for (var i = 0; i < numberElements.length; i++) {
    finalNumbers[i] = parseInt(numberElements[i].dataset.finalNumber, 10);
}

// Set the duration of the animation (in milliseconds)
var animationDuration = 3000;

// Create an array to hold the current number for each element
var currentNumbers = [];

// Initialize the current number for each element to zero
for (var i = 0; i < numberElements.length; i++) {
    currentNumbers[i] = 0;
}

// Create an interval that will update the number every intervalTime
var interval = setInterval(function() {
    // Loop through all the elements and update their numbers
    for (var i = 0; i < numberElements.length; i++) {
        // Update the number by the increment
        var increment = Math.ceil(finalNumbers[i] / (animationDuration / 10));
        currentNumbers[i] += increment;
        if (currentNumbers[i] > finalNumbers[i]) {
            currentNumbers[i] = finalNumbers[i];
        }

        // Update the text of the element with the new number and a plus symbol
        numberElements[i].innerText = currentNumbers[i].toLocaleString() + "+";
    }

    // Stop the interval if we've reached the final number for all elements
    if (currentNumbers.every(function(n, i) { return n >= finalNumbers[i]; })) {
        clearInterval(interval);
    }
}, 10);