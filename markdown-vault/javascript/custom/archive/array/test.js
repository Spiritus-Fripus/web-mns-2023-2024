const opel = {name: "Opel", from: "GER"}
const ford = {name: "Ford", from: "USA"}
const marc = {firstname: "Marc", lastname: "Pablito"}

const corsa = {
    brand: opel,
    color: "red",
    driver: marc
}

const f150 = {...corsa};

corsa.color = "green";

f150.brand = ford;

const mercedes = {...ford, name: "Mercedes"};

mercedes.color = "blue"
mercedes.zizi = "big"

console.log(mercedes)

const renault = {...mercedes, name: "renault", from: "FR"}

console.log(renault)

console.log(corsa)