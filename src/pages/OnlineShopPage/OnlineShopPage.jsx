import { useState, useEffect } from "react";
// import { Link, useNavigate } from 'react-router-dom';
import * as productsAPI from '../../utilities/products-api';
import * as ordersAPI from '../../utilities/orders-api';
import ProductList from "../../components/ProductList/ProductList";
import OrderDetail from '../../components/OrderDetail/OrderDetail';

export default function OnlineShopPage() {
  const [productItems, setProductItems] = useState([]);
  const [cart, setCart] = useState(null);
  // const navigate = useNavigate();

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

  async function handleAddtoOrder(productItemId) {
    // 1. Call the addItemToCart function in ordersAPI, passing to it the productItemId, and assign the resolved promise to a variable named cart.
    const updatedCart = await ordersAPI.addItemToCart(productItemId);
    // 2. Update the cart state with the updatedCart received from the server
    setCart(updatedCart);
  }

  return (
    <>
      <ProductList
        productItems={productItems}
        handleAddtoOrder={handleAddtoOrder}
      />
      { <OrderDetail
        order={ cart }
      /> }
    </>
  );
}