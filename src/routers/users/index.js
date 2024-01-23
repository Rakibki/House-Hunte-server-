const express = require('express');
const currentuser = require('../../utils/currentUser');
const router = express.Router()

router.get("/currentUser", currentuser)


module.exports = router;