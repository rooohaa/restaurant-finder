import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

import { Select } from 'app/components';
import { Container } from 'app/sc/Container';
import { HeaderWrap } from './style';

interface IProps {
   onFormOpen: () => void;
}

const Header: React.FC<IProps> = ({ onFormOpen }) => {
   const restaurantCount = useSelector(
      (state: RootState) => state.restaurantsReducer.restaurants.length
   );

   return (
      <HeaderWrap>
         <Container>
            <div className="logo-wrap">
               <h1>Restaurants</h1>
               <p>{restaurantCount} total restaurants</p>
            </div>

            <div className="controls">
               <Select
                  data={[
                     {
                        id: 1,
                        value: 'Name',
                     },
                     {
                        id: 2,
                        value: 'Location',
                     },
                     {
                        id: 3,
                        value: 'Price',
                     },
                  ]}
               />
               <button className="new-btn" onClick={onFormOpen}>
                  <div>
                     <img src="/icons/plus.svg" alt="Plus icon" />
                  </div>

                  <span>New Restaurant</span>
               </button>
            </div>
         </Container>
      </HeaderWrap>
   );
};

export { Header };
