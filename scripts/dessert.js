import {setDessert, getDesserts } from "./dataAccess.js";


desserts = getDesserts()

//will need a addevent listeners
document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "dessert") {
            setDessert(parseInt(changeEvent.target.value))  
        }
    }
)

//build html that will be exported to the module responsible for our html

export const Desserts = () => {
    let html = '<select id="desserts">'
    html += '<option value="0"> Select a dessert choice</option>'

    const arrayOfOptions = desserts.map( (dessert) => {
            return `<option value="${dessert.id}">${dessert.name}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}