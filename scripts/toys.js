import { getToys, getOrders, setToy, getOrderBuilder, gethappyToysInventory, subTotal } from "./dataAccess.js";

const toys = getToys()
const toysInventory = gethappyToysInventory()
let toyPrice = 0;

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "toy") {
            setToy(parseInt(event.target.value)) 
            console.log(getOrderBuilder())
        }

        let toyMatch = {}
        const order = getOrderBuilder()
        for (const toy of toys) {
            if(toy.id === order.toyId){
                toyMatch = toy
            }
        }
        
        toyPrice = toyMatch.price
        const costString = toyPrice.toLocaleString("en-US", {
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



    export const getToyPrice = () => {
        return toyPrice
    }