/**
 *  Shopping Cart
 */

define(['data'], function (data) {

	// selected products (private)
	// [ {Product: object, Count: number} ]
	var _selected_products = [];

	/**
	 * Finds selected product in shopping list. (private function)
	 *
	 * @param      {string}  id      The identifier
	 * @return     {object}  The selected product by identifier.
	 */
	function _get_selected_product_by_id(id) {
		for (var i = _selected_products.length - 1; i >= 0; i--) {
			if (_selected_products[i].Product.ProductId === id) {
				return _selected_products[i];
			}
		}
		return null;
	}


	/**
	 * Adds a product to the shopping cart. If it exists, increments the count.
	 *
	 * @param      {string}  productId  The product id
	 * @param      {number}  count      The count
	 */
	function addProduct(productId, count) {
		var selected_product = _get_selected_product_by_id(productId);
		if (selected_product) {
			selected_product.Count += count;
		}
		else {
			var product = data.getProductById(productId);
			if (product) {
				_selected_products.push({Product: product, Count: count});
			}
		}
	}


	/**
	 * Removes a product from shopping cart.
	 *
	 * @param      {string}  productId  The product id
	 */
	function removeProduct(productId) {
		for (var i = _selected_products.length - 1; i >= 0; i--) {
			if (_selected_products[i].Product.ProductId === id) {
				_selected_products.splice(i, 1);
				return;
			}
		}
	}


	/**
	 * Changes the count of a selected product
	 *
	 * @param      {<type>}  productId  The product id
	 * @param      {<type>}  count      The count
	 */
	function updateProductCount(productId, count) {
		var selected_product = _get_selected_product_by_id(productId);
		if (selected_product) {
			selected_product.Count = count;
		}
	}


	/**
	 * Gets the selected products in the shopping cart.
	 *
	 * @return     {Array}  The selected products.
	 */
	function getSelectedProducts() {
		return _selected_products;
	}



	return {
		addProduct: addProduct,
		removeProduct: removeProduct,
		updateProductCount: updateProductCount,
		getSelectedProducts: getSelectedProducts
	};
	
});