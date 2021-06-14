import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

import { ReviewCard } from 'app/components';
import { Container } from 'app/sc/Container';
import { ReviewsWrap } from './style';

import { useRouter } from 'next/router';

const Reviews: React.FC = () => {
   const { query } = useRouter();
   const allReviews = useSelector(
      (state: RootState) => state.reviewsReducer.reviews
   );

   const currentReviews = allReviews.filter(
      (review) => review.restaurant_id === +query.id
   );

   return (
      <ReviewsWrap>
         <Container>
            <div className="reviews-list">
               {currentReviews.length > 0 ? (
                  currentReviews.map((rev) => (
                     <ReviewCard
                        key={rev.id}
                        name={rev.name}
                        rating={rev.rating}
                        review={rev.review}
                     />
                  ))
               ) : (
                  <h3>This retaurant has no reviews yet.</h3>
               )}
            </div>
         </Container>
      </ReviewsWrap>
   );
};

export { Reviews };
