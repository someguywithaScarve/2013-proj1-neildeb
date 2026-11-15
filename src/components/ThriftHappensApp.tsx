import { useState } from 'react';
// data
import {products, type ClothingProduct} from '../data/data';
// components + types
import ClothingItemsContainer from "./ClothingItemsContainer";
import CheckoutContainer from "./CheckoutContainer";
import NavBar from "./NavBar"
import type { CartItem } from "../types/CartItem"


export default function ThriftHappensApp() {
    const [inventory, setInventory] = useState<ClothingProduct[]>(products);
    const [cart, setCart] = useState<CartItem[]>([]);
    
    function handleChangeQuantity (productID: number, amount: number) {
        setInventory(prevInventory =>
            prevInventory.map((product) => {
                const newQuantity = product.itemQuantity + amount;
                return (product.id === productID 
                    && newQuantity >= 0 
                    &&  newQuantity <= product.quantity
                ) ? {...product, itemQuantity: newQuantity} : product;
            })
        );
    }

   function handleAddToCart (cartItem: CartItem) {
        if(cartItem.checkoutQuantity <= 0) 
            return;
        setCart((prevCart) => {
            const existingItem = prevCart.find ((item) =>
                item.product.id === cartItem.product.id);
            if (existingItem) {
                return prevCart.map(item =>
                    item.product.id === cartItem.product.id ? 
                    {...item, 
                        checkoutQuantity: item.checkoutQuantity + cartItem.checkoutQuantity}
                        : item
                );
            }
            return [...prevCart, cartItem];
        });
        setInventory(prevInventory =>
            prevInventory.map(product => {
                if (product.id !== cartItem.product.id) 
                    return product;
                return {...product, 
                    quantity: product.quantity - cartItem.checkoutQuantity, itemQuantity: 0};
            })
        );
   }

   function handleRemoveFromCart (productID: number) {
        const cartItemToRemove = cart.find(item => 
            item.product.id === productID);
        if (!cartItemToRemove) 
            return;
        setCart(prevCart => 
            prevCart.filter(item => item.product.id !== productID)
        );
        setInventory(prevInventory => 
            prevInventory.map(product => {
                if (product.id !== productID) return product;
                return {...product, quantity: product.quantity + cartItemToRemove.checkoutQuantity};
            })
        );
   }

   function handleEmptyCheckout() {
        setInventory(prevInventory =>
            prevInventory.map(product=> {
                const cartItem = cart.find(item =>
                    item.product.id === product.id
                );
                if (!cartItem)
                    return{...product, itemQuantity: 0};
                return {...product, quantity: product.quantity + cartItem.checkoutQuantity, itemQuantity: 0};
            })
        );
        setCart([]);
   }

    return (
        <div className="ThriftHappens">
            <header>
                <NavBar cart={cart} />
            </header>
            <main> 
                <ClothingItemsContainer 
                    inventory={inventory}
                    handleChangeQuantity={handleChangeQuantity}
                    handleAddToCart={handleAddToCart}
                />
                <CheckoutContainer
                    cart={cart} 
                    handleRemoveFromCart={handleRemoveFromCart}
                    handleEmptyCheckout={handleEmptyCheckout}
                />
            </main>
        </div>
    )
}