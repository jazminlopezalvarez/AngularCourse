var app = angular.module('myApp', []);
app.controller('myCtrl', function() {
	var varScope = this;

	varScope.test="0";
	varScope.product=[];
	varScope.mostrarControles=false;
	varScope.mostrarTable=false;
	varScope.mostrarAgregar=true;

	varScope.AgregarProduct=function(newProduct){
		varScope.mostrarTable=true;
		newProduct.id=varScope.product.length + 1;
		varScope.product.push(angular.copy(newProduct));
		varScope.CleanText();


	}
	varScope.EliminarProduct=function(objproduct){
		var productNew =[];
		angular.forEach(varScope.product, function(value){
			if(objproduct.id!=value.id){
				productNew.push(value);
			}
		});
		varScope.product=productNew;	

		if(varScope.product.length==0){
			varScope.mostrarTable=false;
			varScope.CleanText();
			varScope.mostrarControles=false;
			varScope.mostrarAgregar=true;
			
		}
	}
	varScope.showControles=function(){
		varScope.mostrarControles=true;
		varScope.mostrarAgregar=false;
	}
	varScope.CleanText=function(){
		varScope.newProduct.id=0;
		varScope.newProduct.producto="";
		varScope.newProduct.tamanio="";
		varScope.newProduct.cantidad="";
		varScope.newProduct.tienda="";
	}


	/*
	varScope.product=[{
		id:0,
		producto:"",
		tamanio :"",
		cantidad:0,
		tienda:""
	}];
	*/
});