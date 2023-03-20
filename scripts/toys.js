import { getToys, setToy } from "./dataAccess.js"
const toys = getToys()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "toys") {
            setToy(parseInt(event.target.value))
        }
    }
)

export const Toys = () => {
    return `
        <select id="toy">
            <option value="0">Select a toy</option>
            ${
                
                toys.map(
                    (toy) => {
                        return `<option value="${toy.id}">${toy.name}</option>`
                    }
                ).join("")
            }
        </select>
    `
}