	app.provider("mensaje", [function () {
		var text = null;

		this.setText = function (textString) {
			text = textString;
		};

		this.$get = [function () {
			return new Mensaje(text);
		}];
	}]);