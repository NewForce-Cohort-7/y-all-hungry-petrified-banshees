const database = {       

    transientState: {}
}

export const setLocation = (locationId) => {
    database.transientState.selectedLocation = locationId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

export const getLocations = () => {
    return database.getLocations.map(f => ({...f}))
}

export const completeOrder = () => {
    const newOrder = {...database.transientState}

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.transientState = {}

    // Broadcast a notification that permanent state has changed
        // Broadcast custom event to entire document so that the
        // application can re-render and update state
        document.dispatchEvent( new CustomEvent("stateChanged") )
}
