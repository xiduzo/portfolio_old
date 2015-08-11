// Make a namespace -so that multiple .js files can communicate with eachother
var portfolio = portfolio || {};

// ------------ Global variables ------------ \\
// Getting some elements from the HTML
nextButton = document.getElementById('showNext');
previousButton = document.getElementById('showPrevious');
portfolio.portfolioSpace = document.querySelectorAll('#portfolio section')[0];

// Some variables to make the script work
portfolio.currentPosition = 0;
portfolio.newPosition = 0;
portfolio.i;

// Adding the events
// Add the hammer JS events
portfolioSwipe = new Hammer(portfolio.portfolioSpace);

// Swiping from right to left => showing the next item
portfolioSwipe.on("panleft", function() {
	portfolio.items.showNext();
});

// Swiping from left to right => showing the previous item
portfolioSwipe.on("panright", function() {
	portfolio.items.showPrevious();
});

// Add the click events for the two buttons
nextButton.addEventListener("click", function(){portfolio.items.showNext();});
previousButton.addEventListener("click", function(){portfolio.items.showPrevious();});