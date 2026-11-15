import type { CartItem } from "../types/CartItem"
import CheckoutCard from "./CheckoutCard";

interface CheckoutContainerProps {
    cart: CartItem[];
    handleRemoveFromCart: (productID: number) => void;
    handleEmptyCheckout: () => void;
}

export default function CheckoutContainer({ 
    cart,
    handleRemoveFromCart,
    handleEmptyCheckout
 }: CheckoutContainerProps) {
    return (
        <section className="CheckoutContainer">
            <h2>Checkout</h2>
            {cart.length === 0 ? (<p>Cart is empty!</p>) : (
                <>
                {cart.map((item) => (
                    <CheckoutCard
                    key={item.product.id}
                    cartItem={item} 
                    handleRemoveFromCart={handleRemoveFromCart}
                    />
                ))}
                <h3>Total :$
                    {cart.reduce((total, item) =>
                    total + (item.product.price * item.checkoutQuantity), 0).toFixed(2)
                    }
                </h3>
                <button onClick={handleEmptyCheckout}>Empty checkout?</button>
            </>
            )}
        </section>
    );
}