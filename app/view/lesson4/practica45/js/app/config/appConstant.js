var app = angular.module("constantApp", []);
	app.config(["mensajeProvider", "messageText", function (mensajeProvider, messageText) {
		mensajeProvider.setText(messageText);
	}]);

