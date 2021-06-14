import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getReviewsAsync } from 'store/reducers/reviewsReducer';

import { DetailsPage } from 'app/pages';
import { TRestaurantsData } from 'store/reducers/restaurantsReducer';

const RetaurantDetails: React.FC<{ currentRestaurant: TRestaurantsData }> = ({
   currentRestaurant,
}) => {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getReviewsAsync());
   }, [dispatch]);

   return <DetailsPage restaurant={currentRestaurant} />;
};

export const getServerSideProps = async (context) => {
   const { id } = context.query;

   const res = await fetch(`http://localhost:8000/api/restaurants/${id}`);
   const currentRestaurant = await res.json();

   return {
      props: {
         currentRestaurant,
      },
   };
};

export default RetaurantDetails;
