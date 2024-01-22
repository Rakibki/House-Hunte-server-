const bcrypt = require("bcrypt");
const users = require("../../model/users");

const createuser = async (req, res) => {
  const user = await req.body
  const name = user?.name;
  const email = user?.email;
  const image = user?.image;
  const role = user?.role;
  const phone = user?.phone;
  const rowPassword = user?.password
  const password = await bcrypt.hash(rowPassword, 10);
  console.log(rowPassword);
  const updateUser = {name, email, password, image, role, phone}
  const result = await users.create(updateUser);
  res.send(result)
};

module.exports = createuser;
