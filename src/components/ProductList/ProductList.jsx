import ProductListItem from "../ProductListItem/ProductListItem"

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
            {products}
        </>
    )

}
