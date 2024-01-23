const bookings = require("../../model/bookings");

const createBook = async (req, res) => {
  const housedata = req.body;
  const result = await bookings.create(housedata);
  res.send(result);
};

module.exports = createBook;
