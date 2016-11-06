/**
 * Main Module
 */
 
requirejs(['data', 'render-functions', 'shopping-cart'],
function (data, renderFunctions, shoppigCart) {

	var restaurantInfo =  document.getElementById('restaurantInfo');
	if (restaurantInfo) {
		restaurantInfo.innerHTML = data.getRestaurantData().ResultSet.DisplayName;
	}


	function refreshShoppingCart() {
		var shoppingCartElement = document.querySelector('.shoppingCart-products');
		shoppingCartElement.innerHTML = renderFunctions.renderShoppingCart( shoppigCart.getSelectedProducts() );		
		var count_inputs = shoppingCartElement.querySelectorAll('input');
		for (var i = 0; i < count_inputs.length; i++) {
			count_inputs[i].addEventListener('change', function(event) {
				var productId = this.parentElement.parentElement.dataset.productid;
				var count = this.value;
				shoppigCart.updateProductCount(productId, count);
				document.querySelector('.sc-totalPrice').innerHTML = shoppigCart.getTotalPrice().toFixed(2) + ' TL';
			});
		}
		var remove_btns = shoppingCartElement.querySelectorAll('.sc-produc-remove');
		for (var i = 0; i < remove_btns.length; i++) {
			remove_btns[i].addEventListener('click', function(event) {
				var productId = this.parentElement.dataset.productid;
				shoppigCart.removeProduct(productId);
				refreshShoppingCart();
			});
		}
		document.querySelector('.sc-totalPrice').innerHTML = shoppigCart.getTotalPrice().toFixed(2) + ' TL';
	}
	refreshShoppingCart();


	var menuElement = document.querySelector('.menu');
	function refreshMenu(searchText) {
		menuElement.innerHTML = renderFunctions.renderMenu( data.getFilteredProducts(searchText) );
		var add_buttons = menuElement.querySelectorAll('.product-add > button');
		for (var i = 0; i < add_buttons.length; i++) {
			add_buttons[i].addEventListener('click', function(event) {
				var parent = this.parentElement;
				var productId = parent.dataset.productid;
				var count = parent.querySelector('input').value;
				shoppigCart.addProduct(productId, count);
				refreshShoppingCart();
			});
		}
	}
	refreshMenu('');


	var searchInputElement = document.querySelector('.searchBar > input');
	searchInputElement.onkeyup = function() {
		refreshMenu( searchInputElement.value );
	};

});