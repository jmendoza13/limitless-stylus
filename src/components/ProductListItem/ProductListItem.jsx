export default function ProductListItem({ productItem }) {
    return (
        <>
            <div className="MenuListItem">
                <div className="name">{productItem.name}</div>
                <div className="image"><img src={productItem.imageUrl}/></div>
                <div className="description">{productItem.description}</div>
                <div className="price">{productItem.price}</div>
                    
                </div>
            
        </>
    )

}
