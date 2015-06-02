// Omitting the second argument tells AngularJS that you want to locate a module that has already been defined.
// In this situation, AngularJS will report an error if the module specified doesn’t exist
angular.module("sportsStore")
.controller("sportsStoreCtrl", function($scope) {
	$scope.data = {
		products : [
			{ name: "Product #1",  description : "A product", 
			  category : "Category #1", price : 100},
			{ name: "Product #2",  description : "A product", 
			  category : "Category #1", price : 110},
			{ name: "Product #3",  description : "A product", 
			  category : "Category #2", price : 210},
			{ name: "Product #4",  description : "A product", 
			  category : "Category #3", price : 202}
		]
	}
});