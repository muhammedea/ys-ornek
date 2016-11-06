/**
 * Main Module
 */
 
requirejs(['data', 'render-functions', 'shoppig-cart'],
function (data, renderFunctions, shoppigCart) {
	var restaurantInfo =  document.getElementById('restaurantInfo');
	if (restaurantInfo) {
		restaurantInfo.innerHTML = data.getRestaurantData().ResultSet.DisplayName;
	}

	
});