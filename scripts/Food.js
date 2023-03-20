import { getFoods, setFood, getOrderBuilder } from "./dataAccess.js";

const foods = getFoods()
const currentOrder = getOrderBuilder()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "food") {
            setFood(parseInt(event.target.value)) 
        }
    }
)

export const Foods = () => {
    return `
        <select id="food">
            <option value="0">Select a food choice
            ${
                
                foods.map(
                    (food) => {
                        if(currentOrder.foodId === food.id){
                            return `<option value="${food.id}" selected>${food.name}</option>`
                        }else{
                            return `<option value="${food.id}">${food.name}</option>`
                        }
                    }
                ).join("")
            }
        </select>
    `
}