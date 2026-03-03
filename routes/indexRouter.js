const { Router } = require("express");

const messages = [
    {
        text: "First!",
        user: "Alice",
        added: new Date()
    },
    {
        text: "Hi Alice!",
        user: "Bob",
        added: new Date()
    },
    {
        text: "Hello all",
        user: "Charlie",
        added: new Date()
    }
];

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
    res.render("index", {})
})

module.exports = indexRouter;