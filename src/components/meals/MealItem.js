import classes from "./MealItem.module.css";
import MailItemForm from "./MealItemForm";

const MealItem = (props) => {
    const { name, description, price, id } = props.meal;
    return (
        <li className={classes.meal}>
            <div>
                <h3>{name}</h3>
                <div className={classes.description}>{description}</div>
                <div className={classes.price}>{`$${price.toFixed(2)}`}</div>
            </div>
            <div>
                <MailItemForm id={id} />
            </div>
        </li>
    );
};
export default MealItem;
