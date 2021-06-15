import React from 'react';
import { ReviewForm } from 'app/components';
import { TRestaurantsData } from 'store/reducers/restaurantsReducer';
import { RestaurantInfo } from './RestaurantInfo';
import { Reviews } from './Reviews';

import { DetailsSection } from './style';

const DetailsPage: React.FC<{ restaurant: TRestaurantsData }> = ({
   restaurant,
}) => {
   return (
      <DetailsSection>
         <RestaurantInfo restaurant={restaurant} />
         <Reviews />
         <ReviewForm />
      </DetailsSection>
   );
};

export { DetailsPage };
