const db = require('../db');

const getAllReviews = async (req, res) => {
   try {
      const result = await db.query('SELECT * FROM reviews;');
      res.status(200).json(result.rows);
   } catch (e) {
      console.log('Error ocurred: ', e);
   }
};

const createNewReview = async (req, res) => {
   const { name, review, rating, restaurant_id } = req.body;

   try {
      const result = await db.query(
         'INSERT INTO reviews (name, review, rating, restaurant_id) VALUES ($1, $2, $3, $4) RETURNING *;',
         [name, review, rating, restaurant_id]
      );
      res.status(200).json(result.rows[0]);
   } catch (e) {}
};

module.exports = {
   getAllReviews,
   createNewReview,
};
