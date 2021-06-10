import React from 'react';

import { RatingWrap } from './style';

interface IProps {
   rating: number;
}

const StarRating: React.FC<IProps> = ({ rating }) => {
   return (
      <RatingWrap>
         {new Array(5).fill('').map((el, idx) => {
            if (idx + 1 > rating) {
               return <img src="/icons/star-unfilled.svg" alt="Star icon" />;
            } else {
               return <img src="/icons/star-filled.svg" alt="Star icon" />;
            }
         })}
      </RatingWrap>
   );
};

export { StarRating };
