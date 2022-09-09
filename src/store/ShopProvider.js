import { useReducer } from "react";
import ShopContext from "./shop-context";

const defaultCartState = {
    items: [],
    totalAmount: 0,
};

const cartReducer = (state, action) => {
    switch (action.type) {
        case "add-item":
            const updatedTotal =
                state.totalAmount + action.item.price * action.item.amount;
            const existingItemIndex = state.items.findIndex(
                (item) => item.id === action.item.id
            );

            const existingItem = state.items[existingItemIndex];

            let updatedItems;
            if (existingItem) {
                const updatedItem = {
                    ...existingItem,
                    amount: existingItem.amount + action.item.amount,
                };
                updatedItems = [...state.items];
                updatedItems[existingItemIndex] = updatedItem;
            } else {
                updatedItems = [action.item, ...state.items];
            }
            return { items: updatedItems, totalAmount: updatedTotal };

        case "remove-item":
            const existingItemRemoveIndex = state.items.findIndex(
                (item) => item.id === action.id
            );

            const existingRemoveItem = state.items[existingItemRemoveIndex];
            const updatedTotalAmount =
                state.totalAmount - existingRemoveItem.price;
            let newItems;
            if (existingRemoveItem.amount <= 1) {
                newItems = state.items.filter((item) => item.id !== action.id);
            } else {
                const newItem = {
                    ...existingRemoveItem,
                    amount: existingRemoveItem.amount - 1,
                };
                newItems = [...state.items];
                newItems[existingItemRemoveIndex] = newItem;
            }
            return { items: newItems, totalAmount: updatedTotalAmount };
        default:
            console.log("error");
    }

    return defaultCartState;
};

const ShopContextProvider = (props) => {
    const [state, dispatch] = useReducer(cartReducer, defaultCartState);

    const addCartItemHandler = (item) => dispatch({ type: "add-item", item });

    const removeCartItemHandler = (id) => dispatch({ type: "remove-item", id });

    const ctx = {
        items: state.items,
        totalAmount: state.totalAmount,
        addItem: addCartItemHandler,
        removeItem: removeCartItemHandler,
    };

    return (
        <ShopContext.Provider value={ctx}>
            {props.children}
        </ShopContext.Provider>
    );
};
export default ShopContextProvider;
