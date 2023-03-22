import { getDrinks, setDrink, getOrderBuilder, getdrinkInventory } from "./dataAccess.js"
const drinks = getDrinks()
const drinksArray = getdrinkInventory()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "singleDrink") {
            // const chosenOption = event.target.value
            // console.log(chosenOption)  // "1" or "2"

            setDrink(parseInt(event.target.value))
        }
    }
)


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
//experimenting for a subtotal
        // const RunningSubtotal = (drinksArray) => {
        //     let total = 0
        //     let result = []
        
        //     for (){
        //         total = total + drinksArray[i]
        //         result.push(total)
        //     }
        //     return `<article class="Subtotal">
        //                 <div> ${result} </div>
        //                  </article>`
        
        // }
        // RunningSubtotal()
