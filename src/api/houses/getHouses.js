const houses = require("../../model/houses")

const getHouses = async (req, res) => {
    const result = await houses.find()
    console.log("fiit");
    res.send(result)
}


module.exports = getHouses