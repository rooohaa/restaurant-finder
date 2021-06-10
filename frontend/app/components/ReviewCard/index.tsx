import React from 'react';
import { StarRating } from 'app/components';

import { ReviewCardWrap } from './style';

interface IProps {
   name: string;
   rating: number;
   review: string;
}

const ReviewCard: React.FC<IProps> = ({ name, rating, review }) => {
   return (
      <ReviewCardWrap>
         <div className="card-header">
            <h5 className="reviewer-name">{name}</h5>
            <StarRating rating={rating} />
         </div>
         <p>{review}</p>
      </ReviewCardWrap>
   );
};

export { ReviewCard };
