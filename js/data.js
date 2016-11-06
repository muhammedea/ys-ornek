/**
 *  Data service
 */

define(['restaurant-data', 'menu-data'], function (restaurantData, menuData) {

	/**
	 * Gets the example restaurant data
	 *
	 * @return     {object}  restaurant info
	 */
	function getRestaurantData() {
		return restaurantData.d;
	}

	/**
	 * Gets the example menu data.
	 *
	 * @return     {Object}  The menu data.
	 */
	function getMenuData() {
		return menuData.d;
	}

	/**
	 * Gets the filtered products by search text.
	 *
	 * @param      {string}  searchText  The search text
	 * @return     {Array}   The filtered products.
	 */
	function getFilteredProducts(searchText) {
		var result = JSON.parse( JSON.stringify(menuData.d.ResultSet) ); //copy menu data
		for (var i = result.length - 1; i >= 0; i--) {
			for (var j = result[i].Products.length - 1; j >= 0; j--) {
				var current_name = result[i].Products[j].DisplayName;
				if (current_name.toLowerCase().indexOf( searchText.toLowerCase() ) === -1) {
					result[i].Products.splice(j, 1);
				}
			}
			if (result[i].Products.length === 0) {
				result.splice(i, 1);
			}
		}
		return result;
	}

	/**
	 * Gets the product by ProductId.
	 *
	 * @param      {string}  searchId  ID of product.
	 * @return     {object}  The product object.
	 */
	function getProductById(searchId) {
		var menu = menuData.d.ResultSet;
		for (var i = menu.length - 1; i >= 0; i--) {
			for (var j = menu[i].Products.length - 1; j >= 0; j--) {
				if (menu[i].Products[j].ProductId == searchId) {
					return menu[i].Products[j];
				}
			}
		}
		return null;
	}



	return {
		getRestaurantData: getRestaurantData,
		getMenuData: getMenuData,
		getFilteredProducts: getFilteredProducts,
		getProductById: getProductById
	};

});