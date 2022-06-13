const messages = [
    "Maxi",
    "Oscar",
    "Caroline",
    "Paulina",
    "Ana",
    "Nicolay",
    "Laura",
    "Diego",
    "Jesica"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}

module.exports = { randomMsg };