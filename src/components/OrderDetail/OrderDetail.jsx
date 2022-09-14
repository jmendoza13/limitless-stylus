import LineProduct from '../LineProduct/LineProduct';
import './OrderDetail.css'

// Used to display the details of any order, including the cart (unpaid order)
export default function OrderDetail({ order, handleChangeQty, handleCheckout }) {
  if (!order) return null;

  console.log(order, "hello")
  const ProductMap = order.lineProducts.map(product =>
    <LineProduct 
    lineProduct={product}
    isPaid={order.isPaid}
    handleChangeQty={handleChangeQty}
    handleCheckout={handleCheckout}
    key={product._id}
    />
    );
    
  return (
    <div className='OrderDetail'>
            {ProductMap.length? 
            <>
            <div className='hi' >
                <div className='heading'>
                    <h3>New Order - {order.orderId}</h3>
                </div>
                <main className='item1-order'>
                    {ProductMap}
                </main>    
                    <button 
                    className='total'
                    onClick={handleCheckout}
                    disabled={!ProductMap.length}
                    style={{ backgroundColor:"#152238", color:"white"}}
                    >Checkout</button>
                    &nbsp;&nbsp;&nbsp;
                    <span>QTY: {order.totalQty}</span>
                    &nbsp;&nbsp;&nbsp;
                    <span>Total: ${order.orderTotal.toFixed(2)}</span>
            </div>
            </>
            : false
            }
        </div>
  );
}


