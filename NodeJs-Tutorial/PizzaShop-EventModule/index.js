const PizzaShop = require('./pizza-shop')
const DrinkMachine = require("./drink-machine")

const pizzaShop = new PizzaShop;
const drinkMachine = new DrinkMachine;

pizzaShop.on("order", (size, topping)=> {
   console.log(`Order received! Baking a ${size} ${topping} pizza`) 
   drinkMachine.serveDrink(size);
})

pizzaShop.order("large", "paneer");
pizzaShop.displayOrderNumber();