import { useContext, useEffect, useState } from "react";
import ShopContext from "../../store/shop-context";
import CartIcon from "../cart/CartIcon";
import CartContext from "../context/cart-context";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = ({ label, type }) => {
    const ctx = useContext(CartContext);
    const { items } = useContext(ShopContext);
    const [btnHighlighted, setBtnHiglighted] = useState(false);
    useEffect(() => {
        if (items.length === 0) return;
        setBtnHiglighted(true);
        const timer = setTimeout(() => {
            setBtnHiglighted(false);
        }, 300);
        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    const numberOfItems = items.reduce((total, item) => total + item.amount, 0);
    const btnClasses = `${classes.button} ${
        btnHighlighted ? classes.bump : ""
    }`;
    return (
        <button
            className={btnClasses}
            type={type || "button"}
            onClick={ctx.showCart}
        >
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>{label}</span>
            <span className={classes.badge}>{numberOfItems}</span>
        </button>
    );
};
export default HeaderCartButton;
