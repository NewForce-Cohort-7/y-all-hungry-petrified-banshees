import { getToys, getOrders, setToy, getOrderBuilder, gethappyToysInventory } from "./dataAccess.js";

const toys = getToys()
const toysInventory = gethappyToysInventory()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "toy") {
            setToy(parseInt(event.target.value)) 
            console.log(getOrderBuilder())
        }
    }
)

export const Toys = () => {
    const currentOrder = getOrderBuilder()
    const orders = getOrders()
    return `
    <select id="toy">
    <option value="0">Select a toy choice
    ${
        toys.map(
            (toy) => {
                let foundtoyId = null
                for (const singleToy of toysInventory) {
                    
                    if(currentOrder.locationId === singleToy.locationId){
                        foundtoyId = singleToy.toyId
                        
                        if(foundtoyId === toy.id && singleToy.quantity > 0){
                            const sold = orders.filter(x=> x.locationId === singleToy.locationId && singleToy.toyId === x.toyId)
                            return `<option value="${toy.id}">${toy.name} (${singleToy.quantity - sold.length})`
                        }
                    }
                }
            }
            ).join("")
        }
        </select>
        `
    }