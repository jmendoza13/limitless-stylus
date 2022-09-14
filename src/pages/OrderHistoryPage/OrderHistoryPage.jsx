import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as ordersAPI from '../../utilities/orders-api';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import OrderList from '../../components/OrderList/OrderList';

export default function OrderHistoryPage({ user, setUser }) {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(function() {
    async function getOrders() {
      const orders = await ordersAPI.getAllForUser();
      setOrders(orders);
      setSelectedOrder(orders[0]);
    }
    getOrders();
  }, []);

  return (
    <main className="OrderHistoryPage">
      <br></br><br></br><br></br>
      <aside>
        <Link to="/OnlineShop" className="btn btn-primary btn-lg">NEW ORDER</Link>
      </aside>
      {/* Render an OrderList component (needs to be coded) */}
      <br></br>
      <OrderList
        orders={orders}
        selectedOrder={selectedOrder}
        setSelectedOrder={setSelectedOrder}
      />
      {/* Render the existing OrderDetail component */}
      <OrderDetail order={selectedOrder} />
    </main>
  );
}