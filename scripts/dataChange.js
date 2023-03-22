import { database } from "./database.js"



export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    newOrder.id = database.customOrders.length + 1

    // Add a timestamp to the order

    newOrder.timestamp = Date.now()


    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}