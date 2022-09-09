import { useContext } from "react";
import ShopContext from "../../store/shop-context";
import classes from "./MealItem.module.css";
import MailItemForm from "./MealItemForm";

const MealItem = (props) => {
    const { name, description, price, id } = props.meal;
    const { addItem } = useContext(ShopContext);
    const onAddItem = (amount) => {
        addItem({ ...props.meal, amount: amount });
    };
    return (
        <li className={classes.meal}>
            <div>
                <h3>{name}</h3>
                <div className={classes.description}>{description}</div>
                <div className={classes.price}>{`$${price.toFixed(2)}`}</div>
            </div>
            <div>
                <MailItemForm id={id} onAddItem={onAddItem} />
            </div>
        </li>
    );
};
export default MealItem;
