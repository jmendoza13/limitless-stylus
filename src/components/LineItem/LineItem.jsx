export default function LineItem({ product }){

   
    return ( 
    <>
    <div className="product">
    <span>{product.product.name}</span>    
    <span>{product.product.imageUrl}</span>    
    <span>{product.product.description}</span>    
    <span>{product.product.price}</span>    
    </div>
    </>
)
    }