import { useContext } from "react";
import ShopContext from "../../store/shop-context";
import CartContext from "../context/cart-context";
import Modal from "../ui/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = () => {
    const { items, totalAmount, addItem, removeItem } = useContext(ShopContext);

    const onAddItemHandler = (item) => {
        addItem({ ...item, amount: 1 });
    };
    const onRemoveItemHandler = (id) => {
        removeItem(id);
    };

    const cartItems = (
        <ul className={classes["cart-items"]}>
            {items.map((item) => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    price={item.price}
                    amount={item.amount}
                    onAdd={() => onAddItemHandler(item)}
                    onRemove={() => onRemoveItemHandler(item.id)} // make sure receive the item and configurable args
                />
            ))}
        </ul>
    );

    const { hideCart } = useContext(CartContext);

    return (
        <Modal>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{`$${Math.abs(totalAmount).toFixed(2)}`}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes["button--alt"]} onClick={hideCart}>
                    Close
                </button>
                {items.length !== 0 && (
                    <button className={classes.button}>Order</button>
                )}
            </div>
        </Modal>
    );
};
export default Cart;
