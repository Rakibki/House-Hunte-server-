const jwt = require("jsonwebtoken");
const users = require("../model/users");

const currentUser = async (req, res) => {
  const token = await req.cookies?.token;
  jwt.verify(token,"iksdjfoijdfoijfisdjfsdjffhfencnyecnctcrtnr", async (err, decoded) => {
      if (err) {
        return res.status(401).send({ message: "unauthorized access" });
      }
      const email = decoded?.email;
      const user = await users.findOne({email: email})
      res.send(user);
    }
  );
};

module.exports = currentUser;
