app.value("products", []);
 app.service("productService",['$http', '$q', function($http,$q) {

 	 var varServices = this;
 	 varServices.productsReturn =[];
 	 varServices.c = 1;

 	varServices.AddProduct=function(products){

 		var createVenta = false;
 		var defer = $q.defer();

 		//products.id=varServices.cuniq();
		//varServices.productsReturn.push(angular.copy(products));

		var defer = $q.defer();  

		var request = $http({
			method: 'POST',
			url: 'http://localhost:3333/api/ventas',
			data:  {"producto":products.producto, "tamano": products.tamanio,"cantidad":products.cantidad,"tienda":products.tienda, "precio": products.precio}
		});

		request.success(function(response, status){

			if(status === 200){

				createVenta=response.success;
			} 

			defer.resolve(createVenta);
		 });
		
		request.error(function(data){

			defer.resolve(false);
		});

		return defer.promise;
	}


	varServices.GetSales=function(){
		var defer = $q.defer();
		var promise =defer.promise;
		var request = $http({
			method: 'GET',
			url: 'http://localhost:3333/api/ventas'
		});
		request.success(function(data,status){

/*
			if(status === 200){

				//angular.forEach(response.ventas, function(value){
					
					varServices.productsReturn=response.ventas;
				//});
			} 
*/			defer.resolve(data.ventas);

			//defer.resolve(varServices.productsReturn);
		 });
		
		request.error(function(data){

			defer.resolve([]);
		});

		return promise;


	}
	
 	varServices.DeleteProduct=function(product,products){
		var productNew =[];
		angular.forEach(products, function(value){
			if(product.id!=value.id){
				productNew.push(angular.copy(value));
			}
		});
		
		return productNew;
	}

	
	varServices.cuniq=function () {
	    var d = new Date(),
	        m = d.getMilliseconds() + "",
	        u =  m + d.getMilliseconds();

	    return u;
	}

 }]);