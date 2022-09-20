import { useState } from "react";
import { useContext } from "react";
import ShopContext from "../../store/shop-context";
import CartContext from "../context/cart-context";
import Modal from "../ui/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = () => {
    const [isCheckout, setCheckout] = useState(false);
    const [hasError, setError] = useState();
    const { items, totalAmount, addItem, removeItem } = useContext(ShopContext);

    const onAddItemHandler = (item) => {
        addItem({ ...item, amount: 1 });
    };
    const onRemoveItemHandler = (id) => {
        removeItem(id);
    };

    const orderHandler = () => {
        setCheckout(true);
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
    const submitDataHandler = async (userData) => {
        try {
            const res = await fetch(
                "https://react-food-delivery-4be3d-default-rtdb.firebaseio.com/user.json",
                {
                    method: "POST",
                    body: JSON.stringify({ userData, order: items }),
                    headers: {
                        "Content-Type": "Application/json",
                    },
                }
            );
            if (!res.ok) throw new Error("Something went wrong");
            const data = await res.json();
            console.log(data);
        } catch (e) {
            setError(e.message);
        }
    };

    return (
        <Modal>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{`$${Math.abs(totalAmount).toFixed(2)}`}</span>
            </div>
            {isCheckout && (
                <Checkout onSubmitData={submitDataHandler} onClick={hideCart} />
            )}
            {!isCheckout && (
                <div className={classes.actions}>
                    <button
                        className={classes["button--alt"]}
                        onClick={hideCart}
                    >
                        Close
                    </button>
                    {items.length !== 0 && (
                        <button
                            className={classes.button}
                            onClick={orderHandler}
                        >
                            Order
                        </button>
                    )}
                </div>
            )}
        </Modal>
    );
};
export default Cart;
