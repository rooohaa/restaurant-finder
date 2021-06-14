const db = require('../db');

const getAllRestaurants = async (req, res) => {
   try {
      const result = await db.query('SELECT * FROM restaurants;');
      res.status(200).json(result.rows);
   } catch (e) {
      console.log('Error ocurred: ', e);
   }
};

const createNewRestaurant = async (req, res) => {
   const { name, location, price_range } = req.body;

   try {
      const result = await db.query(
         'INSERT INTO restaurants (name, location, price_range) VALUES ($1, $2, $3) RETURNING *;',
         [name, location, price_range]
      );
      res.status(200).json(result.rows[0]);
   } catch (e) {}
};

const deleteRestaurant = async (req, res) => {
   const restaurantId = req.params.id;

   try {
      const result = await db.query(
         'DELETE FROM restaurants WHERE id = $1 RETURNING *;',
         [restaurantId]
      );
      res.status(200).json(result.rows[0]);
   } catch (e) {}
};

const updateRestaurant = async (req, res) => {
   const restaurantId = req.params.id;
   const { name, location, price_range } = req.body;

   try {
      const result = await db.query(
         'UPDATE restaurants SET name = $1, location = $2, price_range = $3 WHERE id = $4 RETURNING *;',
         [name, location, price_range, restaurantId]
      );
      res.status(200).json(result.rows[0]);
   } catch (e) {}
};

const getRestaurantById = async (req, res) => {
   const restaurantId = req.params.id;

   try {
      const result = await db.query(
         'SELECT * FROM restaurants WHERE id = $1;',
         [restaurantId]
      );
      res.status(200).json(result.rows[0]);
   } catch (e) {
      console.log('Error ocurred: ', e);
   }
};

module.exports = {
   getAllRestaurants,
   createNewRestaurant,
   deleteRestaurant,
   updateRestaurant,
   getRestaurantById,
};
