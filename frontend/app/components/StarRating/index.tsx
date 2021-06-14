import React from 'react';

import { RatingWrap } from './style';

interface IProps {
   rating: number;
   reviewsCount?: number;
}

const StarRating: React.FC<IProps> = ({ rating, reviewsCount }) => {
   return (
      <RatingWrap>
         <div className="stars">
            {new Array(5).fill('').map((el, idx) => {
               if (idx + 1 > rating) {
                  return (
                     <img
                        key={idx}
                        src="/icons/star-unfilled.svg"
                        alt="Star icon"
                     />
                  );
               } else {
                  return (
                     <img
                        key={idx}
                        src="/icons/star-filled.svg"
                        alt="Star icon"
                     />
                  );
               }
            })}
         </div>
         {Number.isInteger(reviewsCount) ? <span>({reviewsCount})</span> : null}
      </RatingWrap>
   );
};

export { StarRating };
