import { useContext } from "react";
import CartIcon from "../cart/CartIcon";
import CartContext from "../context/cart-context";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = ({ label, type }) => {
    const ctx = useContext(CartContext);
    return (
        <button
            className={classes.button}
            type={type || "button"}
            onClick={ctx.showCart}
        >
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>{label}</span>
            <span className={classes.badge}>3</span>
        </button>
    );
};
export default HeaderCartButton;
