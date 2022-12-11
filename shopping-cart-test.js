// let assert = require('assert'); <Mocha>
let { expect } = require('chai'); // <Chai>
let ShoppingCart = require('./shopping-cart');

describe('The shopping cart', () => {
  // Test 1
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

      expect(shoppingCart.subtotal).to.equal(95);
    });
  });

// Test 2  
describe('add method should', () => {
  it('store the item in the shopping cart', () => {
    let shoppingCart = new ShoppingCart([
      {
        id: 1,
        quantity: 4,
        price: 50,
      },
    ]);

    shoppingCart.add({
        id: 2,
        quantity: 2,
        price: 30,
      });

      expect(shoppingCart._items).to.be.an('array');
      expect(shoppingCart._items).to.deep.equal([
        {
          id: 1,
          quantity: 4,
          price: 50,
        },
        {
          id: 2,
          quantity: 2,
          price: 30,
        },
      ]);
    });
  });

  // Test 3
    it ('return the item that was just stored in the cart', ()  => {
      let shoppingCart = new ShoppingCart([
        {
          id: 1,
          quantity: 4,
          price: 50,
        },
      ]);

      let item = {
        id: 2,
        quantity: 2,
        price: 30,
      };
  
      let addedItem = shoppingCart.add(item);
      expect(addedItem).to.equal(item);
  
    });
