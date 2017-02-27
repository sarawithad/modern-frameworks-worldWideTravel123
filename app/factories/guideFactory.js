"use strict";

app.factory("GuideFactory", function ($http, $q) {

	let getGuides = function(){
		//make a function that returns a promise with a resolve/reject
		return $q((resolve, reject) => {
			console.log("inside getGuides");
			//pulls in data
			$http.get("data/guides.json")
			.then( (data) => {
				resolve(data);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};


	return {getGuides};

});

