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

	return {
		getRestaurantData: getRestaurantData,
		getMenuData: getMenuData
	};
});