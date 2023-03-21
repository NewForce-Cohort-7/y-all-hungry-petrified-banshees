import { getToys, setToy, getOrderBuilder, getLocations, setLocation, gethappyToysInventory } from "./dataAccess.js"

const toys = getToys()
const locationArray = getLocations()
const happyToys = gethappyToysInventory()
document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "toy") {
            setToy(parseInt(event.target.value))
        }
    }
    )
    
    export const Toys = () => {
    const currentOrder = getOrderBuilder()
    return `
        <select id="toy">
            <option value="0">Select a toy
            ${
                
                toys.map(
                    (toy) => {
                        let foundToyId = null
                        for (let singleHappyToy of happyToys) {

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