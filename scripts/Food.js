import { getFoods, getOrders, setFood, getOrderBuilder, getfoodInventory, subTotal } from "./dataAccess.js";

const foods = getFoods()
const foodsInventory = getfoodInventory()
let foodPrice = 0;

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "food") {
            setFood(parseInt(event.target.value)) 
            console.log(getOrderBuilder())
        }

        let foodMatch = {}
        const order = getOrderBuilder()
        for (const food of foods) {
            if(food.id === order.foodId){
                foodMatch = food
            }
        }
        
        foodPrice = foodMatch.price
        const costString = foodPrice.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })
       
        if(foodMatch !== null){
            document.querySelector("#total").innerHTML = `Subtotal: <strong>${costString}</strong>`
            
        }
        //if null, order-location is blank
        else{document.querySelector("#total").innerHTML = ''}

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



    export const getFoodPrice = () => {
        return foodPrice
    }