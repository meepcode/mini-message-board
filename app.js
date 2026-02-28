const express = require("express");
const app = express();

const indexRouter = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");

app.use("/", indexRouter);
app.use("/new", newRouter);

const PORT = 3000;
app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log(`Mini Message Board - Listening on port ${PORT}`);
});