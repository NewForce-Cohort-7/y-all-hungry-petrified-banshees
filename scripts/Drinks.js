import { getDrinks, setDrink, getOrderBuilder } from "./dataAccess.js"
const drinks = getDrinks()
const currentOrder = getOrderBuilder()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "drink") {
            // const chosenOption = event.target.value
            // console.log(chosenOption)  // "1" or "2"

            setDrink(parseInt(event.target.value))
        }
    }
)
// .MAP METHOD
export const Drinks = () => {
    
    let html = '<select id="drink">'
    html += '<option value="0"> Select a drink'

    const arrayOfOptions = drinks.map( (drink) => {
            
        if(currentOrder.drinkId === drink.id){
            return `<option name="drink" value="${drink.id}" selected>${drink.name}`
        }else{
            return `<option name="drink" value="${drink.id}">${drink.name}`
        } 
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}
