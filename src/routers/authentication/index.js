const express = require('express')
const createuser = require('../../api/authentication/createUser')
const loginUser = require('../../api/authentication/loginUser')
const router = express.Router()

router.post("/register", createuser)
router.post("/login", loginUser)


module.exports = router