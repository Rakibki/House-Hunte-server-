const express = require("express");
const applyMiddleware = require("./src/middleware/applyMiddleware");
const connectDb = require("./src/db/Connectdb");
const port = process.env.PORT || 4001;
const authenticationRoutr = require("./src/routers/authentication/index")
const houseRoutr = require("./src/routers/houses/index")
const userRoutr = require("./src/routers/users/index")
const bookingRoutr = require("./src/routers/bookings/index")

const app = express();

applyMiddleware(app);
app.use(authenticationRoutr)
app.use(houseRoutr)
app.use(userRoutr)
app.use(bookingRoutr)

app.get("/", (req, res) => {
  res.send("House Hunter is running")
})

const main = async () => {
  await connectDb();
  app.listen(port, () => {
    console.log("server is running");
  });
};

main();
