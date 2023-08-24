// Bonus: Iteracion 6
import foodsJson from "../foods.json";
import { useState } from "react";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";
import Search from "./Search";

function FoodList() {

    // iteracion 1
    // Estado 1 > este estado tiene la informacion original del json
    const [allFoods, setAllFoods] = useState(foodsJson)

    // Estado 2 > este estado tiene solo la informacion que el usuario ve en la vista
    const [foodsRender, setFoodsRender] = useState(foodsJson)

    return (
        <>
            <h1>React IronNutrition</h1>

            <AddFoodForm foodsRender={foodsRender} setFoodsRender={setFoodsRender} />

            <Search allFoods={allFoods} setFoodsRender={setFoodsRender} />

            <FoodBox foodsRender={foodsRender} setAllFoods={setAllFoods} setFoodsRender={setFoodsRender} />

        </>
    )
}

export default FoodList