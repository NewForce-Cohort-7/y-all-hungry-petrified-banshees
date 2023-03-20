import { getToys, setToy, getOrderBuilder } from "./dataAccess.js"
const toys = getToys()
const currentOrder = getOrderBuilder()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "toy") {
            setToy(parseInt(event.target.value))
        }
    }
)

export const Toys = () => {
    return `
        <select id="toy">
            <option value="0">Select a toy
            ${
                
                toys.map(
                    (toy) => {
                        if(currentOrder.toyId === toy.id){
                            return `<option value="${toy.id}" selected>${toy.name}`
                        }else{
                            return `<option value="${toy.id}">${toy.name}`
                        }
                    }
                ).join("")
            }
        </select>
    `
}