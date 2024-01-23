const users = require("../../model/users");
const { Types } = require("mongoose");

const getSingleHouse = async (req, res) => {
  const id = req.params.id;
  //   const objectId = Types.ObjectId(id);

  // const house = await users.findById(id, (err, document) => {
  //   if (err) {
  //     console.error(err);
  //     // Handle error appropriately
  //   } else {
  //     console.log("Found document:", document);
  //     // Do something with the found document
  //   }
  // });
  // console.log(house);
  // res.send(house);
};

module.exports = getSingleHouse;
