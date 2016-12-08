	app.controller("providerExample", ["$scope", "mensaje", function ($scope, mensaje) {
		$scope.mensaje = mensaje.text;
	}]);