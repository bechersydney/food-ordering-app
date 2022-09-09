import { useContext } from "react";
import "./App.css";
import Cart from "./components/cart/Cart";
import CartContext from "./components/context/cart-context";
import Header from "./components/layouts/Header";
import Meals from "./components/meals/Meals";
import ShopContextProvider from "./store/ShopProvider";

function App() {
    const { isCartShown } = useContext(CartContext);
    return (
        <ShopContextProvider>
            {isCartShown && <Cart />}
            <Header />
            <main>
                <Meals />
            </main>
        </ShopContextProvider>
    );
}

export default App;
