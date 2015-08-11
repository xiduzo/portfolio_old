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
			// Try catch method for getting the json needed
			try {
				portfolioItems = localStorage.getItem("portfolioItems");
				throw _.isEmpty(portfolioItems) ? "No {local storage} available" : "Getting items from {local storage}";
			} catch(err) {
				console.log(err);
			} finally {
				portfolio.jsonHandling.getJson("GET", "http://sanderboer.nl/portfolio.json", function(response) {
					localStorage.setItem("portfolioItems", response);
					console.log('New JSON stored in {local storage}');
				});
			}

			portfolio.items.switchItem();
			portfolio.items.displayItem(JSON.parse(portfolioItems));
		}
	}	

})();