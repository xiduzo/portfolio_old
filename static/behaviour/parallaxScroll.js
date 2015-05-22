/*
 *
 *	Made by: Xiduzo
 *	15-05-2015
 *	Original idea: http://code.tutsplus.com/tutorials/simple-parallax-scrolling-technique--net-27641
 *	Last edited: 16-05-2015
 *
*/

// Getting all the sections for the parralex scroll effect
var sections = document.getElementsByTagName('section');

// Move everyting when you scroll
window.addEventListener("scroll", function() {
	// Loop trough all the sections
	for( var i = 0; i < sections.length; i++) {

		// Get the current section
		var section = sections[i];

		// Get the current section speed
		var sectionSpeed = section.getAttribute("data-speed");

		
		// Need to make it work when the page scrolls, the sections scroll accodionaly with their data-speed tag value
		var yPos = -(window.scrollTop / sectionSpeed);
		var coord = '50%' + yPos + 'px';

		section.style.backgroundPosition = coord;

		var windowYOffset = window.pageYOffset,
        elBackgrounPos = "50% " + (windowYOffset * sectionSpeed) + "px";
      
      	//section.style.backgroundPosition = elBackgrounPos;	

	}
});


//  $('section[data-type="background"]').each(function(){
//     var bgobj = $(this); // assigning the object

//     $(window).scroll(function() {
//         var yPos = -($window.scrollTop() / bgobj.data('speed')); 
        
//         // Put together our final background position
//         var coords = '50% '+ yPos + 'px';

//         // Move the background
//         bgobj.css({ backgroundPosition: coords });
//     }); 
// });    