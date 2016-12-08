	app.controller("constantExample", ["$scope", "mensaje", function ($scope, mensaje) {
			$scope.mensaje = mensaje.text;
		}]);
		