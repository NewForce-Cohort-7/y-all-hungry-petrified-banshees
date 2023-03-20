import { getDrinks, setDrink } from "./dataAccess.js"
const drinks = getDrinks()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "drinks") {
            // const chosenOption = event.target.value
            // console.log(chosenOption)  // "1" or "2"

            setDrink(parseInt(event.target.value))
        }
    }
)
// .MAP METHOD
export const Drinks = () => {
    
    let html = '<select id="drink">'
    html += '<option value="0"> Select a drink</option>'

    const arrayOfOptions = drinks.map( (drink) => {
            return `<option value="${drink.id}">${drink.name}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}
