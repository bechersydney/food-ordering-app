import { useCallback } from "react";
import { useState } from "react";
import { useEffect } from "react";
import Card from "../ui/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem";
const AvailableMails = () => {
    const [dummyMeals, setDummyMeals] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [hasError, setError] = useState();
    const fetchMeals = useCallback(async () => {
        try {
            const res = await fetch(
                "https://react-food-delivery-4be3d-default-rtdb.firebaseio.com/meals.json"
            );
            if (!res.ok) {
                throw new Error("Something went wrong!");
            }
            const data = await res.json();
            const loadedMeals = [];
            for (const key in data) {
                const mealItem = data[key];
                loadedMeals.push({
                    id: key,
                    name: mealItem.name,
                    description: mealItem.description,
                    price: mealItem.price,
                });
            }
            setDummyMeals(loadedMeals);
        } catch (e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    }, []);
    useEffect(() => {
        fetchMeals();
    }, [fetchMeals]);

    if (isLoading) {
        return (
            <section>
                <p style={{ textAlign: "center" }}>Loading ...</p>
            </section>
        );
    }
    if (hasError) {
        return (
            <section>
                <p style={{ textAlign: "center" }}>{hasError.message}</p>
            </section>
        );
    }

    const mealsList = dummyMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
    ));
    return (
        <section className={classes.meals}>
            <Card>
                <ul>{mealsList}</ul>
            </Card>
        </section>
    );
};
export default AvailableMails;
