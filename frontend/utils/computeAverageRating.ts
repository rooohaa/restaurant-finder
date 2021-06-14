import { TReviewsData } from 'store/reducers/reviewsReducer';

export const computeAverageRating = (reviews: TReviewsData[]): number => {
   let sum = 0;

   for (const review of reviews) {
      sum += review.rating;
   }

   return Math.floor(sum / reviews.length);
};
