class PizzaStore {
    static pizzas = [
        {
            id: 999,
            name: 'Margherita Pizza',
            price: 200
        },
        {
            id: 888,
            name: 'Chicken bbq Pizza',
            price: 400

        },
        {
            id: 777,
            name: 'Tandoori Paneer Pizza',
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
                function checkId(pizza) {
                    return pizza.id === id;
                }
                const foundPizza = this.pizzas.find(checkId);
                foundPizza.price = foundPizza.price - (foundPizza.price*discount/100);
                resolve(foundPizza);
            }, 3000)
            
        })
    }

    static walletAmount = 4000;

    static async apply50PerDiscountOnBulkPizza(...pizzaIds) {
        
        // This is In series way and can hamper performance
        // const updatedList = [];
        // for (let id of pizzaIds) {
        //     const pizza = await this.applyDiscountOnPizza(id, 50);
        //     //console.log(pizza);
        //     updatedList.push(pizza);
        // }
        // return updatedList;

        //Full Parallel way to apply discount simultaneously
        const updatedList = [];
        for (let id of pizzaIds) {
            const pizza = this.applyDiscountOnPizza(id, 50);
            // console.log(pizza);
            updatedList.push(pizza);
        }

        return await Promise.all(updatedList);

    }

    static createOrder(orderRequest) {
        return new Promise((resolve, reject)=>{
            //Return an order id, total amount and the order request
            setTimeout(()=>{
                const orderId = 'ODR' + Math.floor(Math.random()*100000)
                const totalAmt= orderRequest.pizzas.reduce((total, curr)=>{
                    return total + curr.price*curr.qty;
                }, 0)
                resolve({orderId, orderRequest, totalAmt});

            }, 3000)
        })
    }

    static processPayment(totalAmt, orderId) {
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                if (totalAmt < this.walletAmount) {
                    const txnId = 'TXN' + Math.floor(Math.random()*100000);
                    this.walletAmount = this.walletAmount - totalAmt;
                    resolve({txnId, orderId});
                }
                else {
                    reject('Insufficient amount in the wallet :(')
                }
            }, 3000)
        })
    }

    static sendEmail(emailId, orderId) {
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(`Email sent to ${emailId} for order id : ${orderId}`)
            }, 2000)
        })
    }
}

async function main() {
    // const allPizzas = await PizzaStore.getAllPizzas();
    // console.log(allPizzas);
    // const updatedPizza = await PizzaStore.applyDiscountOnPizza(999, 50);
    // console.log(updatedPizza);
    // console.time('Discount timer');
    // const updatedPizzaList = await PizzaStore.apply50PerDiscountOnBulkPizza(999, 888, 777);
    // console.timeEnd('Discount timer');
    // const allPizzas1 = await PizzaStore.getAllPizzas();
    // console.log(allPizzas1);
    const orderRequest = {
        pizzas:[
            {id:999, price:100, qty:2},
            {id:888, price:200, qty:3}
        ]
    }

    const order = await PizzaStore.createOrder(orderRequest);
    console.log(`Order placed: Order id : ${order.orderId}, total amount : ${order.totalAmt}`);
    
    const amt = order.totalAmt;
    const odrId = order.orderId;
    const payment = await PizzaStore.processPayment(amt, odrId);
    // console.log(`Payment successfull for ${odrId}, txn Id : ${payment}`);
    console.log(`Payment successfull for order ${odrId}, txn id : ${payment.txnId}`);
    console.log(`Wallet amount : ${PizzaStore.walletAmount}`);

    const emailId = 'sm7@xyz.com'
    const emailNotification = await PizzaStore.sendEmail(emailId, odrId);

    console.log(emailNotification)
} 

main();
    
