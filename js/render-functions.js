/**
 * Render Functions
 * This functions takes data and creates HTML for that data
 */

define(function() {

	/**
	 * Creates HTML for product (private function)
	 *
	 * @param      {object}  product  The product
	 * @return     {string}  The product HTML.
	 */
	function _get_product_html(product) {
		var html = 
			"<div class=\"product\">" +
				"<div class=\"product-add\" data-productid=\"" + product.ProductId + "\">" +
					"<input type=\"number\" value=\"1\">" +
        			"<button type=\"button\">+</button>" +
				"</div>" +
				"<div class=\"product-info\">" +
					"<div class=\"product-name\">" + product.DisplayName + "</div>" +
					"<div class=\"product-desc\">" + product.Description + "</div>" +
				"</div>" +
				"<div class=\"product-price\">" + product.ExtendedPrice + " TL</div>" +
			"</div>";
		return html;
	}

	/**
	 * This function takes menu data and creates HTML code
	 *
	 * @return     {string}  HTML code
	 */
	function renderMenu(categories) {
		var html = '';
		for (var i = 0; i < categories.length; i++) {
			var products_html = '';
			for (var j = 0; j < categories[i].Products.length; j++) {
				products_html += _get_product_html( categories[i].Products[j] );
			}
			html += 
				"<div class=\"category\">" +
					"<div class=\"category-header\">" + categories[i].DisplayName + "</div>" +
					"<div class=\"category-body\">" +
						products_html +
					"</div>" +
				"</div>";
		}
		return html;
	}


	/**
	 * Creates shopping cart product html
	 *
	 * @param      {object}  selected_product  The product and count
	 * @return     {string}  The html.
	 */
	function _get_sc_html(selected_product) {
		var html = 
				"<tr data-productid=\"" + selected_product.Product.ProductId + "\">" +
					"<td class=\"sc-product-name\">" + selected_product.Product.DisplayName + "</td>" +
					"<td class=\"sc-produc-count\"><input type=\"number\" name=\"\" value=\"" + selected_product.Count + "\" ></td>" +
					"<td class=\"sc-produc-price\">" + selected_product.Product.ExtendedPrice + "</td>" +
					"<td class=\"sc-produc-remove\">x</td>" +
				"</tr>";
		return html;
	}

	/**
	 * Takes selected product and counts, creates HTML code
	 *
	 * @return     {string}  HTML code
	 */
	function renderShoppingCart(selectedProducts) {
		if (selectedProducts.length > 0) {
			var products_html = '<table>';
			for (var i = 0; i < selectedProducts.length; i++) {
				products_html += _get_sc_html( selectedProducts[i] );
			}
			products_html += '</table>';
			return products_html;
		}
		else {
			return '<div class="text-center">Sepetiniz Boş.</div>';
		}
	}

	return {
		renderMenu: renderMenu,
		renderShoppingCart: renderShoppingCart
	}
});