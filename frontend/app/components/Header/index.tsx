import React from 'react';

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

            <button className="new-btn">
               <div>
                  <img src="/icons/plus.svg" alt="Plus icon" />
               </div>

               <span>New Restaurant</span>
            </button>
         </Container>
      </HeaderWrap>
   );
};

export { Header };
