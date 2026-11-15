import type { CartItem } from "../types/CartItem";
import logo from "../assets/images/logo.png";

interface NavBarProps { cart: CartItem[]; }

export default function NavBar({ cart }: NavBarProps) {
    const itemCount = cart.reduce((total, item) => total + item.checkoutQuantity, 0);
    return (
        <nav className="NavBar">
            <div className="NavLogo">
                 <img
                    src={logo}
                    alt="Thrift Happens Logo"
                />
            </div>

            <h1>
                Thrift Happens
            </h1>

            <div className="CartCounter">

                <span>
                    Cart Items:
                    {" "}
                    {itemCount}
                </span>

            </div>

        </nav>

    );
}