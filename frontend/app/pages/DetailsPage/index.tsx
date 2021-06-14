import React from 'react';
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
      </DetailsSection>
   );
};

export { DetailsPage };
