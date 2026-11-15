import { ClothingProduct } from "../data/data"
import ClothingItemCard from "./ClothingItemCard";

interface ClothingItemsContainerProps {
    inventory: ClothingProduct[];
} 

export default function ClothingItemsContainer({
    inventory,
}: ClothingItemsContainerProps) {
    return (
        <div className="ItemContainer">
            <h2>Clothing in stock</h2>
            <div>
                {inventory.map((product) => (
                    <ClothingItemCard 
                    key={product.id}
                    product={product}
                    />
                ))}
            </div>
        </div>
    )
}