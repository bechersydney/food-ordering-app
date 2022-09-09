import { useRef, useState } from "react";
import Input from "./Input";
import classes from "./MailItemForm.module.css";

const MailItemForm = ({ id, onAddItem }) => {
    const amountInputRef = useRef();
    const [isValid, setValid] = useState(true);
    const addItemToCart = (e) => {
        e.preventDefault();
        const enteredAmount = +amountInputRef.current.value;
        if (
            !amountInputRef.current.value.trim() ||
            enteredAmount <= 0 ||
            enteredAmount > 5
        ) {
            setValid(false);
            return;
        }
        return onAddItem(enteredAmount);
    };
    return (
        <form className={classes.form} onSubmit={addItemToCart}>
            <Input
                ref={amountInputRef}
                label="Amount"
                input={{
                    id: "name" + id,
                    type: "number",
                    min: "1",
                    max: "5",
                    step: "1",
                    defaultValue: "1",
                }}
            />
            <button type="submit">+ Add</button>
            {!isValid && <p style={{ color: "red" }}>Enter valid amount</p>}
        </form>
    );
};
export default MailItemForm;
