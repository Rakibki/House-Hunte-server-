const express = require("express");
const applyMiddleware = require("./middleware/applyMiddleware");
const connectDb = require("./db/Connectdb");
const port = process.env.PORT || 4001;
const authenticationRoutr = require("./routers/authentication/index")
const houseRoutr = require("./routers/houses/index")
const userRoutr = require("./routers/users/index")
const bookingRoutr = require("./routers/bookings/index")

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
