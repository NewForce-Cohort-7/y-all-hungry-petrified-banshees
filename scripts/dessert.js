import {setDessert, getDesserts, getOrderBuilder, getdessertInventory, getLocations } from "./dataAccess.js";


const desserts = getDesserts()
//const locationArray = getLocations ()
const dessertsInventory = getdessertInventory ()

export const dessertSubTotal = () => {
let dessertMatch = null
        const order = getOrderBuilder()
        for (const dessert of desserts) {
            if(dessert.id === order.dessertId){
                dessertMatch = dessert
            }
        }
        const dessertPrice = dessertMatch.price
        const rollingTotal = dessertPrice
        const costString = rollingTotal.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })
        if(dessertMatch !== null){
            document.querySelector("#total").innerHTML = `Subtotal: <strong>${costString}</strong>`
            
        }
        //if null, order-location is blank
        else{document.querySelector("#total").innerHTML = ''}
    }

//will need a addevent listeners
document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "dessert") {
            setDessert(parseInt(changeEvent.target.value))  

            subTotal()
        }
  }
)

//build html that will be exported to the module responsible for our html

export const Desserts = () => {
    const currentOrder = getOrderBuilder()

    let html = '<select id="dessert">'
    html += '<option value="0"> Select a dessert choice'

    const arrayOfOptions = desserts.map( (dessert) => {
        let foundDessertId = null
        for (const singleDessert of dessertsInventory) {
            
        if(currentOrder.locationId === singleDessert.locationId){
            foundDessertId = singleDessert.dessertId
            if(foundDessertId === dessert.id){
            return `<option value="${dessert.id}">${dessert.name} (${singleDessert.quantity}}`}
        }
        }   
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}

/*Function to find dessert inventory based off location

export const filterDessertInventoryByLocation = (desserts,singleDessertTypeInventory)=>{
    let dessertType= []
    for(const dessert of desserts){
        if (dessert.id === singleDessertTypeInventory.dessertId){
            dessertType.push(dessert)
           
        }
    }
    return dessertType
    
}*/