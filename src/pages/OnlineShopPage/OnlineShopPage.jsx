import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from 'react-router-dom';
import * as productsAPI from '../../utilities/products-api';
import ProductList from "../../components/ProductList/ProductList";

export default function OnlineShopPage({ user, setUser }) {
  const [productItems, setProductItens] = useState([]);
  const navigate = useNavigate();

  useEffect(function () {
    async function getProducts() {
      const products = await productsAPI.getAll();
      setProductItens(products);
    }
    getProducts();
    console.log(getProducts())

  }, []);

  return (
    <>
      <ProductList
        productItems={productItems}
      />
    </>
  );
}