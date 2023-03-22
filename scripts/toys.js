import { getToys, setToy, getOrderBuilder, getLocations, setLocation, gethappyToysInventory } from "./dataAccess.js"

const toys = getToys()
const locationArray = getLocations()
const happyToys = gethappyToysInventory()
document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "singleHappyToy") {
            setToy(parseInt(event.target.value))
        }
        
        let toyMatch = null
        const order = getOrderBuilder()
        for (const toy of toys) {
            if(toy.id === order.toyId){
                toyMatch = toy
            }
        }
        const toyPrice = toyMatch.price
        const rollingTotal = toyPrice 
        const costString = rollingTotal.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })
       
        if(toyMatch !== null){
            document.querySelector("#total").innerHTML = `Subtotal: <strong>${costString}</strong>`
            
        }
        //if null, order-location is blank
        else{document.querySelector("#total").innerHTML = ''}

    }
    
    )
    
    export const Toys = () => {
    const currentOrder = getOrderBuilder()
    return `
        <select id="singleHappyToy">
            <option value="0">Select a toy
            ${
                
                toys.map(
                    (toy) => {
                        let foundToyId = null
                        for (const singleHappyToy of happyToys) {

                                 if(currentOrder.locationId === singleHappyToy.locationId){
                                foundToyId = singleHappyToy.toyId
                                
                                if(foundToyId === toy.id){
                                    return `<option value="${toy.id}">${toy.name} (${singleHappyToy.quantity})`
                                }
                            }
                        }
            }
                ).join("")
            }
        </select>
    `
        }