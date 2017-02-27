"use strict";

var app = angular.module("TravelApp", ["ngRoute"]);

app.config(function($routeProvider) {
	$routeProvider
	.when("/", {
		templateUrl: "partials/GuideList.html",
		controller: "BookCtrl"
	}).
	otherwise("/");
});