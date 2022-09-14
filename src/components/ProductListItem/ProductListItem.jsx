import "./ProductListItem.css"

export default function ProductListItem({ productItem, handleAddtoOrder }) {
    return (
        <>
        <br></br><br></br><br></br>
            <div className="ProductListItem">
                <div className="card" style={{width: "19rem"}}>
                <div className="image" ><img src={productItem.imageUrl } style={{width: "19rem"}} /></div>
                <div className="name">{productItem.name}</div>
                <div className="description">{productItem.description}</div>
                <div className="price">{productItem.price}</div>
                <div className="buy">
                    <button type="button" className="btn btn-dark" onClick={() => handleAddtoOrder(productItem._id)} >
                        Add to Cart
                    </button>
                </div>
            </div>
            </div>
        </>
    )

}
