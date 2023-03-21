import {setDessert, getDesserts, getOrderBuilder, getdessertInventory, getLocations } from "./dataAccess.js";


const desserts = getDesserts()
const currentOrder = getOrderBuilder()

const dessertsInventory = getdessertInventory ()

const locations = getLocations ()

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
    const currentOrder = getOrderBuilder()

    let html = '<select id="dessert">'
    html += '<option value="0"> Select a dessert choice'

    const arrayOfOptions = desserts.map( (dessert) => {
        if(currentOrder.dessertId === dessert.id){
            return `<option name="drink" value="${dessert.id}" selected>${dessert.name}`
        }else{
            return `<option name="drink" value="${dessert.id}">${dessert.name}`
        }   
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}

//Function to find dessert inventory based off location

export const filterDessertInventoryByLocation = (desserts,singleDessertTypeInventory)=>{
    let dessertType= []
    for(const dessert of desserts){
        if (dessert.id === singleDessertTypeInventory.dessertId){
            dessertType.push(dessert)
           
        }
    }
    return dessertType
    
}