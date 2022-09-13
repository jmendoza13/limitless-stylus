import LineItem from '../LineItem/LineItem';

// Used to display the details of any order, including the cart (unpaid order)
export default function OrderDetail({ order }) {
  if (!order) return null;

  console.log(order)
  // const lineProducts = order.lineProducts.map(product =>
  //   <LineItem 
  //     product={product}
      
  //     key={product._id}
  //   />
  // );

  return (
    <h1>orderpage</h1>
          // {lineProducts}
  );
}