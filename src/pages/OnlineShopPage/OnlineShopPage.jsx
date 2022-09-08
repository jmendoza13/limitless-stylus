import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from 'react-router-dom';
import * as productsAPI from '../../utilities/products-api';
import ProductList from "../../components/ProductList/ProductList";

export default function OnlineShopPage() {
  const [productItems, setProductItems] = useState([]);
  const navigate = useNavigate();

  useEffect(function () {
    async function getProducts() {
      const products = await productsAPI.getAll();
      setProductItems(products);
    }
    getProducts();
  }, []);

  return (
    <>
      <ProductList
        productItems={productItems}
      />
    </>
  );
}