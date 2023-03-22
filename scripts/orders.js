import { getOrders, getFoods, getLocations, getDrinks, getToys, getDesserts, getOrderBuilder } from "./dataAccess.js"


const drinks = getDrinks()
const foods = getFoods()
const toys = getToys()
const desserts = getDesserts()
const locations = getLocations()
const order = getOrders()
const currentOrder = getOrderBuilder()



const buildOrderListItem = (order) => {

const foundDrink = drinks.find((drink) => {
    return drink.id === order.drinkId
    }
) 

const foundFood = foods.find((food) => {
        return food.id === order.foodId
    }
)

const foundToy = toys.find((toy) => {
    return toy.id === order.toyId
}
)

const foundDessert = desserts.find((dessert) => {
    return dessert.id === order.dessertId
}
)


let totalCost = (foundDrink.price + foundDessert.price + foundFood.price + foundToy.price) *1.06

const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
})
let locationMatch;
for (const location of locations) {
    if(location.id === order.locationId){
        locationMatch = location.name
    }
}


return `<li>
 Order #${order.id} Cost: ${costString} 
 Order #${order.id} was placed on ${order.timestamp} @ our ${locationMatch} location
     </li>`
 }

 
export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}