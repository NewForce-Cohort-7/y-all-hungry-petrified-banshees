import { database } from "./database.js"

//Create get functions
export const getLocations = () => {
    return database.locations.map(location => ({...location}))
}
export const getFoods = () => {
    return database.food.map(food => ({...food}))
}
export const getDesserts = () => {
    return database.desserts.map(dessert => ({...dessert}))
}
export const getToys = () => {
    return database.happyToys.map(toy => ({...toy}))
}
export const getDrinks = () => {
    return database.drinks.map(drink => ({...drink}))
}
export const getfoodInventory = () => {
    return database.foodInventory.map(foodItems => ({...foodItems}))
}
export const getdrinkInventory = () => {
    return database.drinkInventory.map(drinkItems => ({...drinkItems}))
}
export const getdessertInventory = () => {
    return database.dessertInventory.map(dessertItems => ({...dessertItems}))
}
export const gethappyToysInventory = () => {
    return database.happyToysInventory.map(toyItems => ({...toyItems}))
}

export const getOrderBuilder = () => {
    return database.orderBuilder
}

export const getOrders = () => {
    return database.customOrders.map(orders => ({...orders}))
}


//Create set functions
export const setLocation = (id) => {
    database.orderBuilder.locationId = id
    document.dispatchEvent(new CustomEvent("stateChanged"))
    updateSubtotal()
}
export const setFood = (id) => {
    database.orderBuilder.foodId = id
    updateSubtotal()
}
export const setDrink = (id) => {
    database.orderBuilder.drinkId = id
    updateSubtotal()

}
export const setDessert = (id) => {
    database.orderBuilder.dessertId = id
    updateSubtotal()

}
export const setToy = (id) => {
    database.orderBuilder.toyId = id
    updateSubtotal()

}
export const updateSubtotal = () => {
    let subtotal = 0

for (const foods of database.food) {
    if (foods.id === database.orderBuilder.foodId){
        subtotal += foods.price
    }
}
for (const drinks of database.drinks) {
    if (drinks.id === database.orderBuilder.drinkId){
        subtotal += drinks.price
    }
}
for (const desserts of database.desserts) {
    if (desserts.id === database.orderBuilder.dessertId){
        subtotal += desserts.price
    }
}for (const toys of database.happyToys) {
    if (toys.id === database.orderBuilder.toyId) {
        subtotal += toys.price
    }
    
}
    const withTax = subtotal * 1.06
    const costString = withTax.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
        })

    return  document.querySelector("#total").innerHTML = `Subtotal: <strong>${costString}</strong>`
}