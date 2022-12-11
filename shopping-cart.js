// module.exports = class ShoppingCart {
//   get subtotal(){
//     return 0;
//   }
// };o                                                

module.exports = class ShoppingCart {
  constructor(items = []) {
    this._items = items;
  }
  get subtotal() {
    return this._items.reduce((accumulatedSubtotal, item) => {
      return accumulatedSubtotal + item.quantity * item.price;
    }, 0);
  }
};