var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
 $scope.firstname = "Frankie";
});


var indexControllerTest = app.controller("indexControllerTest", function ($scope) {
 $scope.message = "Hello World"
});