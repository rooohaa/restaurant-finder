import React from 'react';

import { Select } from 'app/components';
import { Container } from 'app/sc/Container';
import { HeaderWrap } from './style';

interface IProps {
   restaurantCount: number;
}

const Header: React.FC<IProps> = ({ restaurantCount }) => {
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
                  onSelect={(value) => console.log('Selected: ', value)}
               />
               <button className="new-btn">
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
