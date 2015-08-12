(function(){
	portfolio.jsonHandling = {
		// Get the json from an XHR call
		getJson: function (type, url, success, data) {
			var req = new XMLHttpRequest;
			req.open(type, url, true);

			req.setRequestHeader('Content-type','application/json');

			type === 'POST' ? req.send(data) : req.send(null);

			req.onreadystatechange = function() {
				if (req.readyState === 4) {
					if (req.status === 200 || req.status === 201) {
						success(req.responseText);
					}
				}
			}
		},
		// Get the items
		getItems: function(filter) {
			portfolio.jsonHandling.getJson("GET", "http://sanderboer.nl/portfolio.json", function(response) {
				localStorage.setItem("portfolioItems", response);
				portfolio.items.animate();
				portfolio.items.displayItem(JSON.parse(localStorage.getItem("portfolioItems")));
			});
		}
	}	

})();