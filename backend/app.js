const dotenv = require('dotenv');
const morgan = require('morgan');
const express = require('express');
const cors = require('cors');

const db = require('./db');

dotenv.config();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

// Get all restaurants from database
app.get('/api/restaurants', async (req, res) => {
   try {
      const result = await db.query('SELECT * FROM restaurants');
      res.status(200).json({
         results: result.rows.length,
         restaurants: result.rows,
      });
   } catch (e) {
      console.log('Error ocurred: ', e);
   }
});

// Get restaurant by id
app.get('/api/restaurants/:id', async (req, res) => {
   const restaurantId = req.params.id;

   try {
      const result = await db.query('SELECT * FROM restaurants WHERE id = $1', [
         restaurantId,
      ]);
      res.status(200).json({
         restaurant: result.rows[0],
      });
   } catch (e) {
      console.log('Error ocurred: ', e);
   }
});

app.listen(PORT, () => {
   console.log('Server is running on port: ', PORT);
});
