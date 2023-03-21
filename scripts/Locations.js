import { getLocations, setLocation, getOrderBuilder, getOrders } from "./dataAccess.js"

const locations = getLocations()




export const Locations = () => {
    const currentOrder = getOrderBuilder()
    
    let html = '<select id="location">'
    html += currentOrder.locationId ? `<option value="0">Select a location`: `<option value="0" selected>Select a location`
    
    
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

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "location") {
            setLocation(parseInt(event.target.value))  
        }

        const order = getOrderBuilder()
        let locationMatch;
        for (const location of locations) {
            if(location.id === order.locationId){
                locationMatch = location.name
            }
        }
        if (locationMatch !== null) {
            document.querySelector('#order-location').innerHTML = `You're picking up your order at our <strong>${locationMatch}</strong> location!`
        }
        //if null, order-location is blank
        else { document.querySelector('#order-location').innerHTML = '' }
    }
)