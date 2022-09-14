import ProductListItem from "../ProductListItem/ProductListItem"
import "./ProductList.css"

export default function ProductList({ productItems, handleAddtoOrder }) {
    const products = productItems.map(product =>
        <ProductListItem
            key={product._id}
            productItem={product}
            handleAddtoOrder={handleAddtoOrder}
        />
    );
    return (
        <>
        <br></br><br></br><br></br>
        <div className="row row-cols-3 row-cols-md-3">
            {products}
        </div>
        </>
    )

}
