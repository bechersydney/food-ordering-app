import mealImg from "../../assets/images/meals.jpg"; // this is how to import local image
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
    
    return (
        <>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton label="Cart" />
            </header>
            <div className={classes["main-image"]}>
                <img src={mealImg} alt="meals" />
            </div>
        </>
    );
};
export default Header;
