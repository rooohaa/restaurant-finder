import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getRestaurantsAsync } from 'store/reducers/restaurantsReducer';

import { MainPage } from 'app/pages';

const Restaurants: React.FC = () => {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getRestaurantsAsync());
   }, [dispatch]);

   return <MainPage />;
};

export default Restaurants;
