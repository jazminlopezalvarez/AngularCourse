var app=angular.module("app",[]);

app.controller("SeguroController",['$scope','$log','$http',function($scope,$log,$http) {


 	$log.debug("Acabamos de crear el $scope");
	 $http({
			 method: 'GET',
			 url: '../../lesson5/practica5Http/js/app/response/datos.json'
	 		}).success(function(data, status, headers, config) {
	 			$scope.seguro=data;
			 }).error(function(data, status, headers, config) {
			 	alert("Ha fallado la petición. Estado HTTP:"+status);
			 });

}]); 
