import { useContext } from "react";
import CartContext from "../context/cart-context";
import Modal from "../ui/Modal";
import classes from "./Cart.module.css";

const Cart = () => {
    const cartItems = [
        { id: "c2", name: "sushi", amount: 2, price: 12.32 },
    ].map((item) => (
        <ul key={item.id} className={classes["cart-items"]}>
            <li>{item.name}</li>
        </ul>
    ));
    const { hideCart } = useContext(CartContext);

    return (
        <Modal>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={classes.actions}>
                <button className={classes["button--alt"]} onClick={hideCart}>
                    Close
                </button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    );
};
export default Cart;
