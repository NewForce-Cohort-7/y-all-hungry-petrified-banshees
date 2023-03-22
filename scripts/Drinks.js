import { getDrinks, setDrink, getOrderBuilder, getdrinkInventory } from "./dataAccess.js"
const drinks = getDrinks()
const drinksArray = getdrinkInventory()

document.addEventListener(
    "change",
    (event) => {

        if (event.target.id === "singleDrink") {
            setDrink(parseInt(event.target.value))
        }
       drinkSubtotal()
    }
)
export const drinkSubtotal = () => {
    let drinkMatch = {}
    const order = getOrderBuilder()
    for (const drink of drinks) {
        if(drink.id === order.drinkId){
            drinkMatch = drink
        }
    }
    const drinkPrice = drinkMatch.price
    const drinkCostString = drinkPrice.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    // console.log(drinkCostString)
    // return drinkCostString
    if(drinkMatch !== null){
        document.querySelector("#total").innerHTML = `Subtotal: <strong>${drinkCostString}</strong>`
        
    }

    else{document.querySelector("#total").innerHTML = ''}
     
}


export const Drinks = () => {
    const currentOrder = getOrderBuilder()

    return `
        <select id="singleDrink">
            <option value="0">Select a drink
            ${
                
                drinks.map(
                    (drink) => {
                        let foundDrinkId = null
                        for (let singleDrink of drinksArray) {

                                 if(currentOrder.locationId === singleDrink.locationId){
                                foundDrinkId = singleDrink.drinkId
                                if(foundDrinkId === drink.id){
                                    return `<option value="${drink.id}" >${drink.name} (${singleDrink.quantity})`
                                }
                                
                            }
                        }
            }
                ).join("")
            }
        </select>
    `
        }