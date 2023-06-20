// console.log(process.argv);

function greet(name) {
    console.log(`Hello from ${name}`);
}

const names = process.argv.slice(2);

for (let name of names) {
    greet(name);
}


