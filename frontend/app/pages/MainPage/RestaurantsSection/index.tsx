import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

import { Container } from 'app/sc/Container';
import { RestaurantCard, Spinner } from 'app/components';

import { SectionWrap } from './style';

const RestaurantsSection: React.FC = () => {
   const { restaurants, isLoading, error } = useSelector(
      (state: RootState) => state.restaurantsReducer
   );

   if (error) {
      alert('Sorry, our server not working...');
   }

   return (
      <SectionWrap>
         <Container>
            {isLoading ? (
               <Spinner />
            ) : (
               <ul>
                  {restaurants.map(({ id, name, location, price_range }) => (
                     <RestaurantCard
                        key={id}
                        id={id}
                        name={name}
                        location={location}
                        price_range={price_range}
                     />
                  ))}
               </ul>
            )}
         </Container>
      </SectionWrap>
   );
};

export { RestaurantsSection };
