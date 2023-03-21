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
}
export const setFood = (id) => {
    database.orderBuilder.foodId = id
    //document.dispatchEvent(new CustomEvent("stateChanged"))
}
export const setDrink = (id) => {
    database.orderBuilder.drinkId = id
    //document.dispatchEvent(new CustomEvent("stateChanged"))
}
export const setDessert = (id) => {
    database.orderBuilder.dessertId = id
    //document.dispatchEvent(new CustomEvent("stateChanged"))
}
export const setToy = (id) => {
    database.orderBuilder.toyId = id
    //document.dispatchEvent(new CustomEvent("stateChanged"))
}