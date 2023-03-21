import { getfoodInventory } from "./dataAccess.js";
// Inventory Array
let inventory = getfoodInventory ()
    
  
  // Function to subtract one from quantity when item is chosen
  function subtractFromInventory(itemName) {
    for (let item of inventory) {
      if (item.locationId === itemName) {
        item.quantity--;
      }
    }
  }
  
  // Call function
  subtractFromInventory('food');
  
  // Print updated inventory
  // console.log(inventory); // [{name: 'shoes', quantity: 4}, {name: 'shirts', quantity: 10}, {name: 'pants', quantity: 15}]