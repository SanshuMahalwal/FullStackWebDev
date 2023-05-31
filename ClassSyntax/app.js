class Sport {

    constructor(name, players){
        this.name = name;
        this.players = players;
    }

    static hello(sportObj) {
        console.log(`Hello from ${sportObj.name}, we have ${sportObj.players} player in each team`);
    }

    majorTournaments = [];
}

const tennis = new Sport('Tennis', 1);

// console.log(tennis);

// tennis.hello();// cannot use static method on Object, but only on class

//To use static method on object, we pass the object as parameter to the static method

Sport.hello(tennis);

tennis.majorTournaments = ['AO', 'Roland Garros', 'Wimbledon', 'US Open'];

console.log(tennis);