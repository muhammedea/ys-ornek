/**
 * Main Module
 */
 
requirejs(['data', 'render-functions', 'shopping-cart'],
function (data, renderFunctions, shoppigCart) {
	var restaurantInfo =  document.getElementById('restaurantInfo');
	if (restaurantInfo) {
		restaurantInfo.innerHTML = data.getRestaurantData().ResultSet.DisplayName;
	}

	var shoppingCartElement = document.querySelector('.shoppingCart-products');
	shoppingCartElement.innerHTML = renderFunctions.renderShoppingCart( shoppigCart.getSelectedProducts() );

	var menuElement = document.querySelector('.menu');
	menuElement.innerHTML = renderFunctions.renderMenu( data.getFilteredProducts('') );

	var searchInputElement = document.querySelector('.searchBar > input');
	searchInputElement.onkeyup = function() {
		menuElement.innerHTML = renderFunctions.renderMenu( data.getFilteredProducts(searchInputElement.value) );
	}

});