const express = require("express");
const app = express();
const path = require("node:path");

const router = require("./routes/router")

app.use("/", router);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const PORT = 3000;
app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log(`Mini Message Board - Listening on port ${PORT}`);
});