import { getDrinks, setDrink } from "./dataAccess.js"
const drinks = getDrinks()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "drink") {
            // const chosenOption = changeEvent.target.value
            // console.log(chosenOption)  // "1" or "2"

            setDrink(parseInt(changeEvent.target.value))
        }
    }
)
// .MAP METHOD
export const Drinks = () => {
    let html = "<h2>Drinks</h2>"

    html += '<select id="drink">'
    html += '<option value="0">Select a drink</option>'

    const arrayOfOptions = drinks.map( (drink) => {
            return `<option value="${drink.id}">${drink.name}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}
