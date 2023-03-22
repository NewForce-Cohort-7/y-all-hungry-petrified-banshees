import { getFoods, getOrders, setFood, getOrderBuilder, getfoodInventory} from "./dataAccess.js";

const foods = getFoods()
const foodsInventory = getfoodInventory()


document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "food") {
            setFood(parseInt(event.target.value)) 
            console.log(getOrderBuilder())
        }
    }
)

export const Foods = () => {
    const currentOrder = getOrderBuilder()
    const orders = getOrders()
    return `
    <select id="food">
    <option value="0">Select a food choice
    ${
        foods.map(
            (food) => {
                let foundFoodId = null
                for (const singleFood of foodsInventory) {
                    
                    if(currentOrder.locationId === singleFood.locationId){
                        foundFoodId = singleFood.foodId
                        
                        if(foundFoodId === food.id && singleFood.quantity > 0){
                            const sold = orders.filter(x=> x.locationId === singleFood.locationId && singleFood.foodId === x.foodId)
                            return `<option value="${food.id}">${food.name} (${singleFood.quantity - sold.length})`
                        }
                    }
                }
            }
            ).join("")
        }
        </select>
        `
    }
