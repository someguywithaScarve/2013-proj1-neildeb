import type { ClothingProduct } from "../data/data";
import type { CartItem } from "./ThriftHappensApp";

interface ClothingItemCardProps {
    product: ClothingProduct;
    handleChangeQuantity: (productID: number, amount: number) => void;
    handleAddToCart: (cartItem: CartItem) => void;
}

export default function ClothingItemCard({
    product,
    handleChangeQuantity,
    handleAddToCart
}: ClothingItemCardProps) {
    return (
        <div className="ItemCard">
            <img src={product.image}
            alt={product.name}
            className="ItemImg" />

            <h2>{product.name}</h2>
            <p>Fit: {product.fit}</p>
            <p><i>Category: {product.category}</i></p>
            <p>Color: {product.color}</p>
            <p>Description: {product.description}</p>
            <p>Size: {product.size}</p>
            <p>Price: ${product.price.toFixed(2)}</p>
            <p>Stock Remaining: {product.quantity}</p>
            {product.quantity === 0 ? 
            (<p>Out of Stock</p>) : ( 
                    <>
                        <div>
                            <button onClick = {() => handleChangeQuantity(product.id, -1)}>{" - "}</button>
                            <span>{product.itemQuantity}</span>  
                            <button onClick = {() => handleChangeQuantity(product.id, 1)}>{" + "}</button>
                        </div>
                        <button onClick = {() => handleAddToCart({product, checkoutQuantity: product.itemQuantity  
                        })}> Add To Cart</button>
                    </>
            )}
        </div>
    );
}
