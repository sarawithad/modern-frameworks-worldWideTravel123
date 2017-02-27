"use strict";

app.controller("BookCtrl", function($scope, GuideFactory){ //$scope = glue!

	let printGuides = function(){
		//Guide Factory accesses functionality from guideFactory.js
		GuideFactory.getGuides()
		.then( (guides) => {
			//digs into json array
			$scope.guides = guides.data.guides;
		});
	};

//have to call above function somewhere, why not here?
	printGuides();


//not necessary for exercise, just showing ng-model back on the partial
	$scope.newGuide = {
		title: "Baltimore",
		type: "serial land",
		price: ""
	};
	

});