const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = require('./productSchema');

const lineProductSchema = new Schema({
    qty: { type: Number, default: 1 },
    product: productSchema
  }, {
    timestamps: true,
    toJSON: { virtuals: true }
  });
  
  lineProductSchema.virtual('extPrice').get(function() {
    // 'this' is the lineItem subdoc
    return this.qty * this.product.price;
  });
  
  const orderSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    lineProducts: [lineProductSchema],
    isPaid: { type: Boolean, default: false }
  }, {
    timestamps: true,
    toJSON: { virtuals: true }
  });
  
  orderSchema.virtual('orderTotal').get(function() {
    return this.lineProducts.reduce((total, product) => total + product.extPrice, 0);
  });
  
  orderSchema.virtual('totalQty').get(function() {
    return this.lineProducts.reduce((total, product) => total + product.qty, 0);
  });
  
  orderSchema.virtual('orderId').get(function() {
    return this.id.slice(-6).toUpperCase();
  });
  
  orderSchema.statics.getCart = function(userId) {
    // 'this' is bound to the model (don't use an arrow function)
    // return the promise that resolves to a cart (the user's unpaid order)
    return this.findOneAndUpdate(
      // query
      { user: userId, isPaid: false },
      // update - in the case the order (cart) is upserted
      { user: userId },
      // upsert option creates the doc if it doesn't exist!
      { upsert: true, new: true }
    );
  };
  
  orderSchema.methods.addProductToCart = async function(productId) {
    const cart = this;
    const lineProduct = cart.lineProducts.find(lineProduct => lineProduct.product._id.equals(productId));
    if (lineProduct) {
      lineProduct.qty++;
    } else {
      // Copy the Product from the Products collection
      // Obtain the Product model
      const Product = mongoose.model('Product');
      const product = await Product.findById(productId);
      const newLineProduct = { product };
      cart.lineProducts.push(newLineProduct);
    }
    // Return the promise that's returned by the save method
    return cart.save();
  };
  
  orderSchema.methods.setItemQty = function(productId, newQty) {
    // this keyword is bound to the cart (order doc)
    const cart = this;
    // Find the line item in the cart for the menu item
    const lineProduct = cart.lineProducts.find(lineProduct => lineProduct.product._id.equals(productId));
    if (lineProduct && newQty <= 0) {
      // Calling remove, removes itself from the cart.lineProducts array
      lineProduct.remove();
    } else if (lineProduct) {
      // Set the new qty - positive value is assured thanks to prev if
      lineProduct.qty = newQty;
    }
    // return the save() method's promise
    return cart.save();
  };
  
  
  module.exports = mongoose.model('Order', orderSchema);