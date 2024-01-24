const { model, Schema } = require("mongoose");

const bookingSchema = new Schema({
  houseId: {
    type: String,
    // required: true,
  },
  name: {
    type: String,
    // required: true,
  },

  email: {
    type: String,
    // required: true,
  },
  ownweEmail: {
    type: String,
    // required: true,
  },
});

const bookings = model("bookings", bookingSchema);

module.exports = bookings;
