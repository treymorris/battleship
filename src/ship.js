/*
//object literal
const ship = {
    length: Number,
    hits: [],
    isSunk: false
}


//object constructor
function Ship(length, hits, isSunk) {
    this.length = length
    this.hits = hits
    this.isSunk = isSunk
}
// call by using keyword new
const ship1 = new Ship(5, 1, false)


//object constructor using functions
function Ship(length) {

    this.length = length,

    this.hits = function() {
        //some function here
    },

    this.sunk = function() {
        //some function here
    }
}
  
const ship2 = new Ship(5, 2, false);

ship2.hits(2);

ship2.sunk(true);


//object constructor using functions on prototypes
function Ship(length) {
    this.length = length;
}

Ship.prototype.hits = function() {
    //some function here
}

Ship.prototype.sunk = function() {
    //some function here
}
//using objectcreate for prototypes
function BigShip(length) {
    this.length = length;
}

BigShip.prototype = Object.create(Ship.prototype);

const bigShip1 = new BigShip(7);

bigShip1.hits(5);
*/

//factory function
const shipFactory = (length) => {
    
    const hits = (position, number) => {
        
    }

    const isSunk = () => {}

    return {length, hits, isSunk}
};

const ship3 = shipFactory(5);

//ship3.hits(1);
//ship3.isSunk(false);












module.exports = shipFactory