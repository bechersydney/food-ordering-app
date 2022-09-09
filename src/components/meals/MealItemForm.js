import Input from "./Input";
import classes from "./MailItemForm.module.css";
const MailItemForm = ({ id }) => {
    return (
        <form className={classes.form}>
            <Input
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
            <button>+ Add</button>
        </form>
    );
};
export default MailItemForm;
