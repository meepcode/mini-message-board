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

const router = Router();

router.get("/", (req, res) => {
    res.render("index", { title: "Mini Messageboard", messages: messages})
})
router.get("/new", (req, res) => {
    res.render("form", {})
})

module.exports = router;