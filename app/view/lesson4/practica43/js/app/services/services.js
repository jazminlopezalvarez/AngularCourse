	app.value("factor", 6);
	//app.service("multiplier", ["factor", Multiplier]);

	app.service("multiplier", function(){

	this.Multiplier=function(num){
		return num * 2;
	}



 });