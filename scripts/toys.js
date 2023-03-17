import { getToys, setToy } from "./database.js"
const toys = getToys()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "toy") {
            setToy(parseInt(event.target.value))
        }
    }
)

export const happyToy = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = toys.map(toy => {
        return `<select id="toy">
        <option value="0">Happy Toys...</option>
        <option value="1">Slinky</option>
        <option value="2">Tamagotchi</option>
        <option value="3">G.I Joe</option>
        <option value="4">Water Mist Fan</option>
        <option value="5">Baby's First Pew</option>
    </select>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}