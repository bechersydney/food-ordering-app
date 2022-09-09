import { useContext } from "react";
import ReactDOM from "react-dom";
import CartContext from "../context/cart-context";

import classes from "./Modal.module.css";

const Backdrop = () => {
    const { hideCart } = useContext(CartContext);
    return <div className={classes.backdrop} onClick={hideCart}></div>;
};

const ModalOverlay = (props) => {
    return <div className={classes.modal}>{props.children}</div>;
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop />, portalElement)}
            {ReactDOM.createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>,
                portalElement
            )}
        </>
    );
};

export default Modal;
