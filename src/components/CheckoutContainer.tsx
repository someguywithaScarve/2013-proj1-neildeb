import type { CartItem } from "./ThriftHappensApp";
import CheckoutCard from "./CheckoutCard";

interface CheckoutContainerProps {
    cart: CartItem[];
}

export default function CheckoutContainer({ cart }: CheckoutContainerProps) {
    return (
        <section className="CheckoutContainer">
            <h2>Checkout</h2>
            {cart.length === 0 ? (<p>Cart is empty!</p>) : (
                <>
                {cart.map((item) => (
                    <CheckoutCard
                    key={item.product.id}
                    cartItem={item} 
                    />
                ))}
                <h3>Total :$
                    {cart.reduce((total, item) =>
                    total + (item.product.price * item.checkoutQuantity), 0).toFixed(2)
                    }
                </h3>
            </>
            )}
        </section>
    );
}