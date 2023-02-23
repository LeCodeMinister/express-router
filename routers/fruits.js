const express = require("express")
// List of Fruits
let fruits = [
    {
        name: "Apple",
        color: "Red"
    },
    {
        name: "Banana",
        color: "Yellow"
    },
    {
        name: "Kiwi",
        color: "Green"
    },
    {
        name: "Grape",
        color: "Purple"
    },
]


const fruitsRouter = express.Router();

fruitsRouter.get("/", (req, res) => {
    res.send(fruits);
})


fruitsRouter.get("/:id", (req, res) => {
    let myFruit = fruits[(req.params.id - 1)];
    res.send(myFruit);
})

module.exports = fruitsRouter;