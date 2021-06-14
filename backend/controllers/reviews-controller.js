const db = require('../db');

const getAllReviews = async (req, res) => {
   try {
      const result = await db.query('SELECT * FROM reviews;');
      res.status(200).json(result.rows);
   } catch (e) {
      console.log('Error ocurred: ', e);
   }
};

module.exports = {
   getAllReviews,
};
