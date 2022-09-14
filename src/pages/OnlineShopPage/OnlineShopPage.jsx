import { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import * as productsAPI from '../../utilities/products-api';
import * as ordersAPI from '../../utilities/orders-api';
import ProductList from "../../components/ProductList/ProductList";
import OrderDetail from '../../components/OrderDetail/OrderDetail';

export default function OnlineShopPage({ user, setUSer}) {
  const [productItems, setProductItems] = useState([]);
  const [cart, setCart] = useState(null);
  const navigate = useNavigate();

  useEffect(function () {
    async function getProducts() {
      const products = await productsAPI.getAll();
      setProductItems(products);
    }
    getProducts();
    async function getCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart);
    }
    getCart();
  }, []);
 
  async function handleAddtoOrder(productId) {
    // 1. Call the addItemToCart function in ordersAPI, passing to it the productItemId, and assign the resolved promise to a variable named cart.
    {console.log(productId, "hello")}
    const updatedCart = await ordersAPI.addItemToCart(productId);
    // 2. Update the cart state with the updatedCart received from the server
    setCart(updatedCart);
  }

  async function handleChangeQty(productId, newQty) {
    const updatedCart = await ordersAPI.setItemQtyInCart(productId, newQty);
    setCart(updatedCart);

  }

  async function handleCheckout() {
    await ordersAPI.checkout();
    navigate('/orders');
  }

  console.log(cart, "hi")
  return (
    <>
      <ProductList
        productItems={productItems}
        handleAddtoOrder={handleAddtoOrder}
      />
      <OrderDetail
        order={cart}
        handleChangeQty={handleChangeQty}
        handleCheckout={handleCheckout}
      />
    </>
  );
}