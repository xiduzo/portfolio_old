// Getting the elements from the HTML DOM
var me = document.querySelectorAll('header img')[0];
var signature = document.querySelectorAll('#signature ul')[0];

var i;

// The header image needs to pulse after 1 second
setTimeout(function() {
	me.classList.remove('hidden');
	me.classList.add('fadeInDown');
}, 1000);

function checkHeight() {
	// Animations for the signature items
	for(i = 0; i < signature.children.length; i++) {
		// adding and removing the animation classed at the right page heights
		if(signature.children[i].offsetTop * 1.2 <= window.pageYOffset){
			signature.children[i].classList.remove('pulse');
		} else if(signature.children[i].offsetTop * 0.8 <= window.pageYOffset || window.pageYOffset <= window.innerHeight) {
			signature.children[i].classList.add('pulse');
		}
	}
}

// Need to check for animations each time the page is scrolled
document.addEventListener("scroll", checkHeight);