const express = require('express');
const getHouses = require('../../api/houses/getHouses');
const router = express.Router()


router.get("/houses", getHouses)

module.exports = router;