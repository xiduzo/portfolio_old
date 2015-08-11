// Getting some elements from the HTML
var nextButton = document.getElementById('showNext');
var previousButton = document.getElementById('showPrevious');
var portfolioSpace = document.querySelectorAll('#portfolio section')[0];

// Making the array for my portfolio items
var portfolioArray = [
	[
		"samenhuishouden.jpg",
		"Samen huishouden",
		[
			"Samen huishouden is een van mijn projecten waar ik buiten school mee bezig ben.",
			"Sinds ik op mezelf woon met medestudenten merkte ik pas hoe vervelend het was om in een huishouden alle taken soepel te verdelen.",
			"Dit is een van de redene dat ik samen huishouden ben gaan maken.",
			"Buiten dat om vond ik het ook een goed idee en vond het leuk om mijn kennis toe te passen voor iets buiten school om."
		],
		"http://samenhuishouden.nl/",
		"READ MORE LINK"
	],
	[
		"programmeren.jpg",
		"Programmeren",
		[
			"Voor mijn eerste jaars vak programmeren werd de opdracht gesteld van het maken van een overdraagbare applicatie met Javascript.",
			"Aan het begin begon ik met nul kennis over javaScript maar ik vond het een erg interessante taal, hierdoor ben ik iets over de top gegaan met mijn eindopracht.",
			"Voor mijn eindopdracht heb een text based adventure gemaakt waarin je door kamers kunt rondlopen, items kunt kopen, items kunt vinden en nog veel meer.",
			"Lukt het jou om het uit te spelen?"
		],
		"http://sanderboer.nl/school/deeltoets3/",
		"READ MORE LINK"
	],
	[
		"mytable.jpg",
		"Mijn werkplek",
		[
			"Aangezien wij op school in een schoolse cultuur leefde was ik in groepsprojecten bija altijd de front ender, hierdoor heb ik minder kunnen spelen met programma's als illustrator.",
			"Om toch een beetje feeling te krijgen met deze programma's ben ik buiten school om ook bezig om hierin dingen te maken.",
			"Dit is een van de dingen die ik heb gemaakt buiten school om. Mij eigen werkplek in illustrator!"
		],
		"http://sanderboer.nl/school/images/werkplek.jpg",
		"READ MORE LINK"
	],
	[
		"1kchallenge.jpg",
		"1k challenge",
		[
			"Tijdens mijn derde jaar op CMD ben ik mee gaan lopen als student assisten met het propedeuse vak programmeren.",
			"Dit vak gaf eerste jaars CMD-ers de eerste stappen in programmeren / javaScript.",
			"Buiten de lessen om wilde ik kijken hoever mijn kennis was gegroeid sinds dat ik het vak (twee jaar hiervoor) volgde.",
			"Ik ben zo ver gegaan dat ik een spel met minder dan 1024 tekens heb geschreven."
		],
		"http://sanderboer.nl/school/tic-tac-toe/",
		"READ MORE LINK"
	],
	[
		"perspective.jpg",
		"Perspectief tekenen",
		[
			"Tijdens mijn minor game design heb ik het vak 'Game art' gevold.",
			"In dit vak hebben wij onderandere geleerd om met de perspectief tool aan de slag te gaan,",
			"Dit is een van de ontwerpen die ik heb gemaakt met de perspectief tool."
		],
		"http://sanderboer.nl/school/images/2punts2.jpg",
		"READ MORE LINK"
	],
	[
		"woonenergie.jpg",
		"Woonenergie / Tam Tam applicatie",
		[
			"In opdracht van Tam Tam moesten wij een (interactieve) digitale toepassing maken voor WoonEnergie, deze toepassing moest een relevante meerwaarde brengen in het leven van de klanten van WoonEnergie.",
			"Bij de toepassing draaide het vooral om het geven van inzicht in het verbruik en het bieden van service richting huurder en wooncorporaties.",
			"Door middel van relevantie wilde wij dat de drempel verlaagd werd voor het gebruik van deze digitale toepassing, en hierdoor hoopt WoonEnergie betere touchpoints te krijgen met klanten."
		],
		"http://sanderboer.nl/school/project/",
		"READ MORE LINK"
	],
	[
		"dataviz.jpg",
		"Datavisualisatie",
		[
			"Hoe breng ik grote brokken data zo aan de gebruiker dat deze begrijpbaar is?",
			"Voor mijn datavisualisatie heb ik gekozen om mijn gamegedrag op bepaalde punten bij te houden tijdens het spelen van Dota 2.",
			"Door middel van datavisualisatie wilde ik op een gebruiksvriendelijke manier afbeelden wat invloed had op een potje winnen of verliezen."
		],
		"http://sanderboer.nl/school/dataviz/eindopdracht/",
		"READ MORE LINK"
	],
	[
		"FED.jpg",
		"Front end development",
		[
			"Voor front end development was het doel het maken van toegankelijke websites die op verschillende schermen bruikbaar zijn met behulp van HTML5 CSS3 en jQuery.",
			"Dit was mijn eerste instap in HTML5 en CSS3 en de mogenlijkheden hiervan."
		],
		"http://sanderboer.nl/school/FED/",
		"READ MORE LINK"
	],
	[
		"FED2.jpg",
		"Front end development 2",
		[
			"Tijdens front end development 2 hebben wij een verdieping in de technische mogelijkheden van HTML5 en Javascript gekregen.",
			"De focus van dit vak lag op programmeer patronen OOP en MVC.",
			"Door middel van libraries en de programeer principes die hierboven zijn genoemd moesten wij een klein appje maken."
		],
		"http://sanderboer.nl/school/FED2/",
		"READ MORE LINK"
	]
];

// Some variables to make the script work
var currentPosition = 0;
var newPosition, i;

// Showing the next portfolio item from the array
function showNext() {
	// Set the new position
	newPosition = currentPosition + 1;
	// Switch the portfolio item
	switchItem(currentPosition, newPosition, 'next');

	currentPosition = newPosition;
	if (currentPosition > portfolioArray.length - 1) {
		currentPosition = 0;
	}
}

// Showing the previous portfolio item from the array
function showPrevious() {
	// Set the new position
	newPosition = currentPosition - 1;

	if(newPosition < 0) {
		newPosition = portfolioArray.length - 1;
	}
	// Switch the portfolio item
	switchItem(currentPosition, newPosition, 'previous');

	currentPosition = newPosition;

}

// Switch the portfolio item in the HTML
function switchItem(currentPosition, newPosition, side) {
	// Some checks
	if(newPosition < 0) {
		newPosition = portfolioArray.length - 1;
	}
	if(newPosition > portfolioArray.length - 1) {
		newPosition = 0;
	}

	// Clear the old portfolio item
	portfolioSpace.innerHTML = '';

	// Build the HTML for the new item
	portfolioSpace.innerHTML = '<img src="static/images/portfolio/'+portfolioArray[newPosition][0]+'">';
	portfolioSpace.innerHTML += '<h3>'+portfolioArray[newPosition][1]+'</h3>';
	// Loop trough all the paragraphs
	for(i = 0; i < portfolioArray[newPosition][2].length; i++) {
		portfolioSpace.innerHTML += '<p>'+portfolioArray[newPosition][2][i]+'</p>';
	}
	portfolioSpace.innerHTML += '<a href="'+portfolioArray[newPosition][3]+'" target="_BLANK">Bekijk resultaat</a>';
	// Need to add this later
	//portfolioSpace.innerHTML += '<a href="'+portfolioArray[newPosition][4]+'">Lees meer</a>';

	// Add the right animation
	if(side == "next") {
		portfolioSpace.classList.add('slideInRight');
		setTimeout(function(){ 
			portfolioSpace.classList.remove('slideInRight'); 
		}, 900);
	} else {
		portfolioSpace.classList.add('slideInLeft');
		setTimeout(function(){ 
			portfolioSpace.classList.remove('slideInLeft'); 
		}, 900);
	}
}

// Add the hammer JS events
var portfolioSwipe = new Hammer(portfolioSpace);

// Swiping from right to left => showing the next item
portfolioSwipe.on("panleft", function() {
	showNext();
});

// Swiping from left to right => showing the previous item
portfolioSwipe.on("panright", function() {
	showPrevious();
});

// Add the click events for the two buttons
nextButton.addEventListener("click", showNext);
previousButton.addEventListener("click", showPrevious);

// Show the first item as default
switchItem(0, 0);

// Local storage
try {
	data = localStorage.getItem("portfolioItems");
	throw _.isEmpty(data) ? "Geen {local storage} beschikbaar" : "Items worden opgehaald uit de {local storage}";
} catch(err) {
	console.log(err);
} finally {
	localStorage.setItem("portfolioItems", portfolioArray);
}