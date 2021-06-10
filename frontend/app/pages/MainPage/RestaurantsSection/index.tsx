import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { TRestaurantsData } from 'store/reducers/restaurantsReducer';

import { RestaurantCard, Spinner } from 'app/components';
import { Container } from 'app/sc/Container';
import { sortRestaurants } from 'utils/sortRestaurants';

import { SectionWrap } from './style';

interface IProps {
   onEditAction: (rest: TRestaurantsData) => void;
}

const RestaurantsSection: React.FC<IProps> = ({ onEditAction }) => {
   const { restaurants, isLoading, error, sortProperty } = useSelector(
      (state: RootState) => state.restaurantsReducer
   );
   const filteredRestaurants = sortRestaurants(
      restaurants,
      sortProperty.toLowerCase()
   );

   if (error) {
      alert('Sorry, our server not working...');
   }

   return (
      <SectionWrap>
         <Container>
            {isLoading ? (
               <Spinner />
            ) : restaurants.length > 0 ? (
               <ul>
                  {filteredRestaurants.map(
                     ({ id, name, location, price_range }) => (
                        <RestaurantCard
                           key={id}
                           id={id}
                           name={name}
                           location={location}
                           price_range={price_range}
                           onEdit={(el) => onEditAction(el)}
                        />
                     )
                  )}
               </ul>
            ) : (
               <span className="mess">
                  There is no restaurants in our database
               </span>
            )}
         </Container>
      </SectionWrap>
   );
};

export { RestaurantsSection };
