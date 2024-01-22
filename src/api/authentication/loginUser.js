const users = require("../../model/users");
const bcrypt = require("bcrypt");

const loginUser = async (req, res) => {
  const user = req.body;
  const isValid = await users.find({ email: user?.email });
  if (isValid.length < 1) {
    return res.send("unAuthentication");
  } else {
    const result = await bcrypt.compare(user?.password, isValid[0]?.password);
    console.log(result);
  }
};

module.exports = loginUser;
