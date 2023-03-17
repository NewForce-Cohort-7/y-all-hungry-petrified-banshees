import { getLocations, setLocation, getOrderBuilder } from "./dataAccess.js"

const locations = getLocations()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "location") {
            setLocation(parseInt(event.target.value))
            
        }
    }
)

export const Locations = () => {
    let html;

    html += '<select id ="location">'
    html += `<option value="0">Select a location</option>`

    for (const location of locations) {
        html += `<option value="${location.id}">${location.name}`
    }
    html += "</select>"
    return html
}