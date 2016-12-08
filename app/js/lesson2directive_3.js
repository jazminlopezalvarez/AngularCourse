var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
 $scope.test="";
 $scope.count = 0;
 $scope.chan= 0;
 $scope.blur= 0;
 $scope.showMe = false;
 $scope.myFunc = function() {
 $scope.showMe = !$scope.showMe;
 }
});