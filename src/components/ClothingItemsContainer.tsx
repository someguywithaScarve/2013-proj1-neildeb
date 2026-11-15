import type { ClothingProduct } from "../data/data"
import type { CartItem } from "../types/CartItem"
import ClothingItemCard from "./ClothingItemCard";

interface ClothingItemsContainerProps {
    inventory: ClothingProduct[];
    handleChangeQuantity: (productID: number, amount: number) => void;
    handleAddToCart: (cartItem: CartItem) => void;
} 

export default function ClothingItemsContainer({
    inventory,
    handleChangeQuantity,
    handleAddToCart
}: ClothingItemsContainerProps) {
    return (
        <div className="ItemContainer">
            <h2>Clothing in stock</h2>
            <div className="ItemGrid">
                {inventory.map((product) => (
                    <ClothingItemCard 
                    key={product.id}
                    product={product}
                    handleChangeQuantity={handleChangeQuantity}
                    handleAddToCart={handleAddToCart}
                    />
                ))}
            </div>
        </div>
    )
}