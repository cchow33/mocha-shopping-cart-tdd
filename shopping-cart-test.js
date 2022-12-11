let assert = require('assert');
let ShoppingCart = require('./shopping-cart');

describe('The shopping cart', () => {
  describe('subtotal should', () => {
    it ('be 0 if no items are passed in', () => {

      // Arrange - setting up the code to test a situation
      let shoppingCart = new ShoppingCart();
    
      // Act
      let subtotal = shoppingCart.subtotal;

      // Assert
      assert.equal(subtotal, 0);

    });
  });
});
