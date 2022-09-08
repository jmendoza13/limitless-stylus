import ProductListItem from "../ProductListItem/ProductListItem"

export default function ProductList({ productItems }) {
    const products = productItems.map(product =>
        <ProductListItem
            key={product._id}
            productItem={product}
        />
    );
    return (
        <>
            {products}
            {console.log(products, 'tacos')}
        </>
    )

}
