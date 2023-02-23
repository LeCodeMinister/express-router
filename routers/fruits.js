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

//GET Request:
fruitsRouter.get("/", (req, res) => {
    res.send(fruits);
})

fruitsRouter.get("/:id", (req, res) => {
    let myFruit = fruits[(req.params.id - 1)];
    res.send(myFruit);
})

//POST Request:
fruitsRouter.post("/", (req, res) => {
    try {
        fruits.push(req.body);
        res.status(200).send(fruits);
    } catch (error) {
        res.status(500).send({err: error.message});
    }
})

//PUT Request:
fruitsRouter.put("/:id", (req, res) => {
    try {
        fruits[(req.params.id - 1)] = req.body;
        res.status(200).send(fruits);
    } catch (error) {
        res.status(500).send({err: error.message});
    }
})

//DELETE Request:
fruitsRouter.delete("/:id", (req, res) => {
    try {
        fruits.splice((req.params.id - 1), 1);
        res.status(200).send(fruits);
    } catch (error) {
        res.status(500).send({err: error.message});
    }
})

module.exports = fruitsRouter;