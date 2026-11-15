import { useState } from 'react';
import {ClothingProduct} from '../data/data';
// components
import ClothingItemsContainer from "./ClothingItemsContainer";
import CheckoutContainer from "./CheckoutContainer";

export interface ClothingProductData {
    data: ClothingProduct[];
}

export interface CartItem {
    id: number;
    name: string;
    image: string;
    price: number;
    quantity: number;
}

export default function ThriftHappensApp() {
    const [inventory, setInventory] = useState<ClothingProduct[]>(products);
    const [cart, setCart] = useState<CartItem[]>([]);
    
    return (
        <div className="thrift-happens">
            <header>
                <img src="./assets/images/logo.png" alt="logo" />
            </header>
            <main> 
                <ClothingItemsContainer 
                inventory={inventory} />

                <CheckoutContainer
                cart={cart} />
            </main>
        </div>
    )
}