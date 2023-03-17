import { happyToy } from "./toys.js"
import {} from "./ .js"
import { addCustomOrder } from "./dataChange.js"
document.addEventListener(
    "click",
    (event) => { 
        const itemClicked = event.target
        if (itemClicked.id === "orderButton") {
            addCustomOrder()
        }
    }
)

export const yallHungry= () => {
    return  `
        <h1>Yall Hungry?</h1>
        <article class="choices">
            <section class="choices__ options">
                <h2></h2>
                ${()}
            </section>
            <section class="choices__ options">
                <h2></h2>
                ${()}
            </section>
            <section class="choices__ options">
                <h2></h2>
                ${()}
            </section>
            </section>
            <section class="choices__ options">
                <h2></h2>
                ${()}
            </section>
            <section class="choices__happyToys options">
                <h2>Happy Toys!!!!</h2>
                ${happyToy()}
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