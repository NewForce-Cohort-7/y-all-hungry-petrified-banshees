import { Toys } from "./toys.js"
import {Desserts} from "./dessert.js"
import { addCustomOrder } from "./dataChange.js"
import { Drinks } from "./Drinks.js"
import {Locations} from "./Locations.js"
import {Foods} from "./Food.js"
import { Orders } from "./orders.js"

document.addEventListener(
    "click",
    (event) => { 
        const itemClicked = event.target
        if (itemClicked.id.startsWith("orderButton")) {
            addCustomOrder()
            // document.getElementById("location")[0].setAttribute('selected','selected');
            // document.getElementById("drink")[0].setAttribute('selected','selected');
            // document.getElementById("food")[0].setAttribute('selected','selected');
            // document.getElementById("dessert")[0].setAttribute('selected','selected');
            // document.getElementById("toy")[0].setAttribute('selected','selected');
        }
    }
)

export const yallHungry= () => {
    return  `
        <h1>Yall Hungry?</h1>
        <article class="choices">
            <section class="choices__ locations options">
                <h2>Locations</h2>
                ${Locations()}
            </section>
            <section class="choices__ foods options">
                <h2>Foods</h2>
                ${Foods()}
            </section>
            <section class="choices__drinks options">
                <h2>Drinks</h2>
                ${Drinks()}
            </section>
            <section class="choices__desserts options">
                <h2>Desserts</h2>
                ${Desserts()}
            </section>
            </section>
            <section class="choices__happyToys options">
                <h2>Happy Toys!!!!</h2>
                ${Toys()}
            </section>
        </article>
        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>
        <article class="customOrders">
            <h2>Your Order</h2>
            ${Orders()}
        </article>
    `
}