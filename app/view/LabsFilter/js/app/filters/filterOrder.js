app.filter('myFilterOrder', function() {

  // In the return function, we must pass in a single parameter which will be the data we will work on.
  // We have the ability to support multiple other parameters that can be passed into the filter optionally
  return function(productfilter, column ,typeOrd) {

    if(typeOrd == undefined) typeOrd = true;  // default to true

	if(typeOrd) {
	productfilter.sort(function (a, b) {
	   return a[column] > b[column];
	});
	}
	else {
	productfilter.sort(function (a, b) {
	   return a[column] < b[column];
	});
	}

    return productfilter;

  }

});