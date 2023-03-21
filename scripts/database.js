const database = {
    food:[
        {
        id: 1,
        name: "Plain dog",
        price: 1.5,
        description: "Hot dog only. No bun. Add your favorite condiments!" 
    },{
        id: 2,
        name: "Mario's Macaroni dog",
        price: 3.5,
        description: "A hot dog with homemade macaroni and cheese on top. Just like mom used to make!" 
    },{
        id: 3,
        name: "Hot Diggity dog",
        price: 2.75,
        description: "All beef hotdog, with onion petals and jalapeno peppers." 
    },{
        id: 4,
        name: "La Reina",
        price: 4,
        description: "Caramelized onions, pesto, and BBQ sauce. Grilled to perfection, a mouthwatering wiener fit for royalty." 
    },{
        id: 5,
        name: "Plain dog",
        price: 5,
        description: "Angus beef hotdog with caramelized onions, bacon, chili, monterey jack cheese, sliced jalapenos, and a pickle!" 
    }
    
    ],
    drinks: [
    {id: 1, name: "Kombucha", price: 3},
    {id: 2, name: "Pepsi", price: 2},
    {id: 3, name: "High Quality H20", price: 4},
    {id: 4, name: "Pickle Juice", price: 3},
    {id: 5, name: "Carbonated Water", price: 3},
    {id: 6, name: "Pickle Back", price: 8},
    ],
    desserts:[
    { id: 1, name: "Elephant Ears", price: 4 },
    { id: 2, name: "Fried Plantains", price: 3},
    { id: 3, name: "Tiramisu", price: 6.50},
    { id: 4, name: "Ice Cream Sandwich", price: 2.50}
    ],
    happyToys:[
    { id: 1, name: "Slinky", price: 13.26},
    { id: 2, name: "Tamagotchi", price: 25},
    { id: 3, name: "G.I Joe", price: 10},
    { id: 4, name: "Water Mist Fan", price: 10},
    { id: 5, name: "Baby's First Pew", price: 5}
    ],
    locations:[
    { id: 1, name: "Elk Grove, California"},
    { id: 2, name: "Kahala Beach"},
    { id: 3, name: "Pangea"},
    { id: 4, name: "West Virginia Holler"},
    { id: 5, name: "Big Ugly Creek WV"}
    ],
    foodInventory: [ 
    {id:1, locationId: 1, foodId:2, quantity: 7}, 
    {id: 2, locationId: 2, foodId: 4, quantity: 6},
    {id: 3, locationId: 3, foodId: 1, quantity: 8},
    {id: 4, locationId: 4, foodId: 3, quantity: 9} 
    ],
    drinkInventory: [ 
    {id: 1, locationId: 1, drinkId: 4, quantity: 25}, 
    {id: 2, locationId: 2, drinkId: 3, quantity: 30}, 
    {id: 3, locationId: 3, drinkId: 2, quantity: 1}, 
    {id: 4, locationId: 4, drinkId: 1, quantity: 35}
    ],
    dessertInventory:[
    {id: 1, locationId: 1,dessertId: 1, quantity: 8},  
    {id: 2, locationId: 2, dessertId: 2, quantity: 22},
    {id: 3, locationId: 3, dessertId: 3, quantity: 34},
    {id: 4, locationId: 4, dessertId: 4, quantity: 20}
    ],
    happyToysInventory:[
    {id: 1, locationId: 1, toyId: 1, quantity: 3},
    {id: 5, locationId: 1, toyId: 4, quantity: 7},
    {id: 2, locationId: 2, toyId: 2, quantity: 5},
    {id: 6, locationId: 2, toyId: 3, quantity: 10},
    {id: 3, locationId: 3, toyId: 3,quantity: 8},
    {id: 7, locationId: 3, toyId: 2,quantity: 4},
    {id:4 , locationId: 4, toyId: 4, quantity: 12},
    {id:8 , locationId: 4, toyId: 1, quantity: 5}
    ],
    customOrders: [{
    id: 1,
    foodId: 2,
    drinkId: 4,
    dessertId: 3,
    toyId: 1,
    locationId: 1,
    timestamp: 1543215616151}
    ],
    orderBuilder:{}
}

export {database}