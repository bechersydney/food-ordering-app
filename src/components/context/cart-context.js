import React, { useState } from "react";

const CartContext = React.createContext({
    isCartShown: null,
    hideCart: () => {},
    showCart: () => {},
});

export const CartProvider = (props) => {
    const [isCartShown, setShowCart] = useState();
    const hideCartHandler = () => setShowCart(false);
    const showCartHandler = () => {
        return setShowCart(true);
    };

    return (
        <CartContext.Provider
            value={{
                isCartShown,
                hideCart: hideCartHandler,
                showCart: showCartHandler,
            }}
        >
            {props.children}
        </CartContext.Provider>
    );
};
export default CartContext;
