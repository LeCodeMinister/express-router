const express = require("express")
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

usersRouter.get("/", (req, res) => {
    res.send(users);
})


usersRouter.get("/:id", (req, res) => {
    let myUser = users[(req.params.id - 1)];
    res.send(myUser);
})

module.exports = usersRouter;