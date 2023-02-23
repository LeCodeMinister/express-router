const express = require("express")
const {check, validationResult} = require("express-validator")

// List of Users
let users = [
    {
        name: "User 1",
        age: 30
    },
    {
        name: "User 2",
        age: 45
    },
    {
        name: "User 3",
        age: 27
    },
    {
        name: "User 4",
        age: 22
    }
]

const usersRouter = express.Router();

//GET Request:
usersRouter.get("/", (req, res) => {
    res.send(users);
})


usersRouter.get("/:id", (req, res) => {
    let myUser = users[(req.params.id - 1)];
    res.send(myUser);
})

//POST Request:
usersRouter.post("/", [check("name").not().isEmpty().trim()], (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        res.status(500).json({error: errors.array()})
    }
    try {
        users.push(req.body);
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send({err: error.message});
    }
})

//PUT Request:
usersRouter.put("/:id", (req, res) => {
    try {
        users[(req.params.id - 1)] = req.body;
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send({err: error.message});
    }
})

//DELETE Request:
usersRouter.delete("/:id", (req, res) => {
    try {
        users.splice((req.params.id - 1), 1);
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send({err: error.message});
    }
})


module.exports = usersRouter;