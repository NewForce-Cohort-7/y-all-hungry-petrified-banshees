import { getOrders, getFoods, getDrinks, getToys, getDesserts } from "./dataAccess.js"


const drinks = getDrinks()
const foods = getFoods()
const toys = getToys()
const desserts = getDesserts()
const order = getOrders()



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


const totalCost = foundDrink.price + foundDessert.price + foundFood.price + foundToy.price

const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
})




return `<li>
 Order #${order.id} Cost: ${costString} 
 Order #${order.id} was placed on ${order.timestamp}
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