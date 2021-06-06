import React from 'react';

import { Container } from 'app/sc/Container';
import { RestaurantCard } from 'app/components';

import { SectionWrap } from './style';

const RestaurantsSection: React.FC = () => {
   return (
      <SectionWrap>
         <Container>
            <ul>
               <RestaurantCard
                  id={32}
                  name="Pchelomed"
                  location="Almaty, Kaskelen"
                  priceRange="2000-12000"
               />
            </ul>
         </Container>
      </SectionWrap>
   );
};

export { RestaurantsSection };
