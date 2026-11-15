import type { ClothingProduct } from "../data/data";

export interface CartItem {
    product: ClothingProduct;
    checkoutQuantity: number;
}