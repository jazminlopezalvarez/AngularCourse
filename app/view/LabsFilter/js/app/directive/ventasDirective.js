app.directive('myDirectiveDiv', function () {
 return {
 restrict : 'E',
 template: '{{objproduct.producto}}   {{objproduct.tamanio}}  {{objproduct.cantidad}}  {{objproduct.tienda}} <button type="button" ng-click="varScope.EliminarProduct(objproduct)">Eliminar</button> '
 }
});
