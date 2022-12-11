// let assert = require('assert'); <Mocha>
let { expect } = require('chai'); // <Chai>
let ShoppingCart = require('./shopping-cart');

describe('The shopping cart', () => {
  describe('subtotal should', () => {
    it ('be 0 if no items are passed in', () => {
      // Arrange - set up the code to test a situation
      let shoppingCart = new ShoppingCart();
      // Act
      let subtotal = shoppingCart.subtotal;
      // Assert - assert.equal(subtotal, 0); <Mocha>
      expect(subtotal).to.equal(0); // <Chai>
    
    });

    it ('be the sum of the price * quantity for all items', () => {

      let shoppingCart = new ShoppingCart([
        {
          id: 1,
          quantity: 5,
          price: 5
        },
        {
          id: 2,
          quantity: 4,
          price: 5
        },
        {
          id: 3,
          quantity: 1,
          price: 50
        }
      ]);
      // assert.equal(shoppingCart.subtotal, 95); <Mocha>
      expect(shoppingCart.subtotal).to.equal(95);
    });
  });
});

