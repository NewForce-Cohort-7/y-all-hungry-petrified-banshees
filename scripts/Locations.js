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
    const currentOrder = getOrderBuilder()

    let html = '<select id="location">'
    html += currentOrder.locationId ? `<option value="0">Select a location`: `<option value="0" selected>Select a location`
        // if(currentOrder.locationId){
        //     html +=`<option value="0">Select a location` 
        // }else {
        //     html += `<option value="0" selected>Select a location`
        // }
    
    for (const location of locations) {
        if(currentOrder.locationId === location.id){
            html += `<option name="location" value="${location.id}" selected>${location.name}`
        }else{
            html += `<option name="location" value="${location.id}">${location.name}`
        }
    }
    html += "</select>"
    return html
}