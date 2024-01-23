const express = require('express');
const getHouses = require('../../api/houses/getHouses');
const getSingleHouse = require('../../api/houses/getSingleHouse');
const router = express.Router()


router.get("/houses", getHouses)
router.get("/house/:id", getSingleHouse)

module.exports = router;