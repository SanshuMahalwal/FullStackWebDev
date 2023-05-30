class pizzaStore {
    static pizzas = [
        {
            id: 999,
            name: 'Cheese Pizza',
            price: 200
        },
        {
            id: 888,
            name: 'Chicken pizza',
            price: 400

        },
        {
            id: 777,
            name: 'Paneer Pizza',
            price: 300
        }
    ]

    static getAllPizzas() {
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve(this.pizzas);
            }, 2000)
        })
    }

    static applyDiscountOnPizza(id, discount) {
        return new Promise((resolve, reject) =>{
            setTimeout(()=>{
                const foundPizza = this.pizzas.find((pizza) => pizza.id === id)
                foundPizza.price = foundPizza.price - (foundPizza.price*discount/100);
            }, 3000)
            
        })
    }

    static apply50PerDiscountOnBulkPizza(...pizzaIds) {
        return new Promise((resolve, reject)=>{
            for (let id of pizzaIds) {
                this.apply50PerDiscountOnBulkPizza(id, 50);
            }
        })
    }


}

async function main() {
    const allPizzas = await pizzaStore.getAllPizzas();
    console.log(allPizzas);
    // const updatedPizza = await pizzaStore.applyDiscountOnPizza(999, 50);
    // console.log(updatedPizza);
    // const updateBulkPizzas = await pizzaStore.apply50PerDiscountOnBulkPizza(999, 888, 777);
    // const allPizzas1 = await pizzaStore.getAllPizzas();
    // console.log(allPizzas1);
}   
// console.log('hello');
    
