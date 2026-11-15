import type { ClothingProduct } from "../data/data";

interface ClothingItemCardProps {
    product: ClothingProduct;
    //handle
}

export default function ClothingItemCard({
    product
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
        </div>
    )
})
