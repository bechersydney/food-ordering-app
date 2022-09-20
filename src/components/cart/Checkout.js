import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (txt) => !txt.trim();
const isFiveChars = (txt) => txt.trim().length === 5;

const Checkout = (props) => {
    const { onClick, onSubmitData } = props;
    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalCodeInputRef = useRef();
    const cityInputRef = useRef();
    const [inputValid, setValidityCheck] = useState({
        name: true,
        street: true,
        postal: true,
        city: true,
    });
    const onCheckoutSubmitHandler = (e) => {
        e.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPostal = postalCodeInputRef.current.value;
        const enteredCity = cityInputRef.current.value;
        const nameIsValid = !isEmpty(enteredName);
        const streetIsValid = !isEmpty(enteredStreet);
        const postalIsValid =
            !isEmpty(enteredPostal) && isFiveChars(enteredPostal);
        const cityIsValid = !isEmpty(enteredCity);

        setValidityCheck({
            name: nameIsValid,
            street: streetIsValid,
            postal: postalIsValid,
            city: cityIsValid,
        });

        // check if form is valid
        const formIsValid =
            nameIsValid && streetIsValid && postalIsValid && cityIsValid;
        if (!formIsValid) {
            return;
        }
        onSubmitData({
            name: enteredName,
            street: enteredStreet,
            postal: enteredPostal,
            city: enteredCity,
        });
    };
    return (
        <form className={classes.form} onSubmit={onCheckoutSubmitHandler}>
            <div
                className={`${classes.control} ${
                    !inputValid.name ? classes.invalid : ""
                }`}
            >
                <label htmlFor="">Your Name</label>
                <input type="text" name="" id="" ref={nameInputRef} />
            </div>
            <div
                className={`${classes.control} ${
                    !inputValid.street ? classes.invalid : ""
                }`}
            >
                <label htmlFor="">Street</label>
                <input type="text" name="" id="" ref={streetInputRef} />
            </div>
            <div
                className={`${classes.control} ${
                    !inputValid.postal ? classes.invalid : ""
                }`}
            >
                <label htmlFor="">Postal Code</label>
                <input type="text" name="" id="" ref={postalCodeInputRef} />
            </div>
            <div
                className={`${classes.control} ${
                    !inputValid.city ? classes.invalid : ""
                }`}
            >
                <label htmlFor="">City</label>
                <input type="text" name="" id="" ref={cityInputRef} />
            </div>
            <div className={classes.actions}>
                <button onClick={onClick}>Cancel</button>
                <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    );
};
export default Checkout;
