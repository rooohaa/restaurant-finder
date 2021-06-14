import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getRestaurantsAsync } from 'store/reducers/restaurantsReducer';
import { getReviewsAsync } from 'store/reducers/reviewsReducer';

import { MainPage } from 'app/pages';

const Restaurants: React.FC = () => {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getRestaurantsAsync());
      dispatch(getReviewsAsync());
   }, [dispatch]);

   return <MainPage />;
};

export default Restaurants;
