const dotenv = require('dotenv');
const morgan = require('morgan');
const express = require('express');
const cors = require('cors');

const restaurantsRoute = require('./routes/restaurants-route');
const reviewsRoute = require('./routes/reviews-route');

dotenv.config();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/api', restaurantsRoute);
app.use('/api', reviewsRoute);

app.listen(PORT, () => {
   console.log('Server is running on port: ', PORT);
});
