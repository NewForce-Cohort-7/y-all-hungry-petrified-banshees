import {setDessert, getDesserts, getOrderBuilder, getdessertInventory, getOrders } from "./dataAccess.js";


const desserts = getDesserts()
const dessertsInventory = getdessertInventory ()
let dessertPrice = 0;

//will need a addevent listeners
document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "dessert") {
            setDessert(parseInt(changeEvent.target.value))  
        }
        dessertSubtotal ()
        let dessertMatch = {}
        const order = getOrderBuilder()
        for (const dessert of desserts) {
            if(dessert.id === order.dessertId){
                dessertMatch = dessert
            }
        }
        dessertPrice = dessertMatch.price
        
        const costString = dessertPrice.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })
        if(dessertMatch !== null){
            document.querySelector("#total").innerHTML = `Subtotal: <strong>${costString}</strong>`
            
        }
        //if null, order-location is blank
        else{document.querySelector("#total").innerHTML = ''}
  }
)

//build html that will be exported to the module responsible for our html

export const Desserts = () => {
    const currentOrder = getOrderBuilder()
    const orders = getOrders ()
    
    let html = '<select id="dessert">'
    html += '<option value="0"> Select a dessert choice'

    const arrayOfOptions = desserts.map( (dessert) => {
        let foundDessertId = null
        for (const singleDessert of dessertsInventory) {
            
        if(currentOrder.locationId === singleDessert.locationId){
            foundDessertId = singleDessert.dessertId
            if(foundDessertId === dessert.id && singleDessert.quantity > 0){const sold = orders.filter(x=> x.locationId === singleDessert.locationId && singleDessert.dessertId === x.dessertId)
            return `<option value="${dessert.id}">${dessert.name} (${singleDessert.quantity - sold.length}}`}
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