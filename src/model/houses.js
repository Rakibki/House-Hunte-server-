const { model, Schema } = require("mongoose");

const userHouses = new Schema({
  image: {
    type: String,
    // required: true,
  },
  title: {
    type: String,
    // required: true,
  },
  Size: {
    type: String,
    // required: true,
  },
  number: {
    type: String,
    // required: true,
  },
  Bedrooms: {
    type: String,
    // required: true,
  },
  Bathrooms: {
    type: String,
    // required: true,
  },
  price: {
    type: String,
    // required: true,
  },
  host: {
    type: Object,
    // required: true,
  },
  Renovation: {
    type: String,
    // required: true,
  },
  description: {
    type: String,
    // required: true,
  },
});

const houses = model("houses", userHouses);

module.exports = houses;
