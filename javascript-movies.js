// Get references to the button and card container
var showMoreButton = document.getElementById("show-more-btn");
var cardContainer = document.getElementById("card-container");
var cards = cardContainer.getElementsByClassName("card");

// Set the number of initially visible cards and cards to show when the button is clicked
var initiallyVisibleCards = 4;
var additionalCardsToShow = 8;

// Function to toggle the visibility of cards
function toggleCardVisibility(startIndex, endIndex, visible) {
  for (var i = startIndex; i < endIndex; i++) {
    cards[i].classList.toggle("hidden", !visible);
  }
}

// Hide additional cards initially
toggleCardVisibility(initiallyVisibleCards, cards.length, false);

// Event listener for the "Show More" button
showMoreButton.addEventListener("click", function () {
  // Check if there are hidden cards left to show
  var hiddenCards = cardContainer.getElementsByClassName("hidden");
  if (hiddenCards.length > 0) {
    var endIndex = initiallyVisibleCards + additionalCardsToShow;

    // Show additional cards
    toggleCardVisibility(initiallyVisibleCards, endIndex, true);

    // Update the button text when all cards are visible
    if (hiddenCards.length <= additionalCardsToShow) {
      showMoreButton.innerHTML = "Show Less";
    }
  } else {
    // Hide additional cards when the button is clicked again
    toggleCardVisibility(initiallyVisibleCards, cards.length, false);

    // Reset the button text
    showMoreButton.innerHTML = "Show More";
  }
});
