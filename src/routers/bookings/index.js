const express = require('express');
const createBook = require('../../api/bookings/createBook');
const router = express.Router()

router.post("/bookings", createBook)


module.exports = router