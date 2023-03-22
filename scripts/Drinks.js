import { getDrinks, setDrink, getOrderBuilder, getdrinkInventory, getOrders } from "./dataAccess.js"
const drinks = getDrinks()
const drinksInventory = getdrinkInventory()


document.addEventListener(
    "change",
    (event) => {

        if (event.target.id === "singleDrink") {
            setDrink(parseInt(event.target.value))  
        }
    }
)





export const Drinks = () => {
    const currentOrder = getOrderBuilder()
    const orders = getOrders()

    return `
        <select id="singleDrink">
            <option value="0">Select a drink
            ${
                
                drinks.map(
                    (drink) => {
                        let foundDrinkId = null
                        for (let singleDrink of drinksInventory) {

                                 if(currentOrder.locationId === singleDrink.locationId){foundDrinkId = singleDrink.drinkId
                               
                                if(foundDrinkId === drink.id && singleDrink.quantity > 0){ 
                                    const sold = orders.filter(x=> x.locationId === singleDrink.locationId && singleDrink.drinkId === x.drinkId )
                                    return `<option value="${drink.id}" >${drink.name} (${singleDrink.quantity - sold.length} )`
                                }
                                
                            }
                        }
            }
                ).join("")
            }
        </select>
    `
        }