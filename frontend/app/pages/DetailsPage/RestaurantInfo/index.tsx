import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

import { StarRating } from 'app/components';
import { TRestaurantsData } from 'store/reducers/restaurantsReducer';
import { computeAverageRating } from 'utils/computeAverageRating';
import { Container } from 'app/sc/Container';
import { InfoWrapper } from './style';

import Link from 'next/link';
import { useRouter } from 'next/router';

const RestaurantInfo: React.FC<{ restaurant: TRestaurantsData }> = ({
   restaurant,
}) => {
   const { name, location, price_range } = restaurant;
   const { query } = useRouter();
   const reviews = useSelector(
      (state: RootState) => state.reviewsReducer.reviews
   );

   let averageRating: number = 0;
   const thisReviews = reviews.filter((rev) => rev.restaurant_id === +query.id);

   if (thisReviews.length > 0) {
      averageRating = computeAverageRating(thisReviews);
   }

   return (
      <InfoWrapper>
         <Container>
            <Link href="/">
               <a className="back-link">
                  <img src="/icons/arrow-left.svg" alt="Arrow left icon" />
                  <span>Go back</span>
               </a>
            </Link>
            <div className="info">
               <h3>{name}</h3>
               <StarRating
                  rating={averageRating}
                  reviewsCount={thisReviews.length}
               />
               <div className="icon-wrap">
                  <img src="/icons/location.svg" alt="Location icon" />
                  <span>{location}</span>
               </div>
               <div className="icon-wrap">
                  <img src="/icons/tenge.svg" alt="Tenge icon" />
                  <span>{price_range} KZT</span>
               </div>
            </div>
         </Container>
      </InfoWrapper>
   );
};

export { RestaurantInfo };
