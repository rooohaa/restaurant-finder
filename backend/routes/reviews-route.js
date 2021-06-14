const express = require('express');
const reviewsController = require('../controllers/reviews-controller');

const router = express.Router();

router.get('/reviews', reviewsController.getAllReviews);

module.exports = router;
