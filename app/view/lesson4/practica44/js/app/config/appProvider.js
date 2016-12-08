var app = angular.module("providerApp", []);
	app.config(["mensajeProvider", function (mensajeProvider) {
		mensajeProvider.setText("Hello world!");
	}]);
