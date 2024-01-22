const express = require("express");
const applyMiddleware = require("./middleware/applyMiddleware");
const port = process.env.PORT || 4001;

const app = express();

applyMiddleware(app)


app.listen(port, () => {
    console.log("server is running");
})