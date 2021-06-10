const express = require('express');
const restaurantsController = require('../controllers/restaurants-controller');

const router = express.Router();

router.get('/restaurants', restaurantsController.getAllRestaurants);
router.get('/restaurants/:id', restaurantsController.getRestaurantById);
router.post('/restaurants', restaurantsController.createNewRestaurant);
router.put('/restaurants/:id', restaurantsController.updateRestaurant);
router.delete('/restaurants/:id', restaurantsController.deleteRestaurant);

module.exports = router;
