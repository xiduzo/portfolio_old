(function(){
	// Make a controller object
	portfolio.items = {
		// Show next item
		showNext: function() {
			// Set the new position
			portfolio.newPosition = portfolio.currentPosition + 1;

			portfolio.currentPosition = portfolio.newPosition;

			if (portfolio.currentPosition > _.max(JSON.parse(localStorage.getItem('portfolioItems')), function(item){ return item.id; }).id) {
				portfolio.currentPosition = 0;
			}

			// Switch the portfolio item
			portfolio.items.animate('next');
		},
		// Show previous item
		showPrevious: function() {
			// Set the new position
			portfolio.newPosition = portfolio.currentPosition - 1;

			if(portfolio.newPosition < 0) {
				portfolio.newPosition = _.max(JSON.parse(localStorage.getItem('portfolioItems')), function(item){ return item.id; }).id;
			}

			portfolio.currentPosition = portfolio.newPosition;

			// Switch the portfolio item
			portfolio.items.animate('previous');
		},
		// Swtiching between items
		animate: function(animation) {
			// Add the right animation
			if(animation == "next") {
				portfolio.portfolioSpace.classList.add('slideInRight');
				setTimeout(function(){ 
					portfolio.portfolioSpace.classList.remove('slideInRight'); 
				}, 900);
			} else {
				portfolio.portfolioSpace.classList.add('slideInLeft');
				setTimeout(function(){ 
					portfolio.portfolioSpace.classList.remove('slideInLeft'); 
				}, 900);
			}

			portfolio.items.displayItem(JSON.parse(localStorage.getItem("portfolioItems")));
		},
		// Displaying the items
		displayItem: function(items) {
			// Getting the right item
			item = _.findWhere(items,{id: portfolio.currentPosition});

			// Clear the old portfolio item
			portfolio.portfolioSpace.innerHTML = '';

			// Build the HTML for the new item
			portfolio.portfolioSpace.innerHTML = '<img src="static/images/portfolio/'+item.image+'">';
			portfolio.portfolioSpace.innerHTML += '<h3>'+item.title+'</h3>';

			// Loop trough all the paragraphs
			for(i = 0; i < item.paragraphs.length; i++) {
				portfolio.portfolioSpace.innerHTML += '<p>'+item.paragraphs[i]+'</p>';
			}

			// Adding the link to view the result
			portfolio.portfolioSpace.innerHTML += '<a href="'+item.link+'" target="_BLANK">Bekijk resultaat</a>';
			// Need to add this later
			//portfolioSpace.innerHTML += '<a href="'+portfolioArray[newPosition][4]+'">Lees meer</a>';
		}
	}

	portfolio.jsonHandling.getItems();
})();