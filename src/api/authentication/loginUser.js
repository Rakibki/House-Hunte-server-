const users = require("../../model/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const loginUser = async (req, res) => {
  const user = req.body;
  const isValid = await users.find({ email: user?.email });
  if (isValid.length < 1) {
    return res.send("unAuthentication");
  } else {
    const result = await bcrypt.compare(user?.password, isValid[0]?.password);
    if (result) {
      const token = await jwt.sign(
        { email: isValid[0].email, userId: isValid[0]._id },
        "iksdjfoijdfoijfisdjfsdjffhfencnyecnctcrtnr",
        { expiresIn: "1h" }
      );
      res.cookie("token", token, {
        secure: true,
        sameSite: "none",
        httpOnly: true,
      });
      res.send({ success: true });
    } else {
      return res.send("unAuthentication");
    }
  }
};

module.exports = loginUser;
