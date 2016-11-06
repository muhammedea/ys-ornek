/**
 * Render Functions
 * This functions takes data and creates HTML for that data
 */

define(function() {

	/**
	 * Creates HTML for product (private function)
	 *
	 * @param      {<type>}  product  The product
	 * @return     {string}  The product HTML.
	 */
	function _get_product_html(product) {
		var html = 
			"<div class=\"product\">" +
				"<div class=\"product-add\">" +
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
	 * Takes selected product and counts, creates HTML code
	 *
	 * @return     {string}  HTML code
	 */
	function renderShoppingCart() {
		var html = 'Sepetiniz Boş.';
		return html;
	}

	return {
		renderMenu: renderMenu,
		renderShoppingCart: renderShoppingCart
	}
});