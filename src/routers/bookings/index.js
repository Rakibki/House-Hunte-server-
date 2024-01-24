const express = require('express');
const createBook = require('../../api/bookings/createBook');
const bookings = require('../../api/bookings/bookings');
const router = express.Router()

router.post("/bookings", createBook)
router.get("/bookingss", bookings)


module.exports = router