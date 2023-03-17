import { getFoods, setFood, getOrderBuilder } from "./dataAccess.js";

const foods = getFoods()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "food") {
            setFood(parseInt(event.target.value)) 
        }
    }
)

export const Foods = () => {
    return `<h2>Food Choices</h2>
        <select id="foods">
            <option value="0">Select a food choice</option>
            ${
                
                foods.map(
                    (food) => {
                        return `<option value="${food.id}">${food.name}</option>`
                    }
                ).join("")
            }
        </select>
    `
}