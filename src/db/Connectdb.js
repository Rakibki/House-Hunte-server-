const mongoose = require('mongoose')

const connectDb = async () => {
    const uri = "mongodb+srv://HouseHunter:6yJm41orYiFwzST2@cluster0.sinogwr.mongodb.net/?retryWrites=true&w=majority";
    console.log("connecting Db");
    mongoose.connect(uri, {DbName: "HouseHunter"})
    console.log("connected Db");
}


module.exports = connectDb