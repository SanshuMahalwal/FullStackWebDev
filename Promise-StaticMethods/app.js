//Tasks : fetching data from API
const task1 = ()=>{
    return fetch('https://fakestoreapi.com/products/1')
}
const task2 = ()=>{
    return fetch('https://fakestoreapi.com/products/2')
}
const task3 = ()=>{
    return fetch('https://fakestoreapi.com/products/3')
}
const task4 = ()=>{
    return fetch('https://fakestoreapi.com/products/4')
}

async function performBatchTasks(){
    try {
        //In series way of handling batch tasks :-

        console.time('Task Timer');
        // const t1 = await task1();
        // console.log('Got task1, starting to get task2');
        // // console.log(t1);
        // const t2 = await task2();
        // // console.log(t2);
        // console.log('Got task2, starting to get task3');
        // const t3 = await task3();
        // // console.log(t3);
        // console.log('Got task3, starting to get task4');
        // const t4 = await task4();
        // console.log('Got all 4 tasks');

        //Full Parallel way of handling batch tasks
        const t1 = task1();
        const t2 = task2();
        const t3 = task3();
        const t4 = task4();

        // const result = Promise.all([t1, t2, t3, t4]);
        // const result = Promise.allSettled([t1, t2, t3, t4]);
        const result = await Promise.any([t1, t2, t3, t4]); // returns first RESOLVED value - done successfully (not rejected and not pending)
        // const result = await Promise.race([t1, t2, t3, t4]); //returns first SETTLED value - done (successful or rejected but not pending) 
        console.log(result);
    
        console.timeEnd('Task Timer');
    }
    catch(err){
        console.log(err);
    }

}

performBatchTasks();