(function(angular){
	'use strict';

	angular.module('app.home')
	.controller('SearchBoxPageController',["$scope","$state", '$stateParams', SearchBoxPageController]);

	function SearchBoxPageController($scope,$state,$stateParams){
			var phc = this;
			phc.openCityPage = function(){
			    $state.go('citySearchPage');
			};
			phc.openEntityPage = function(){
			    $state.go('entitySearchPage');
			};
			
            
	    	
	}

})(window.angular);
