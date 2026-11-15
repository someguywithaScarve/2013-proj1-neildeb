import type { CartItem } from "../types/CartItem"

interface CheckoutCardProps { 
    cartItem: CartItem;
    handleRemoveFromCart: (productID: number) => void;
 }

export default function CheckoutCard({ 
    cartItem,
    handleRemoveFromCart,
 }: CheckoutCardProps) {
    return (
        <article className="CheckoutCard">
            <img src={cartItem.product.image}
            alt={cartItem.product.name}
            className="CheckoutItemImg" />
            <h3>{cartItem.product.name}</h3>
            <p>Price: ${cartItem.product.price.toFixed(2)}</p>
            <p>Quantity: {cartItem.checkoutQuantity}</p>
            <p>Item Subtotal: ${(cartItem.product.price * cartItem.checkoutQuantity).toFixed(2)}</p>
            <button onClick={() => handleRemoveFromCart(cartItem.product.id)}>Remove?</button>
        </article>
    );
}